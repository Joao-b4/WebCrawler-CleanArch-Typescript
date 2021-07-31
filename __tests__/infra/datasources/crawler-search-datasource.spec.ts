import { BrowserMock } from '../mocks/browser-mock'
import { CrawlerSearchDatasource } from '@/infra/datasources/crawler-search-datasource'

type SutTypes = {
  sut: CrawlerSearchDatasource
  browser: BrowserMock
}

const makeSut = (): SutTypes => {
  const browser = new BrowserMock()
  const sut = new CrawlerSearchDatasource(browser)
  return {
    sut,
    browser
  }
}

describe('CrawlerSearch Datasource', () => {
  test('Should be return HotelRoom Colletion', async () => {
    const { sut,browser } = makeSut()
    const datasource = await sut.search({ checkin: '23092021',checkout: '24092021' })
    expect(datasource).toEqual(browser.result.data)
  })
})
