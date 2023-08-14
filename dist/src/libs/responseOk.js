"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseCardOK = exports.ResponseTokenOK = void 0;
const responsesCodes_1 = require("./responsesCodes");
const ResponseTokenOK = (bearerToken) => {
    return {
        statusCode: responsesCodes_1.HttpStatusCodes.OK,
        headers: {
            Authorization: bearerToken,
        },
        body: JSON.stringify({
            token: bearerToken,
            statusCode: responsesCodes_1.HttpStatusCodes.OK,
            message: responsesCodes_1.HttpStatusMessages.TOKEN_SUCCESSFULLY,
        }),
    };
};
exports.ResponseTokenOK = ResponseTokenOK;
const ResponseCardOK = (card) => {
    return {
        statusCode: responsesCodes_1.HttpStatusCodes.OK,
        body: JSON.stringify(card),
    };
};
exports.ResponseCardOK = ResponseCardOK;
