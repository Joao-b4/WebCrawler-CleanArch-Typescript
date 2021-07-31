import { HotelRoom } from '@/domain/entities'
import { IBrowser } from '@/data/models/browser'
import { ISearchDatasource } from '@/data/models/search-datasource'

export class CrawlerSearchDatasource implements ISearchDatasource {
  constructor (private readonly browser: IBrowser) {
  }

  async search ({ checkin, checkout }): Promise<HotelRoom[]> {
    const url = `https://book.omnibees.com/hotelresults?CheckIn=${checkin}&CheckOut=${checkout}&Code=AMIGODODANIEL&NRooms=1&_askSI=d34b1c89-78d2-45f3-81ac-4af2c3edb220&ad=2&ag=-&c=2983&ch=0&diff=false&group_code=&lang=pt-BR&loyality_card=&utm_source=asksuite&q=5462#show-more-hotel-button`

    await this.browser.bootstrap(url)
    const scrapingResult = await this.browser.scrape()
    await this.browser.close()

    const hotelRoomList = scrapingResult.data
    return hotelRoomList
  }
}
