"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responsesCodes_1 = require("../../src/libs/responsesCodes");
const handler = require("./../../src/controller/card/handler");
const mocks_1 = require("../mocks");
describe("Lambda Functions CreateToken", () => {
    it("Correct Response : OK", async () => {
        const bodyTest = mocks_1.CARD_MOCK;
        const event = {
            headers: {
                "X-Api-Key": process.env.API_KEY,
            },
            body: JSON.stringify(bodyTest),
        };
        const response = (await handler.createToken(event, {}, {}));
        expect(response.statusCode).toEqual(responsesCodes_1.HttpStatusCodes.OK);
        expect(JSON.parse(response.body).message).toBe(responsesCodes_1.HttpStatusMessages.TOKEN_SUCCESSFULLY);
        expect(response.headers?.Authorization).toBeDefined();
    });
    it("Correct Response : UNAUTHORIZED", async () => {
        const bodyTest = mocks_1.CARD_MOCK;
        const event = {
            headers: {
                "X-Api-Key": "",
            },
            body: JSON.stringify(bodyTest),
        };
        const response = (await handler.createToken(event, {}, {}));
        expect(response.statusCode).toEqual(responsesCodes_1.HttpStatusCodes.UNAUTHORIZED);
        expect(JSON.parse(response.body).message).toBe(responsesCodes_1.HttpStatusMessages.X_API_KEY_MISSING);
    });
});
