"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchByStayDateController = void 0;
const crawler_datasource_1 = require("@/external/crawler-datasource");
const search_by_stay_date_repository_1 = require("@/infra/repositories/search-by-stay-date-repository");
const controllers_1 = require("@/presentation/controllers/");
const usecases_1 = require("@/domain/usecases");
const makeSearchByStayDateController = () => {
    // dependency injection
    // const puppeteer  = new puppeteer
    const datasource = new crawler_datasource_1.CrawlerSearchDatasource();
    const repository = new search_by_stay_date_repository_1.RoomRepository(datasource);
    const usecase = new usecases_1.SearchByStayDate(repository);
    return new controllers_1.SearchByStayDateController(usecase);
};
exports.makeSearchByStayDateController = makeSearchByStayDateController;
