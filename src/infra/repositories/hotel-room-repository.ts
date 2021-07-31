import { HotelRoom } from '@/domain/entities'
import { IHotelRoomRepository } from '@/domain/repositories'
import { ISearchDatasource } from '@/data/models/search-datasource'
import { format } from 'date-fns'
export class HotelRoomRepository implements IHotelRoomRepository {
  constructor (private readonly searchDatasource: ISearchDatasource) {
  }

  async searchByStayDate (checkin: Date, checkout: Date): Promise<HotelRoom[]> {
    const checkinFormatted = format(checkin, 'ddMMyyyy')
    const checkoutFormatted = format(checkout, 'ddMMyyyy')
    return this.searchDatasource.search({ checkin: checkinFormatted,checkout: checkoutFormatted })
  }
}
