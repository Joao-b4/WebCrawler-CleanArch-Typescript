"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchParameterInvalid = exports.SearchError = void 0;
class SearchError extends Error {
    constructor(message) {
        super('SearchError');
        this.name = 'SearchError';
        this.message = message || '';
    }
}
exports.SearchError = SearchError;
class SearchParameterInvalid extends SearchError {
}
exports.SearchParameterInvalid = SearchParameterInvalid;
//# sourceMappingURL=search-error.js.map