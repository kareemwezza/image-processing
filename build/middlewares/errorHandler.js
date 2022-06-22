"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomeError = void 0;
class CustomeError {
    constructor(message, statusCode = 501) {
        this.statusCode = statusCode;
        this.message = message;
    }
}
exports.CustomeError = CustomeError;
exports.default = (error, req, res, next) => {
    let err = error;
    if (!(error instanceof CustomeError)) {
        err = new CustomeError('Internal Server Error Occured! We are sorry for this inconvenience 😢. Please Try again later.', 501);
    }
    const statusCode = err.statusCode;
    res.status(statusCode).json(err);
};
