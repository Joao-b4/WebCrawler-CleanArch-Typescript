"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByStayDateController = void 0;
const models_1 = require("@/presentation/http/models");
const date_fns_1 = require("date-fns");
class SearchByStayDateController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle(request) {
        try {
            if (!request.body.checkin || !request.body.checkout) {
                return models_1.HttpResponseBadRequest('empty');
            }
            const checkin = date_fns_1.parseISO(request.body.checkin);
            const checkout = date_fns_1.parseISO(request.body.checkout);
            const resultList = await this.usecase.call(checkin, checkout);
            return models_1.HttpResponseServerOk(resultList);
        }
        catch (error) {
            return models_1.HttpResponseServerError(error);
        }
    }
}
exports.SearchByStayDateController = SearchByStayDateController;
//# sourceMappingURL=search-by-stay-date-controller.js.map