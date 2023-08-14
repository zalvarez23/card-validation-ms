"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_REDIS_CLIENT_MOCK_EXPIRED = exports.GET_REDIS_CLIENT_MOCK_OK = exports.REDIS_CLIENT_MOCK = exports.TOKEN_MOCK_FAILET = exports.TOKEN_MOCK_CORRECT = exports.CARD_MOCK = void 0;
const RedisMock = require("redis-mock");
exports.CARD_MOCK = {
    email: "kevinsalazar30@gmail.com",
    card_number: 4111111111111111,
    cvv: 124,
    expiration_year: "2024",
    expiration_month: "09",
};
exports.TOKEN_MOCK_CORRECT = "jgutorGASHJSDJ23";
exports.TOKEN_MOCK_FAILET = "jgutor123AADJ23";
exports.REDIS_CLIENT_MOCK = RedisMock.createClient();
const GET_REDIS_CLIENT_MOCK_OK = () => {
    if (exports.REDIS_CLIENT_MOCK) {
        const mockHget = jest.fn().mockResolvedValue(JSON.stringify(exports.CARD_MOCK));
        exports.REDIS_CLIENT_MOCK.hget = mockHget;
    }
};
exports.GET_REDIS_CLIENT_MOCK_OK = GET_REDIS_CLIENT_MOCK_OK;
const GET_REDIS_CLIENT_MOCK_EXPIRED = () => {
    if (exports.REDIS_CLIENT_MOCK) {
        const mockHget = jest.fn().mockResolvedValue(null);
        exports.REDIS_CLIENT_MOCK.hget = mockHget;
    }
};
exports.GET_REDIS_CLIENT_MOCK_EXPIRED = GET_REDIS_CLIENT_MOCK_EXPIRED;
