import { HotelRoom } from '@/domain/entities'

export interface IHotelRoomRepository{
  searchByStayDate: (checkin: Date, checkout: Date) => Promise<HotelRoom[]>
}
