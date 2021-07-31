"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerSearchDatasource = void 0;
class CrawlerSearchDatasource {
    constructor(browser) {
        this.browser = browser;
    }
    async search({ checkin, checkout }) {
        const url = `https://book.omnibees.com/hotelresults?CheckIn=${checkin}&CheckOut=${checkout}&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button`;
        await this.browser.bootstrap(url);
        const scrapingResult = await this.browser.scrape();
        await this.browser.close();
        const hotelRoomList = scrapingResult.data;
        return hotelRoomList;
    }
}
exports.CrawlerSearchDatasource = CrawlerSearchDatasource;
//# sourceMappingURL=crawler-search-datasource.js.map