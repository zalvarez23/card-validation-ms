"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestBodyCard = void 0;
const errors_1 = require("../../../libs/errors");
const responsesCodes_1 = require("../../../libs/responsesCodes");
const validateRequestBodyCard = (card) => {
    const validations = [
        {
            validationFn: card.validateEmail,
            errorMessage: responsesCodes_1.HttpStatusMessages.BAD_EMAIL_BODY_REQUEST,
        },
        {
            validationFn: card.validateCard_number,
            errorMessage: responsesCodes_1.HttpStatusMessages.BAD_CARD_BODY_REQUEST,
        },
        {
            validationFn: card.validateCvv,
            errorMessage: responsesCodes_1.HttpStatusMessages.BAD_CVV_BODY_REQUEST,
        },
        {
            validationFn: card.validateYear,
            errorMessage: responsesCodes_1.HttpStatusMessages.BAD_YEAR_BODY_REQUEST,
        },
        {
            validationFn: card.validateMonth,
            errorMessage: responsesCodes_1.HttpStatusMessages.BAD_MONTH_BODY_REQUEST,
        },
    ];
    for (const { validationFn, errorMessage } of validations) {
        if (!validationFn.call(card)) {
            throw new errors_1.BadRequestError(responsesCodes_1.HttpStatusTypes.BAD_BODY_REQUEST, errorMessage);
        }
    }
};
exports.validateRequestBodyCard = validateRequestBodyCard;
