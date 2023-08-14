import { inject, injectable } from "inversify";
import { Card } from "../dominio/Card";
import { TYPES } from "../di/TYPES";
import { RedisService } from "./RedisService";
import { RedisRepository } from "../dominio/RedisRepository";

@injectable()
export class RedisServiceImpl implements RedisService {
  constructor(
    @inject(TYPES.RedisRepository)
    private redisRepository: RedisRepository
  ) {}

  async saveCard(cardBodyRequest: Card): Promise<void> {
    await this.redisRepository.saveCard(cardBodyRequest);
  }
  async getCard(token: string): Promise<Card> {
    return this.redisRepository.getCard(token);
  }
}
