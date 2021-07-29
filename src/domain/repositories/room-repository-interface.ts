import { Room } from '@/domain/entities'

export interface IRoomRepository{
  searchByStayDate: (checkin: Date, checkout: Date) => Promise<Room[]>
}
