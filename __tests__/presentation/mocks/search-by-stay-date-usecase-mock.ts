import { HotelRoom } from '@/domain/entities'
import { ISearchHotelRoomByStayDate } from '@/domain/usecases'

export class SearchHotelRoomByStayDateMock implements ISearchHotelRoomByStayDate {
  public result = [{
    name: 'Master',
    price: 'R$ 975,65',
    description: 'São 6 quartos luxuosos, sofisticados e decorados com requinte, além de localização privilegiada em nosso hotel. Alguns possuem mezanino e ou...',
    image: 'https://media.omnibees.com/Images/5462/RoomTypes/192355.jpg'
  }]

  async call (checkin: Date, checkout: Date): Promise<HotelRoom[]> {
    return this.result
  }
}
