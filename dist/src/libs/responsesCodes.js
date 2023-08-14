"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpStatusMessages = exports.HttpStatusTypes = exports.HttpStatusCodes = void 0;
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["OK"] = 200] = "OK";
    HttpStatusCodes[HttpStatusCodes["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCodes[HttpStatusCodes["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCodes[HttpStatusCodes["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCodes[HttpStatusCodes["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatusCodes || (exports.HttpStatusCodes = HttpStatusCodes = {}));
var HttpStatusTypes;
(function (HttpStatusTypes) {
    HttpStatusTypes["UNAUTHORIZED"] = "UNAUTHORIZED";
    HttpStatusTypes["EMPTY_REQUEST"] = "EMPTY_REQUEST";
    HttpStatusTypes["BAD_BODY_REQUEST"] = "BAD_BODY_REQUEST";
    HttpStatusTypes["EMPTY_CARD_REDIS"] = "EMPTY_CARD_REDIS";
})(HttpStatusTypes || (exports.HttpStatusTypes = HttpStatusTypes = {}));
var HttpStatusMessages;
(function (HttpStatusMessages) {
    HttpStatusMessages["X_API_KEY_MISSING"] = "Authentication Token Api Key missing";
    HttpStatusMessages["AUTH_TOKEN_MISSING"] = "Authorization token missing";
    HttpStatusMessages["EMPTY_REQUEST"] = "Request body is empty";
    HttpStatusMessages["TOKEN_SUCCESSFULLY"] = "Token created successfully";
    HttpStatusMessages["INTERNAL_SERVER_ERROR"] = "An internal error occurred.";
    HttpStatusMessages["BAD_CARD_BODY_REQUEST"] = "Request body the card format is invalid .";
    HttpStatusMessages["BAD_EMAIL_BODY_REQUEST"] = "Request body the email format is invalid .";
    HttpStatusMessages["BAD_CVV_BODY_REQUEST"] = "Request body the cvv format is invalid .";
    HttpStatusMessages["BAD_MONTH_BODY_REQUEST"] = "Request body the month format is invalid .";
    HttpStatusMessages["BAD_YEAR_BODY_REQUEST"] = "Request body the year format is invalid .";
    HttpStatusMessages["EMPTY_CARD_REDIS"] = "The token data has expired or does not exist in the database..";
})(HttpStatusMessages || (exports.HttpStatusMessages = HttpStatusMessages = {}));
