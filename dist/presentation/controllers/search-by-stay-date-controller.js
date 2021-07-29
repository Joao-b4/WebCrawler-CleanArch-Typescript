"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchByStayDateController = void 0;
// import { SearchByStayDate } from '@/domain/usecases'
const interfaces_1 = require("@/presentation/interfaces");
class SearchByStayDateController {
    //   constructor (private readonly lastRankingLoader: SearchByStayDate) {
    //   }
    async handle() {
        try {
            //   const ranking = await this.lastRankingLoader.call()
            return interfaces_1.HttpResponseServerOk({});
        }
        catch (error) {
            return interfaces_1.HttpResponseServerError(error);
        }
    }
}
exports.SearchByStayDateController = SearchByStayDateController;
