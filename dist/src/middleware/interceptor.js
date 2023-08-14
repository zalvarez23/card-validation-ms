"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAuthToken = exports.validateApiKey = void 0;
const errors_1 = require("../libs/errors");
const responsesCodes_1 = require("../libs/responsesCodes");
const validateApiKey = (apiKey) => {
    if (apiKey !== process.env.API_KEY) {
        throw new errors_1.UnauthorizedError(responsesCodes_1.HttpStatusTypes.UNAUTHORIZED, responsesCodes_1.HttpStatusMessages.X_API_KEY_MISSING);
    }
};
exports.validateApiKey = validateApiKey;
const validateAuthToken = (token) => {
    if (!token) {
        throw new errors_1.UnauthorizedError(responsesCodes_1.HttpStatusTypes.UNAUTHORIZED, responsesCodes_1.HttpStatusMessages.AUTH_TOKEN_MISSING);
    }
};
exports.validateAuthToken = validateAuthToken;
