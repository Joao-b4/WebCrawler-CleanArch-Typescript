"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseServerOk = exports.HttpResponseBadRequest = exports.HttpResponseServerError = void 0;
const HttpResponseServerError = (error) => ({
    statusCode: 500,
    body: { error: error.message }
});
exports.HttpResponseServerError = HttpResponseServerError;
const HttpResponseBadRequest = (error) => ({
    statusCode: 400,
    body: { error: error }
});
exports.HttpResponseBadRequest = HttpResponseBadRequest;
const HttpResponseServerOk = (body) => ({
    statusCode: 200,
    body: body
});
exports.HttpResponseServerOk = HttpResponseServerOk;
//# sourceMappingURL=http.js.map