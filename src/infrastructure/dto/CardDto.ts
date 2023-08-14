import { CardRequestBody } from "../../common/cardRequestInterface";
import { Card } from "../../dominio/Card";

export class CardDto {
  public email: string;
  public card_number: number;
  public expiration_year: string;
  public expiration_month: string;
  constructor(bodyCard: CardRequestBody) {
    this.email = bodyCard.email;
    this.card_number = bodyCard.card_number;
    this.expiration_year = bodyCard.expiration_year;
    this.expiration_month = bodyCard.expiration_month;
  }
}

export const convertToResponseCardDto = (card: Card): CardDto => {
  const cardDto = new CardDto(card);
  return cardDto;
};
