import { HotelRoom } from '@/domain/entities'
import { IHotelRoomRepository } from '@/domain/repositories'

export class HotelRoomRepositoryMock implements IHotelRoomRepository {
  public result = [{ name: 'Test1',description: 'Test-description',image: 'https://google.com',price: 'R$ 160.00' }]
  async searchByStayDate (checkin: Date, checkout: Date): Promise<HotelRoom[]> {
    return this.result
  }
}
