import { Card } from "../dominio/Card";

export interface RedisRepository {
  saveCard(card: Card): Promise<void>;
  getCard(token: string): Promise<Card>;
}
