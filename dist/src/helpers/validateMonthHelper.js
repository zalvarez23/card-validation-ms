"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMonthHelper = void 0;
const validateMonthHelper = (month) => {
    const sanitizedNumber = month.replace(/\D/g, "");
    const isValidLength = /^\d{2}$/.test(sanitizedNumber);
    if (!isValidLength) {
        return false;
    }
    return true;
};
exports.validateMonthHelper = validateMonthHelper;
