import "reflect-metadata";
import { TYPES } from "./TYPES";
import { CardTokenService } from "../application/CardTokenService";
import { CardTokenServiceImpl } from "../application/CardTokenServiceImpl";

import { CardTokenRepository } from "../dominio/CardTokenRepository";
import { CardTokenRepositoryImpl } from "../infrastructure/CardTokenRepositoryImpl";
import { RedisService } from "../application/RedisService";
import { RedisServiceImpl } from "../application/RedisServiceImpl";
import { RedisRepository } from "../dominio/RedisRepository";
import { RedisRepositoryImpl } from "../infrastructure/RedisRepositoryImpl";
import { Container } from "inversify";

export class ContainerContext {
  readonly container: Container;

  constructor() {
    this.container = new Container({ defaultScope: "Singleton" });
    this.container
      .bind<CardTokenService>(TYPES.CardTokenService)
      .to(CardTokenServiceImpl);
    this.container
      .bind<CardTokenRepository>(TYPES.CardTokenRepository)
      .to(CardTokenRepositoryImpl);

    this.container.bind<RedisService>(TYPES.RedisService).to(RedisServiceImpl);
    this.container
      .bind<RedisRepository>(TYPES.RedisRepository)
      .to(RedisRepositoryImpl);
  }
}
