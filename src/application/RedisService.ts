import { Card } from "../dominio/Card";

export interface RedisService {
  saveCard(card: Card): Promise<void>;
  getCard(token: string): Promise<Card>;
}
