import { getHotelRoomPageFunction } from '@/external/puppeteer/page-functions'
import puppeteer, { Browser, Page } from 'puppeteer'
import { ScrapingResultMock } from '../mocks/page-function-mock'

jest.setTimeout(5000000)

type ContextPuppeteerBrowser = {
  page: Page
  browser: Browser
}

const setupContextPuppeteerBrowser = async (): Promise<ContextPuppeteerBrowser> => {
  const browser = await puppeteer.launch({
    headless: true
  })

  const page = await browser.newPage()
  await page.goto('https://book.omnibees.com/hotelresults?CheckIn=23092021&CheckOut=24092021&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button%3C/pre%3E')
  const context: ContextPuppeteerBrowser = {
    page,
    browser
  }
  return context
}

describe('GetHotelRoom PageFunction', () => {
  let context: ContextPuppeteerBrowser

  beforeAll(async () => {
    context = await setupContextPuppeteerBrowser()
  })
  afterAll(async () => {
    await context.browser.close()
  })

  test('Should be return ', async () => {
    const result = await getHotelRoomPageFunction(context.page)

    expect(result).toEqual(ScrapingResultMock)
  })
})
