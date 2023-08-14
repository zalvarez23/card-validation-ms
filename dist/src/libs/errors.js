"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = exports.BadRequestError = exports.GenericError = void 0;
class GenericError extends Error {
    constructor(errorCode, systemMessage, userMessage) {
        super(systemMessage);
        this.errorCode = `ERROR_${this.getHttpStatus()}_${errorCode}`;
        this.systemMessage = systemMessage;
        this.userMessage = userMessage ?? systemMessage;
        Object.setPrototypeOf(this, GenericError.prototype);
    }
}
exports.GenericError = GenericError;
class BadRequestError extends GenericError {
    getHttpStatus() {
        return 400;
    }
    constructor(errorCode, systemMessage, userMessage) {
        super(errorCode, systemMessage, userMessage);
        Object.setPrototypeOf(this, BadRequestError.prototype);
    }
}
exports.BadRequestError = BadRequestError;
class UnauthorizedError extends GenericError {
    getHttpStatus() {
        return 401;
    }
    constructor(errorCode, systemMessage, userMessage) {
        super(errorCode, systemMessage, userMessage);
        Object.setPrototypeOf(this, UnauthorizedError.prototype);
    }
}
exports.UnauthorizedError = UnauthorizedError;
