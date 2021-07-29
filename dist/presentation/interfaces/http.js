"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpResponseServerOk = exports.HttpResponseServerError = void 0;
const HttpResponseServerError = (error) => ({
    statusCode: 500,
    data: { error: error.message }
});
exports.HttpResponseServerError = HttpResponseServerError;
const HttpResponseServerOk = (data) => ({
    statusCode: 200,
    data: data
});
exports.HttpResponseServerOk = HttpResponseServerOk;
