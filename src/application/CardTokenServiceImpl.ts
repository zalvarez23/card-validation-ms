import { inject, injectable } from "inversify";
import { CardTokenService } from "./CardTokenService";
import { CardTokenRepository } from "../dominio/CardTokenRepository";
import { Card } from "../dominio/Card";
import { Token } from "../dominio/Token";
import { TYPES } from "../di/TYPES";

@injectable()
export class CardTokenServiceImpl implements CardTokenService {
  constructor(
    @inject(TYPES.CardTokenRepository)
    private cardTokenRepository: CardTokenRepository
  ) {}

  async createToken(cardBodyRequest: Card): Promise<Token> {
    return await this.cardTokenRepository.createToken(cardBodyRequest);
  }

  async getCard(token: string): Promise<Card> {
    return await this.cardTokenRepository.getCard(token);
  }
}
