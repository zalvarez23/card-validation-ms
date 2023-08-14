"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responsesCodes_1 = require("../../src/libs/responsesCodes");
const handler = require("./../../src/controller/card/handler");
const mocks_1 = require("../mocks");
describe("Lambda Functions GetCard", () => {
    it("Correct Response : OK", async () => {
        (0, mocks_1.GET_REDIS_CLIENT_MOCK_OK)();
        const event = {
            headers: {
                Authorization: mocks_1.TOKEN_MOCK_CORRECT,
                "X-Api-Key": process.env.API_KEY,
            },
        };
        const response = (await handler.getCard(event, {}, {}));
        const cardBody = JSON.parse(response?.body);
        expect(response.statusCode).toEqual(responsesCodes_1.HttpStatusCodes.OK);
        expect(cardBody.card_number).toEqual(mocks_1.CARD_MOCK.card_number);
        expect(cardBody.email).toEqual(mocks_1.CARD_MOCK.email);
        expect(cardBody.expiration_month).toEqual(mocks_1.CARD_MOCK.expiration_month);
        expect(cardBody.expiration_year).toEqual(mocks_1.CARD_MOCK.expiration_year);
    });
    it("Correct Response : EMPTY RESPONSE OR EXPIRED", async () => {
        (0, mocks_1.GET_REDIS_CLIENT_MOCK_EXPIRED)();
        const event = {
            headers: {
                Authorization: mocks_1.TOKEN_MOCK_FAILET,
                "X-Api-Key": process.env.API_KEY,
            },
        };
        const response = (await handler.getCard(event, {}, {}));
        expect(response.statusCode).toEqual(responsesCodes_1.HttpStatusCodes.BAD_REQUEST);
        expect(JSON.parse(response.body).message).toBe(responsesCodes_1.HttpStatusMessages.EMPTY_CARD_REDIS);
    });
    it("Correct Response : UNAUTHORIZED x-api-key", async () => {
        const event = {
            headers: {
                "X-Api-Key": "",
            },
        };
        const response = (await handler.getCard(event, {}, {}));
        expect(response.statusCode).toEqual(responsesCodes_1.HttpStatusCodes.UNAUTHORIZED);
        expect(JSON.parse(response.body).message).toBe(responsesCodes_1.HttpStatusMessages.X_API_KEY_MISSING);
    });
    it("Correct Response : UNAUTHORIZED Authorization", async () => {
        const event = {
            headers: {
                "X-Api-Key": process.env.API_KEY,
            },
        };
        const response = (await handler.getCard(event, {}, {}));
        expect(response.statusCode).toEqual(responsesCodes_1.HttpStatusCodes.UNAUTHORIZED);
        expect(JSON.parse(response.body).message).toBe(responsesCodes_1.HttpStatusMessages.AUTH_TOKEN_MISSING);
    });
});
