export class HttpError extends Error {
    code;
    constructor(status, code) {
        super(status);
        this.code = code;
    }
}
