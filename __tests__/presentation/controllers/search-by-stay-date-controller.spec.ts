import { SearchByStayDateController } from '@/presentation/http/controllers'
import { HttpRequest, HttpResponseServerOk } from '@/presentation/http/models'
import { SearchHotelRoomByStayDateMock } from '../mocks/search-by-stay-date-usecase-mock'

const mockRequest = (): HttpRequest => {
  return {
    headers: {},
    body: {},
    params: {}
  }
}

type SutTypes = {
  sut: SearchByStayDateController
  searchHotelRoomByStayDate: SearchHotelRoomByStayDateMock
}

const makeSut = (): SutTypes => {
  const usecase = new SearchHotelRoomByStayDateMock()
  const sut = new SearchByStayDateController(usecase)
  return {
    sut,
    searchHotelRoomByStayDate: usecase
  }
}

describe('SearchByStayDate Controller', () => {
  test('Should be HotelRoom Colletion', async () => {
    const { sut, searchHotelRoomByStayDate } = makeSut()

    const checkin = new Date()
    const checkout = new Date()
    checkin.setDate(checkin.getDate() - 1)
    checkout.setDate(checkin.getDate() + 2)

    const request = mockRequest()
    request.body = { checkin,checkout }

    const httpResponse = await sut.handle(request)
    expect(httpResponse).toEqual(HttpResponseServerOk(searchHotelRoomByStayDate.result))
  })
  test('Should return 400 if body is empty', async () => {
    const { sut } = makeSut()

    const request = mockRequest()
    request.body = { }

    const httpResponse = await sut.handle(request)
    expect(httpResponse.statusCode).toEqual(400)
  })
})
