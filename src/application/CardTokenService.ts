import { Card } from "../dominio/Card";
import { Token } from "../dominio/Token";

export interface CardTokenService {
  createToken(cardBodyRequest: Card): Promise<Token>;
  getCard(token: string): Promise<Card>;
}
