import { SearchDatasourceMock } from '../mocks/crawler-search-datasource-mock'
import { HotelRoomRepository } from '@/infra/repositories/hotel-room-repository'

type SutTypes = {
  sut: HotelRoomRepository
  crawlerSearcDatasource: SearchDatasourceMock
}

const makeSut = (): SutTypes => {
  const datasource = new SearchDatasourceMock()
  const sut = new HotelRoomRepository(datasource)
  return {
    sut,
    crawlerSearcDatasource: datasource
  }
}

describe('HotelRoom Repository', () => {
  test('Should be return HotelRoom Colletion', async () => {
    const { sut,crawlerSearcDatasource } = makeSut()
    const checkin = new Date()
    const checkout = new Date()

    checkin.setDate(checkin.getDate() + 1)
    checkout.setDate(checkin.getDate() + 2)

    const usecase = await sut.searchByStayDate(checkin,checkout)
    expect(usecase).toEqual(crawlerSearcDatasource.result)
  })
})
