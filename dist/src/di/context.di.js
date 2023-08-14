"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContainerContext = void 0;
require("reflect-metadata");
const TYPES_1 = require("./TYPES");
const CardTokenServiceImpl_1 = require("../application/CardTokenServiceImpl");
const CardTokenRepositoryImpl_1 = require("../infrastructure/CardTokenRepositoryImpl");
const RedisServiceImpl_1 = require("../application/RedisServiceImpl");
const RedisRepositoryImpl_1 = require("../infrastructure/RedisRepositoryImpl");
const inversify_1 = require("inversify");
class ContainerContext {
    constructor() {
        this.container = new inversify_1.Container({ defaultScope: "Singleton" });
        this.container
            .bind(TYPES_1.TYPES.CardTokenService)
            .to(CardTokenServiceImpl_1.CardTokenServiceImpl);
        this.container
            .bind(TYPES_1.TYPES.CardTokenRepository)
            .to(CardTokenRepositoryImpl_1.CardTokenRepositoryImpl);
        this.container.bind(TYPES_1.TYPES.RedisService).to(RedisServiceImpl_1.RedisServiceImpl);
        this.container
            .bind(TYPES_1.TYPES.RedisRepository)
            .to(RedisRepositoryImpl_1.RedisRepositoryImpl);
    }
}
exports.ContainerContext = ContainerContext;
