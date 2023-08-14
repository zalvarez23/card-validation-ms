"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCard = exports.createToken = exports.container = void 0;
const handlerErrors_1 = require("../../libs/handlerErrors");
const context_di_1 = require("../../di/context.di");
const TYPES_1 = require("../../di/TYPES");
const Card_1 = require("../../dominio/Card");
const interceptor_1 = require("../../middleware/interceptor");
const validator_1 = require("./validator/validator");
const responseOk_1 = require("../../libs/responseOk");
const TokenDto_1 = require("../../infrastructure/dto/TokenDto");
const CardDto_1 = require("../../infrastructure/dto/CardDto");
exports.container = new context_di_1.ContainerContext().container;
const createToken = async (event) => {
    try {
        const cardTokenService = exports.container.get(TYPES_1.TYPES.CardTokenService);
        const apiKey = event.headers["X-Api-Key"];
        (0, interceptor_1.validateApiKey)(apiKey);
        const requestBody = JSON.parse(event.body ?? "{}");
        const card = new Card_1.Card(requestBody);
        (0, validator_1.validateRequestBodyCard)(card);
        const tokenResult = await cardTokenService.createToken(card);
        return (0, responseOk_1.ResponseTokenOK)((0, TokenDto_1.convertToResponseTokenDto)(tokenResult));
    }
    catch (error) {
        // No podemos especificar el tipo exacto del error catch.
        return (0, handlerErrors_1.handleError)(error);
    }
};
exports.createToken = createToken;
const getCard = async (event) => {
    try {
        const cardTokenService = exports.container.get(TYPES_1.TYPES.CardTokenService);
        const apiKey = event.headers["X-Api-Key"];
        (0, interceptor_1.validateApiKey)(apiKey);
        const authToken = event.headers.Authorization || "";
        (0, interceptor_1.validateAuthToken)(authToken);
        const card = await cardTokenService.getCard(authToken);
        return (0, responseOk_1.ResponseCardOK)((0, CardDto_1.convertToResponseCardDto)(card));
    }
    catch (error) {
        console.log(error);
        // No podemos especificar el tipo exacto del error catch.
        return (0, handlerErrors_1.handleError)(error);
    }
};
exports.getCard = getCard;
