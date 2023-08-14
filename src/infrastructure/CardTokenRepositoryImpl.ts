// import Amplitude from 'amplitude';
import { inject, injectable } from "inversify";
import { CardTokenRepository } from "../dominio/CardTokenRepository";
import { Card } from "../dominio/Card";
import { Token } from "../dominio/Token";
import { TYPES } from "../di/TYPES";
import { generateRandomToken } from "../helpers/generateTokenHelper";
import { RedisRepository } from "../dominio/RedisRepository";

@injectable()
export class CardTokenRepositoryImpl implements CardTokenRepository {
  constructor(
    @inject(TYPES.RedisRepository) private redisRepository: RedisRepository
  ) {}
  async createToken(card: Card): Promise<Token> {
    const token = generateRandomToken();
    card.setToken(token);
    await this.redisRepository.saveCard(card);
    return {
      bearerToken: token,
    };
  }
  async getCard(token: string): Promise<Card> {
    return await this.redisRepository.getCard(token);
  }
}
