"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCvvHelper = void 0;
const validateCvvHelper = (cvv) => {
    const sanitizedNumber = cvv.toString().replace(/\D/g, "");
    const isValidLength = /^\d{3,4}$/.test(sanitizedNumber);
    if (!isValidLength) {
        return false;
    }
    return true;
};
exports.validateCvvHelper = validateCvvHelper;
