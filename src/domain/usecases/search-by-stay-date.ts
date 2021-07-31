import { HotelRoom } from '@/domain/entities'

export interface ISearchHotelRoomByStayDate{
  call: (checkin: Date, checkout: Date) => Promise<HotelRoom[]>
}
