"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParameterEmpty = exports.SearchError = void 0;
class SearchError extends Error {
    constructor(message) {
        super('SearchError');
        this.name = 'SearchError';
        this.message = message;
    }
}
exports.SearchError = SearchError;
class SearchParameterEmpty extends SearchError {
}
exports.SearchParameterEmpty = SearchParameterEmpty;
