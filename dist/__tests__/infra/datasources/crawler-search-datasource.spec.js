"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const browser_mock_1 = require("../mocks/browser-mock");
const crawler_search_datasource_1 = require("@/infra/datasources/crawler-search-datasource");
const makeSut = () => {
    const browser = new browser_mock_1.BrowserMock();
    const sut = new crawler_search_datasource_1.CrawlerSearchDatasource(browser);
    return {
        sut,
        browser
    };
};
describe('CrawlerSearch Datasource', () => {
    test('Should be return HotelRoom Colletion', async () => {
        const { sut, browser } = makeSut();
        const datasource = await sut.search({ checkin: '23092021', checkout: '24092021' });
        expect(datasource).toEqual(browser.result.data);
    });
});
//# sourceMappingURL=crawler-search-datasource.spec.js.map