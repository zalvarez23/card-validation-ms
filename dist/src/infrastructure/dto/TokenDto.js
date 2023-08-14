"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToResponseTokenDto = void 0;
const convertToResponseTokenDto = (token) => {
    return `Bearer ${token.bearerToken}`;
};
exports.convertToResponseTokenDto = convertToResponseTokenDto;
