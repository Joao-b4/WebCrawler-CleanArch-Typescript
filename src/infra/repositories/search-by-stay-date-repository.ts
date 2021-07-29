import { Room } from '@/domain/entities'
import { IRoomRepository } from '@/domain/repositories'
import { ISearchDatasource } from '../interfaces/search-datasource'

export class RoomRepository implements IRoomRepository {
  constructor (private readonly searchDatasource: ISearchDatasource) {
  }

  async searchByStayDate (checkin: Date, checkout: Date): Promise<Room[]> {
    return this.searchDatasource.byStayDate(checkin, checkout)
  }
}
