"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchByStayDateController = void 0;
const controllers_1 = require("@/presentation/controllers/");
const makeSearchByStayDateController = () => {
    // dependency injection
    // const repository = new FakeDbRankingRepository()
    // const loader = new LastRankingLoaderService(repository)
    return new controllers_1.SearchByStayDateController();
};
exports.makeSearchByStayDateController = makeSearchByStayDateController;
