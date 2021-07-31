import { HotelRoom } from '@/domain/entities'
import { ISearchHotelRoomByStayDate } from '@/domain/usecases'
import { SearchParameterInvalid } from '@/domain/errors/search-error'
import { IHotelRoomRepository } from '@/domain/repositories'
export class SearchHotelRoomByStayDate implements ISearchHotelRoomByStayDate {
  constructor (private readonly hotelRoomRepository: IHotelRoomRepository) {

  }

  async call (checkin: Date, checkout: Date): Promise<HotelRoom[]> {
    if (!checkin || !checkout) {
      throw new SearchParameterInvalid('empty')
    }
    if (checkin < new Date()) {
      throw new SearchParameterInvalid('checkin')
    }
    if (checkout <= checkin) {
      throw new SearchParameterInvalid('checkout')
    }
    const hotelRoomModel = this.hotelRoomRepository.searchByStayDate(checkin, checkout)
    return hotelRoomModel
  }
}
