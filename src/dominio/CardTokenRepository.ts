import { Card } from "./Card";
import { Token } from "./Token";

export interface CardTokenRepository {
  createToken(bardBodyRequest: Card): Promise<Token>;
  getCard(token: string): Promise<Card>;
}
