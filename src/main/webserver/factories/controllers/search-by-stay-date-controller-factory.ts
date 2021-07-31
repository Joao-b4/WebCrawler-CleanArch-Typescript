import { CrawlerSearchDatasource } from '@/infra/datasources/crawler-search-datasource'
import { HotelRoomRepository } from '@/infra/repositories/hotel-room-repository'
import { SearchByStayDateController } from '@/presentation/http/controllers'
import { IController } from '@/presentation/http/models'
import { SearchHotelRoomByStayDate } from '@/data/usecases'
import { PuppeteerAdapter } from '@/external/puppeteer/puppeteer-adapter'
import { getHotelRoomPageFunction } from '@/external/puppeteer/page-functions'

export const makeSearchByStayDateController = (): IController => {
  const browser = new PuppeteerAdapter(getHotelRoomPageFunction)
  const datasource = new CrawlerSearchDatasource(browser)
  const repository = new HotelRoomRepository(datasource)
  const usecase = new SearchHotelRoomByStayDate(repository)
  return new SearchByStayDateController(usecase)
}
