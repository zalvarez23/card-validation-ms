"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomToken = void 0;
const tokenConst_1 = require("../common/tokenConst");
const generateRandomToken = () => {
    const characters = tokenConst_1.TOKEN_CHARACTERS;
    return Array.from({ length: tokenConst_1.TOKEN_LENGTH }, () => characters[Math.floor(Math.random() * characters.length)]).join("");
};
exports.generateRandomToken = generateRandomToken;
