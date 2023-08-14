"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleError = void 0;
const errors_1 = require("./errors");
const responsesCodes_1 = require("./responsesCodes");
function handleError(error) {
    if (error instanceof errors_1.GenericError) {
        switch (error.getHttpStatus()) {
            case responsesCodes_1.HttpStatusCodes.UNAUTHORIZED:
            case responsesCodes_1.HttpStatusCodes.BAD_REQUEST:
                return {
                    statusCode: error.getHttpStatus(),
                    body: JSON.stringify({
                        errorCode: error.errorCode,
                        message: error.userMessage,
                    }),
                };
            default:
                return {
                    statusCode: 500,
                    body: JSON.stringify({
                        errorCode: responsesCodes_1.HttpStatusCodes.INTERNAL_SERVER_ERROR,
                        message: responsesCodes_1.HttpStatusMessages.INTERNAL_SERVER_ERROR,
                    }),
                };
        }
    }
    else {
        return {
            statusCode: 500,
            body: JSON.stringify({
                errorCode: responsesCodes_1.HttpStatusCodes.INTERNAL_SERVER_ERROR,
                message: responsesCodes_1.HttpStatusMessages.INTERNAL_SERVER_ERROR,
            }),
        };
    }
}
exports.handleError = handleError;
