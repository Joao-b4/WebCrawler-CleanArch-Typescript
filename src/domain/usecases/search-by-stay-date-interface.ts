import { Room } from '@/domain/entities'
import { SearchParameterEmpty } from '../errors/search-error'
import { IRoomRepository } from '../repositories'
export interface ISearchByStayDate{
  call: (checkin: Date, checkout: Date) => Promise<Room[]>
}

export class SearchByStayDate implements ISearchByStayDate {
  constructor (private readonly roomRepository: IRoomRepository) {

  }

  async call (checkin: Date, checkout: Date): Promise<Room[]> {
    if (!checkin || !checkout) {
      throw SearchParameterEmpty
    }
    const roomModel = this.roomRepository.searchByStayDate(checkin, checkout)
    return roomModel
  }
}
