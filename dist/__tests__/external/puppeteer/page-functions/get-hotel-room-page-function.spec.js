"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const page_functions_1 = require("@/external/puppeteer/page-functions");
const puppeteer_1 = __importDefault(require("puppeteer"));
const page_function_mock_1 = require("../mocks/page-function-mock");
jest.setTimeout(5000000);
const setupContextPuppeteerBrowser = async () => {
    const browser = await puppeteer_1.default.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.goto('https://book.omnibees.com/hotelresults?CheckIn=23092021&CheckOut=24092021&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button%3C/pre%3E');
    const context = {
        page,
        browser
    };
    return context;
};
describe('GetHotelRoom PageFunction', () => {
    let context;
    beforeAll(async () => {
        context = await setupContextPuppeteerBrowser();
    });
    afterAll(async () => {
        await context.browser.close();
    });
    test('Should be return ', async () => {
        const result = await page_functions_1.getHotelRoomPageFunction(context.page);
        expect(result).toEqual(page_function_mock_1.ScrapingResultMock);
    });
});
//# sourceMappingURL=get-hotel-room-page-function.spec.js.map