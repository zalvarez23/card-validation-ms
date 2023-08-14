"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CARD_TYPE_DEFAULT = exports.VALID_CARD_TYPES = exports.VALID_DOMAINS_EMAILS = void 0;
exports.VALID_DOMAINS_EMAILS = ["gmail.com", "hotmail.com", "yahoo.es"];
exports.VALID_CARD_TYPES = [
    { pattern: /^(123|4[0-9]{2})/, type: "Visa/Mastercard" },
    { pattern: /^4532/, type: "Amex" },
];
exports.CARD_TYPE_DEFAULT = "defaultCard";
