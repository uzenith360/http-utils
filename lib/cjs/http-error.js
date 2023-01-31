"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpError = void 0;
class HttpError extends Error {
    constructor(status, code) {
        super(status);
        this.code = code;
    }
}
exports.HttpError = HttpError;
