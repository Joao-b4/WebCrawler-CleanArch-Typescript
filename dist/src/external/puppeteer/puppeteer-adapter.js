"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PuppeteerAdapter = void 0;
const puppeteer_1 = __importDefault(require("puppeteer"));
class PuppeteerAdapter {
    constructor(pageFunction) {
        this.pageFunction = pageFunction;
    }
    async bootstrap(url) {
        this.browser = await puppeteer_1.default.launch();
        this.page = await this.browser.newPage();
        await this.page.goto(url);
    }
    async close() {
        if (!this.browser) {
            return;
        }
        await this.browser.close();
    }
    async scrape() {
        return await this.pageFunction(this.page);
    }
}
exports.PuppeteerAdapter = PuppeteerAdapter;
//# sourceMappingURL=puppeteer-adapter.js.map