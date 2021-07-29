import { Room } from '@/domain/entities/'

export interface ISearchDatasource{
  byStayDate: (checkin: Date, checkout: Date) => Promise<Room[]>
}
