"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCardTypeHelper = void 0;
const cardConst_1 = require("../common/cardConst");
const getCardTypeHelper = (card_number) => {
    const cardPatterns = cardConst_1.VALID_CARD_TYPES;
    const matchingTypes = cardPatterns.find((pattern) => pattern.pattern.test(card_number.toString()));
    return (matchingTypes ? matchingTypes.type : cardConst_1.CARD_TYPE_DEFAULT);
};
exports.getCardTypeHelper = getCardTypeHelper;
