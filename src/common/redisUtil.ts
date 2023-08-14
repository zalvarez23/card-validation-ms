import Redis from "ioredis";
import { DEFAULT_REDIS_PORT } from "./tokenConst";
import * as RedisMock from "redis-mock";
import { REDIS_CLIENT_MOCK } from "../../test/mocks";
const createRedisConnection = (): Redis | RedisMock.RedisClient => {
  if (process.env.REDIS_IS_TEST === "true") {
    return REDIS_CLIENT_MOCK;
  }
  const redis = new Redis({
    host: process.env.REDIS_HOST,
    port: DEFAULT_REDIS_PORT,
  });
  return redis;
};

export { createRedisConnection };
