"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const helpers_1 = require("../helpers");
class Card {
    constructor(bodyCard) {
        this.email = bodyCard.email;
        this.card_number = bodyCard.card_number;
        this.cvv = bodyCard.cvv;
        this.expiration_year = bodyCard.expiration_year;
        this.expiration_month = bodyCard.expiration_month;
        this.token = bodyCard.token;
    }
    setToken(token) {
        this.token = token;
    }
    validateEmail() {
        return (0, helpers_1.validateEmailHelper)(this.email);
    }
    validateCard_number() {
        return (0, helpers_1.validateCardHelper)(this.card_number);
    }
    validateCvv() {
        return (0, helpers_1.validateCvvHelper)(this.cvv);
    }
    validateMonth() {
        return (0, helpers_1.validateMonthHelper)(this.expiration_month);
    }
    validateYear() {
        return (0, helpers_1.validateYearHelper)(this.expiration_year);
    }
    getCardType() {
        return (0, helpers_1.getCardTypeHelper)(this.card_number);
    }
}
exports.Card = Card;
