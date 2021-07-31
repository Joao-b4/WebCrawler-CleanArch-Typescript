"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stubElementHandle = exports.stubPuppeteer = exports.stubBrowser = exports.stubPage = exports.PageFunctionMock = exports.ScrapingResultMock = void 0;
exports.ScrapingResultMock = {
    data: [
        {
            name: 'Master',
            price: 'R$ 975,65',
            description: 'São 6 quartos luxuosos, sofisticados e decorados com requinte, além de localização privilegiada em nosso hotel. Alguns possuem mezanino e ou...',
            image: 'https://media.omnibees.com/Images/5462/RoomTypes/192355.jpg'
        }
    ]
};
const PageFunctionMock = async (page) => exports.ScrapingResultMock;
exports.PageFunctionMock = PageFunctionMock;
exports.stubPage = {
    async goto(url) {
        return Promise.resolve();
    },
    async $$(selector) {
        return Promise.resolve([]);
    },
    async $(selector) {
        return Promise.resolve();
    },
    async $eval(selector, pageFunction) {
        return Promise.resolve();
    },
    async evaluate(fn) {
        return Promise.resolve(fn());
    }
};
exports.stubBrowser = {
    async newPage() {
        return Promise.resolve(exports.stubPage);
    },
    async close() {
        return Promise.resolve();
    }
};
exports.stubPuppeteer = {
    async launch() {
        return Promise.resolve(exports.stubBrowser);
    }
};
exports.stubElementHandle = {
    async $eval() {
        console.log('stub element handle');
        return Promise.resolve();
    }
};
//# sourceMappingURL=puppeteer-mock.js.map