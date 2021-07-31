"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByStayDateMiddleware = void 0;
const models_1 = require("@/presentation/http/models");
class SearchByStayDateMiddleware {
    async handle(request) {
        try {
            if (!Date.parse(request.body.checkin) || !Date.parse(request.body.checkout)) {
                return models_1.HttpResponseBadRequest('InvalidFormat');
            }
            return models_1.HttpResponseServerOk({});
        }
        catch (error) {
            return models_1.HttpResponseServerError(error);
        }
    }
}
exports.SearchByStayDateMiddleware = SearchByStayDateMiddleware;
//# sourceMappingURL=search-by-stay-date-middleware.js.map