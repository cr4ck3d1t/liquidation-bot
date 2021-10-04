import BigNumber from "bignumber.js";
import { Expose, Transform } from "class-transformer";
import { DatastoreDocument, Index, Key } from "../db/document";
import { bn, ray } from "../math";
import { DatastoreRepository } from '../db/repository';
import { defined } from '../utils';

function BigNumberTransform() {
  return Transform((params) => {
    if (typeof params.value === "string") {
      // to class case
      return bn(params.value);
    } else if (params.value instanceof BigNumber) {
      // to plain case
      return params.value.str();
    }
  });
}

export class Lazy<T> {
  private cachedValue?: T;
  loading: boolean;

  get value(): Promise<T> {
    return new Promise(async (resolve, reject) => {
      if (!this.cachedValue)
        try {
          this.cachedValue = await this.loadFn();
        } catch (e) {
          return reject(e);
        }

      if (this.cachedValue) resolve(this.cachedValue);
      else
        reject(
          new Error("Load function done with error but didnt return value")
        );
    });
  }

  constructor(private loadFn: (...args: any[]) => Promise<T>) {
    this.loading = false;
  }
}

const HexKey = (size: number) =>
  Key({
    size,
    transform: (hex: string) => {
      const buf = Buffer.alloc(size, 0);
      hex = hex.startsWith("0x") ? hex.substr(2) : hex;

      if (size < buf.length) {
        throw new Error("HexIndex is not long enough");
      }

      Buffer.from(hex, "hex").copy(buf, size - buf.length);

      return buf;
    },
  });

const AddressKey = () => HexKey(20);

const HexIndex = (size: number) =>
  Index({
    size,
    getter: (hex?: string) => {
      const buf = Buffer.alloc(size, 0);
      if (hex) {
        hex = hex.startsWith("0x") ? hex.substr(2) : hex;

        if (size < buf.length) {
          throw new Error("HexIndex is not long enough");
        }

        Buffer.from(hex, "hex").copy(buf, size - buf.length);
      }
      return buf;
    },
  });

const AddressIndex = () => HexIndex(20);

const BooleanIndex = () =>
  Index({
    size: 1,
    getter: (value: boolean) => {
      return Buffer.alloc(1, value ? 1 : 0);
    },
  });

const BigNumberIndex = (size: number = 32) =>
  Index({
    size,
    getter: (value: BigNumber) => {
      const result = Buffer.alloc(size, 0);
      const tmp = Buffer.from(value.toString(16), "hex");
      tmp.copy(result, size - tmp.length, 0);
      return result;
    },
  });

export class Token extends DatastoreDocument<Token> {
  @AddressKey()
  address!: string;
  @Index()
  name!: string;
  @Index()
  symbol!: string;
  @BooleanIndex()
  lendable!: boolean;
  @BooleanIndex()
  proxy!: boolean;
  @BooleanIndex()
  shortable!: boolean;
  @BooleanIndex()
  tradable!: boolean;
  decimals!: number;
}

export class Pair extends DatastoreDocument<Pair> {
  @AddressKey()
  address!: string;
  @AddressIndex()
  lendable!: string;
  @AddressIndex()
  tradable!: string;
  @AddressIndex()
  proxy?: string;
  @BooleanIndex()
  short!: boolean;

  @Index()
  updateAt!: number;

  async getPath(tokenRepository: DatastoreRepository<Token>): Promise<string> {
    const lendableToken = await tokenRepository.get(this.lendable)
    const tradableToken = await tokenRepository.get(this.tradable)
    /* eslint no-undefined: "off" */
    const proxyToken = this.proxy ? await tokenRepository.get(this.proxy) : undefined

    return [lendableToken, proxyToken, tradableToken].
    map((token) => token?.symbol).
    filter(defined).
    join('/')
  }
}

export class Transfer extends DatastoreDocument<Transfer> { }

export class Position extends DatastoreDocument<Position> {
  @HexKey(42)
  get id() {
    return Position.toId(this.short, this.pair, this.trader);
  }

  @AddressIndex()
  lendable!: string;
  @AddressIndex()
  tradable!: string;
  @AddressIndex()
  proxy?: string;
  @AddressIndex()
  trader!: string;
  @AddressIndex()
  pair!: string;
  @Index()
  updateAt!: number;
  @Index()
  appearAt!: number;

  lastUpdatedAt?: number;

  @BigNumberIndex()
  @BigNumberTransform()
  amount!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  value!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  selfValue!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  principalDebt!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  currentDebt!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  rate!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  currentCost!: BigNumber;
  @BigNumberIndex()
  @BigNumberTransform()
  liquidationCost!: BigNumber;
  @BooleanIndex()
  short!: boolean;

  @Expose()
  @BigNumberIndex()
  @BigNumberTransform()
  get health() {
    return ray(
      this.currentCost.gt(this.liquidationCost)
        ? this.currentCost.sub(this.liquidationCost).div(this.currentCost)
        : bn(0)
    );
  }

  static toId(short: boolean, pair: string, trader: string) {
    pair = pair.startsWith("0x") ? pair.substr(2) : pair;
    trader = trader.startsWith("0x") ? trader.substr(2) : trader;
    const prefix = short ? "10" : '00'
    return [prefix, pair, trader].join("");
  }

  async getPath(tokenRepository: DatastoreRepository<Token>): Promise<string> {
    const lendableToken = await tokenRepository.get(this.lendable)
    const tradableToken = await tokenRepository.get(this.tradable)
    /* eslint no-undefined: "off" */
    const proxyToken = this.proxy ? await tokenRepository.get(this.proxy) : undefined

    return [lendableToken, proxyToken, tradableToken].
    map((token) => token?.symbol).
    filter(defined).
    join('/')
  }
}

export class State extends DatastoreDocument<State> {
  @Key()
  id!: string;
}
