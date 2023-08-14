"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEmailHelper = void 0;
const cardConst_1 = require("../common/cardConst");
const validateEmailHelper = (email) => {
    const validDomains = cardConst_1.VALID_DOMAINS_EMAILS;
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const match = email.match(emailRegex);
    if (!match) {
        return false;
    }
    const [, domain] = match[0].split("@");
    return validDomains.includes(domain);
};
exports.validateEmailHelper = validateEmailHelper;
