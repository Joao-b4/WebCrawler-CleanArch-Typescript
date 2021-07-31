import { HotelRoom } from '@/domain/entities'
import { ISearchHotelRoomByStayDate } from '@/domain/usecases'

export class SearchHotelRoomByStayDateMock implements ISearchHotelRoomByStayDate {
  public result = [{ name: 'Test1',description: 'Test-description',image: 'https://google.com',price: 'R$ 160.00' }]
  async call (checkin: Date, checkout: Date): Promise<HotelRoom[]> {
    return this.result
  }
}
