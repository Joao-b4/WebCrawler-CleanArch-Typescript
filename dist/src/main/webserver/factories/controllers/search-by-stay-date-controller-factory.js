"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeSearchByStayDateController = void 0;
const crawler_search_datasource_1 = require("@/infra/datasources/crawler-search-datasource");
const hotel_room_repository_1 = require("@/infra/repositories/hotel-room-repository");
const controllers_1 = require("@/presentation/http/controllers");
const usecases_1 = require("@/data/usecases");
const puppeteer_adapter_1 = require("@/external/puppeteer/puppeteer-adapter");
const page_functions_1 = require("@/external/puppeteer/page-functions");
const makeSearchByStayDateController = () => {
    const browser = new puppeteer_adapter_1.PuppeteerAdapter(page_functions_1.getHotelRoomPageFunction);
    const datasource = new crawler_search_datasource_1.CrawlerSearchDatasource(browser);
    const repository = new hotel_room_repository_1.HotelRoomRepository(datasource);
    const usecase = new usecases_1.SearchHotelRoomByStayDate(repository);
    return new controllers_1.SearchByStayDateController(usecase);
};
exports.makeSearchByStayDateController = makeSearchByStayDateController;
//# sourceMappingURL=search-by-stay-date-controller-factory.js.map