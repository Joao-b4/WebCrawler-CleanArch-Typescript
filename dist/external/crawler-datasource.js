"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrawlerSearchDatasource = void 0;
// import puppeteer from 'puppeteer'
class CrawlerSearchDatasource {
    async byStayDate(checkin, checkout) {
        return new Promise((resolve, reject) => {
            /// todo buscar pagina pela data e raspar para montar as rooms
            console.log(checkin);
            console.log(checkout);
            resolve([{ name: '', description: '', image: '', price: '' }]);
        });
    }
}
exports.CrawlerSearchDatasource = CrawlerSearchDatasource;
