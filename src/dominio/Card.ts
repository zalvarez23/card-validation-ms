import { ECardTypes } from "../common/cardConst";
import { CardRequestBody } from "../common/cardRequestInterface";
import {
  validateCardHelper,
  validateCvvHelper,
  validateMonthHelper,
  validateYearHelper,
  validateEmailHelper,
  getCardTypeHelper,
} from "../helpers";

export class Card {
  public email: string;
  public card_number: number;
  public cvv: number;
  public expiration_year: string;
  public expiration_month: string;
  public token: string;
  constructor(bodyCard: CardRequestBody) {
    this.email = bodyCard.email;
    this.card_number = bodyCard.card_number;
    this.cvv = bodyCard.cvv;
    this.expiration_year = bodyCard.expiration_year;
    this.expiration_month = bodyCard.expiration_month;
    this.token = bodyCard.token;
  }

  setToken(token: string): void {
    this.token = token;
  }
  validateEmail(): boolean {
    return validateEmailHelper(this.email);
  }
  validateCard_number(): boolean {
    return validateCardHelper(this.card_number);
  }

  validateCvv(): boolean {
    return validateCvvHelper(this.cvv);
  }

  validateMonth(): boolean {
    return validateMonthHelper(this.expiration_month);
  }

  validateYear(): boolean {
    return validateYearHelper(this.expiration_year);
  }

  getCardType(): ECardTypes {
    return getCardTypeHelper(this.card_number);
  }
}
