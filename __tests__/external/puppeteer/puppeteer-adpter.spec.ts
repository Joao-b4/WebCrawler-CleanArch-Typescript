import { PuppeteerAdapter } from '@/external/puppeteer/puppeteer-adapter'
import { PageFunctionMock, ScrapingResultMock } from './mocks/page-function-mock'
import { stubBrowser, stubPage } from './mocks/puppeteer-mock'

jest.mock('puppeteer', () => ({
  launch () {
    return stubBrowser
  }
}))

beforeEach(() => {
  jest.restoreAllMocks()
})

type SutTypes = {
  sut: PuppeteerAdapter
}

const makeSut = (): SutTypes => {
  const sut = new PuppeteerAdapter(PageFunctionMock)
  return {
    sut
  }
}

describe('PuppeteerAdapter Browser', () => {
  const { sut } = makeSut()

  beforeEach(() => {
    jest.restoreAllMocks()
  })

  test('that page.goto is called with "https://google.com"', async () => {
    const gotoSpy = jest.spyOn(stubPage, 'goto')
    await sut.bootstrap('https://google.com')
    expect(gotoSpy).toHaveBeenCalledWith('https://google.com')
  })
  test('that it should return ScrapingResult', async () => {
    jest.spyOn(stubPage, 'evaluate').mockReturnValue(Promise.resolve(ScrapingResultMock))
    const result = await sut.scrape()
    expect(result).toEqual(ScrapingResultMock)
  })
  test('that browser.close is called once', async () => {
    const browserCloseSpy = jest.spyOn(stubBrowser, 'close')
    await sut.close()
    expect(browserCloseSpy).toHaveBeenCalledTimes(1)
  })
})
