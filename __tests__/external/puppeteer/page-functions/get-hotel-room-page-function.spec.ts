import { getHotelRoomPageFunction } from '@/external/puppeteer/page-functions'
// import puppeteer, { Browser, Page } from 'puppeteer'
import { stubBrowser, stubPage, ScrapingResultMock } from '../mocks/puppeteer-mock'
import { JSDOM } from 'jsdom'
import { roomDomMock } from '../mocks/room-dom-mock'

jest.setTimeout(500000)

const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

const context = {
  page: stubPage,
  browser: stubBrowser
}

describe('GetHotelRoom PageFunction', () => {
  afterAll(async () => {
    await context.browser.close()
  })

  test('Should be return ScrapingResult with a HotelRom Collection', async () => {
    jest.spyOn(document, 'querySelectorAll').mockImplementation((selector: string) => {
      if (selector === '.roomrate:not(.d-none)') {
        const roomrate = document.createElement('div')
        roomrate.innerHTML = roomDomMock()
        document.body.appendChild(roomrate)
        return roomrate.querySelectorAll(selector)
      }
    })

    const result = await getHotelRoomPageFunction(context.page)
    expect(result).toEqual(ScrapingResultMock)
  })

  test('Should be return empty ScrapingResult', async () => {
    jest.spyOn(document, 'querySelectorAll').mockImplementation((selector: string) => {
      if (selector === '.roomrate:not(.d-none)') {
        const roomrate = document.createElement('div')
        roomrate.innerHTML = ''
        document.body.appendChild(roomrate)
        return roomrate.querySelectorAll(selector)
      }
    })

    const result = await getHotelRoomPageFunction(context.page)
    expect(result).toEqual({ data: [] })
  })
})
