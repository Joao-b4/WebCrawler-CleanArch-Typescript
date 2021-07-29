"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByStayDateController = void 0;
const interfaces_1 = require("@/presentation/interfaces");
class SearchByStayDateController {
    constructor(usecase) {
        this.usecase = usecase;
    }
    async handle(request) {
        try {
            // todo - adicionar middleware
            const checkin = new Date(request.body.checkin);
            const checkout = new Date(request.body.checkout);
            const resultList = await this.usecase.call(checkin, checkout);
            return interfaces_1.HttpResponseServerOk(resultList);
        }
        catch (error) {
            return interfaces_1.HttpResponseServerError(error);
        }
    }
}
exports.SearchByStayDateController = SearchByStayDateController;
