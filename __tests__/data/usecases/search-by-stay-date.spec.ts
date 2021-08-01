import { SearchHotelRoomByStayDate } from '@/data/usecases'
import { SearchParameterInvalid } from '@/domain/errors/search-error'
import { HotelRoomRepositoryMock } from './mocks/hotel-room-repository-mock'

type SutTypes = {
  sut: SearchHotelRoomByStayDate
  hotelRoomRepository: HotelRoomRepositoryMock
}

const makeSut = (): SutTypes => {
  const repository = new HotelRoomRepositoryMock()
  const sut = new SearchHotelRoomByStayDate(repository)
  return {
    sut,
    hotelRoomRepository: repository
  }
}

describe('SearchByStayDate Usecase', () => {
  test('Should be throw SearchParameterInvalid.message(checkinInvalid)', async () => {
    const { sut } = makeSut()
    const checkin = new Date()
    const checkout = new Date()

    checkin.setDate(checkin.getDate() - 1)
    checkout.setDate(checkout.getDate() + 2)

    const promise = sut.call(checkin,checkout)
    await expect(promise).rejects.toThrowError(new SearchParameterInvalid('checkinInvalid'))
  })
  test('Should be throw SearchParameterInvalid.message(checkoutInvalid)', async () => {
    const { sut } = makeSut()
    const checkin = new Date()
    const checkout = new Date()

    checkin.setDate(checkin.getDate() + 2)
    checkout.setDate(checkout.getDate() + 1)

    const promise = sut.call(checkin,checkout)
    await expect(promise).rejects.toThrowError(new SearchParameterInvalid('checkoutInvalid'))
  })
  test('Should be HotelRoom Colletion', async () => {
    const { sut,hotelRoomRepository } = makeSut()
    const checkin = new Date()
    const checkout = new Date()

    checkin.setDate(checkin.getDate() + 1)
    checkout.setDate(checkout.getDate() + 2)

    const usecase = await sut.call(checkin,checkout)
    expect(usecase).toEqual(hotelRoomRepository.result)
  })
})
