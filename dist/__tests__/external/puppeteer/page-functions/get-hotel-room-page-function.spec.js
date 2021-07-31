"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const page_functions_1 = require("@/external/puppeteer/page-functions");
// import puppeteer, { Browser, Page } from 'puppeteer'
const puppeteer_mock_1 = require("../mocks/puppeteer-mock");
const jsdom_1 = require("jsdom");
const room_dom_mock_1 = require("../mocks/room-dom-mock");
jest.setTimeout(500000);
const dom = new jsdom_1.JSDOM();
global.document = dom.window.document;
global.window = dom.window;
const context = {
    page: puppeteer_mock_1.stubPage,
    browser: puppeteer_mock_1.stubBrowser
};
describe('GetHotelRoom PageFunction', () => {
    afterAll(async () => {
        await context.browser.close();
    });
    test('Should be return ScrapingResult with a HotelRom Collection', async () => {
        jest.spyOn(document, 'querySelectorAll').mockImplementation((selector) => {
            if (selector === '.roomrate:not(.d-none)') {
                const roomrate = document.createElement('div');
                roomrate.innerHTML = room_dom_mock_1.roomDomMock();
                document.body.appendChild(roomrate);
                return roomrate.querySelectorAll(selector);
            }
        });
        const result = await page_functions_1.getHotelRoomPageFunction(context.page);
        expect(result).toEqual(puppeteer_mock_1.ScrapingResultMock);
    });
    test('Should be return empty ScrapingResult', async () => {
        jest.spyOn(document, 'querySelectorAll').mockImplementation((selector) => {
            if (selector === '.roomrate:not(.d-none)') {
                const roomrate = document.createElement('div');
                roomrate.innerHTML = '';
                document.body.appendChild(roomrate);
                return roomrate.querySelectorAll(selector);
            }
        });
        const result = await page_functions_1.getHotelRoomPageFunction(context.page);
        expect(result).toEqual({ data: [] });
    });
});
//# sourceMappingURL=get-hotel-room-page-function.spec.js.map