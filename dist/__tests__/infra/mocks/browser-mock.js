"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrowserMock = void 0;
class BrowserMock {
    constructor() {
        this.result = { data: [{ name: 'Test1', description: 'Test-description', image: 'https://google.com', price: 'R$ 160.00' }] };
    }
    async bootstrap(url) {
    }
    async close() {
    }
    async scrape() {
        return this.result;
    }
}
exports.BrowserMock = BrowserMock;
//# sourceMappingURL=browser-mock.js.map