// import Amplitude from 'amplitude';
import { injectable } from "inversify";
import { Card } from "../dominio/Card";
import { RedisRepository } from "../dominio/RedisRepository";
import { Redis } from "ioredis";
import { createRedisConnection } from "../common/redisUtil";
import { BadRequestError } from "../libs/errors";
import { HttpStatusMessages, HttpStatusTypes } from "../libs/responsesCodes";
import {
  DEFAULT_REDIS_EXPIRATION,
  DEFAULT_REDIS_KEY,
} from "../common/tokenConst";

@injectable()
export class RedisRepositoryImpl implements RedisRepository {
  private hashKey: string;
  private redisExpiration: string | number;
  private redis: Redis;
  constructor() {
    this.redis = createRedisConnection() as Redis;
    this.hashKey = process.env.REDIS_KEY || DEFAULT_REDIS_KEY;
    this.redisExpiration =
      process.env.REDIS_EXPIRATION || DEFAULT_REDIS_EXPIRATION;
  }
  async saveCard(card: Card): Promise<void> {
    const dataString = JSON.stringify(card);
    await this.redis.hset(this.hashKey, card.token, dataString);
    await this.redis.pexpire(this.hashKey, this.redisExpiration);
  }
  async getCard(token: string): Promise<Card> {
    const tokenReplaced = token.replace("Bearer ", "");
    const cardResponse = await this.redis.hget(this.hashKey, tokenReplaced);
    if (!cardResponse) {
      throw new BadRequestError(
        HttpStatusTypes.EMPTY_CARD_REDIS,
        HttpStatusMessages.EMPTY_CARD_REDIS
      );
    }
    return JSON.parse(cardResponse) as Card;
  }
}
