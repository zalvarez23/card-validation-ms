"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToResponseCardDto = exports.CardDto = void 0;
class CardDto {
    constructor(bodyCard) {
        this.email = bodyCard.email;
        this.card_number = bodyCard.card_number;
        this.expiration_year = bodyCard.expiration_year;
        this.expiration_month = bodyCard.expiration_month;
    }
}
exports.CardDto = CardDto;
const convertToResponseCardDto = (card) => {
    const cardDto = new CardDto(card);
    return cardDto;
};
exports.convertToResponseCardDto = convertToResponseCardDto;
