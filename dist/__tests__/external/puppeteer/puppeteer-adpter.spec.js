"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const puppeteer_adapter_1 = require("@/external/puppeteer/puppeteer-adapter");
const puppeteer_mock_1 = require("./mocks/puppeteer-mock");
jest.mock('puppeteer', () => ({
    launch() {
        return puppeteer_mock_1.stubBrowser;
    }
}));
beforeEach(() => {
    jest.restoreAllMocks();
});
const makeSut = () => {
    const sut = new puppeteer_adapter_1.PuppeteerAdapter(puppeteer_mock_1.PageFunctionMock);
    return {
        sut
    };
};
describe('PuppeteerAdapter Browser', () => {
    const { sut } = makeSut();
    beforeEach(() => {
        jest.restoreAllMocks();
    });
    test('that page.goto is called with "https://google.com"', async () => {
        const gotoSpy = jest.spyOn(puppeteer_mock_1.stubPage, 'goto');
        await sut.bootstrap('https://google.com');
        expect(gotoSpy).toHaveBeenCalledWith('https://google.com');
    });
    test('that it should return ScrapingResult', async () => {
        jest.spyOn(puppeteer_mock_1.stubPage, 'evaluate').mockReturnValue(Promise.resolve(puppeteer_mock_1.ScrapingResultMock));
        const result = await sut.scrape();
        expect(result).toEqual(puppeteer_mock_1.ScrapingResultMock);
    });
    test('that browser.close is called once', async () => {
        const browserCloseSpy = jest.spyOn(puppeteer_mock_1.stubBrowser, 'close');
        await sut.close();
        expect(browserCloseSpy).toHaveBeenCalledTimes(1);
    });
});
//# sourceMappingURL=puppeteer-adpter.spec.js.map