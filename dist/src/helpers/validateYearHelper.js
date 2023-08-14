"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateYearHelper = void 0;
const validateYearHelper = (year) => {
    const currentYear = new Date().getFullYear();
    const isValidSize = /^(20\d{2})$/.test(year);
    const isValidYearExpiration = parseInt(year) >= currentYear && parseInt(year) <= currentYear + 5;
    return isValidSize && isValidYearExpiration;
};
exports.validateYearHelper = validateYearHelper;
