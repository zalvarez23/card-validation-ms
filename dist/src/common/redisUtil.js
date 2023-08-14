"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRedisConnection = void 0;
const ioredis_1 = require("ioredis");
const tokenConst_1 = require("./tokenConst");
const mocks_1 = require("../../test/mocks");
const createRedisConnection = () => {
    if (process.env.REDIS_IS_TEST === "true") {
        return mocks_1.REDIS_CLIENT_MOCK;
    }
    const redis = new ioredis_1.default({
        host: process.env.REDIS_HOST,
        port: tokenConst_1.DEFAULT_REDIS_PORT,
    });
    return redis;
};
exports.createRedisConnection = createRedisConnection;
