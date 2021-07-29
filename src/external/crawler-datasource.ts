import { Room } from '@/domain/entities'
import { ISearchDatasource } from '@/infra/interfaces/search-datasource'
// import puppeteer from 'puppeteer'

export class CrawlerSearchDatasource implements ISearchDatasource {
  async byStayDate (checkin: Date, checkout: Date): Promise<Room[]> {
    return new Promise((resolve, reject) => {
      /// todo buscar pagina pela data e raspar para montar as rooms
      console.log(checkin)
      console.log(checkout)
      resolve([{ name: '',description: '',image: '',price: '' }])
    })
  }
}
