import { HotelRoom } from '@/domain/entities/'

export interface ISearchDatasource{
  search: (param: any) => Promise<HotelRoom[]>
}
