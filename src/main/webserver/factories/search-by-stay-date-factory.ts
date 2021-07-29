import { CrawlerSearchDatasource } from '@/external/crawler-datasource'
import { RoomRepository } from '@/infra/repositories/search-by-stay-date-repository'
import { SearchByStayDateController } from '@/presentation/controllers/'
import { IController } from '@/presentation/interfaces'
import { SearchByStayDate } from '@/domain/usecases'

export const makeSearchByStayDateController = (): IController => {
  // dependency injection
  // const puppeteer  = new puppeteer
  const datasource = new CrawlerSearchDatasource()
  const repository = new RoomRepository(datasource)
  const usecase = new SearchByStayDate(repository)
  return new SearchByStayDateController(usecase)
}
