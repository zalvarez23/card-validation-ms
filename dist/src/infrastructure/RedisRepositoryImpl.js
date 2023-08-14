"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisRepositoryImpl = void 0;
// import Amplitude from 'amplitude';
const inversify_1 = require("inversify");
const redisUtil_1 = require("../common/redisUtil");
const errors_1 = require("../libs/errors");
const responsesCodes_1 = require("../libs/responsesCodes");
const tokenConst_1 = require("../common/tokenConst");
let RedisRepositoryImpl = exports.RedisRepositoryImpl = class RedisRepositoryImpl {
    constructor() {
        this.redis = (0, redisUtil_1.createRedisConnection)();
        this.hashKey = process.env.REDIS_KEY || tokenConst_1.DEFAULT_REDIS_KEY;
        this.redisExpiration =
            process.env.REDIS_EXPIRATION || tokenConst_1.DEFAULT_REDIS_EXPIRATION;
    }
    async saveCard(card) {
        const dataString = JSON.stringify(card);
        await this.redis.hset(this.hashKey, card.token, dataString);
        await this.redis.pexpire(this.hashKey, this.redisExpiration);
    }
    async getCard(token) {
        const tokenReplaced = token.replace("Bearer ", "");
        const cardResponse = await this.redis.hget(this.hashKey, tokenReplaced);
        if (!cardResponse) {
            throw new errors_1.BadRequestError(responsesCodes_1.HttpStatusTypes.EMPTY_CARD_REDIS, responsesCodes_1.HttpStatusMessages.EMPTY_CARD_REDIS);
        }
        return JSON.parse(cardResponse);
    }
};
exports.RedisRepositoryImpl = RedisRepositoryImpl = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], RedisRepositoryImpl);
