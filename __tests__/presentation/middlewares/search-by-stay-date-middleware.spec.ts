import { HttpRequest } from '@/presentation/http/models'
import { SearchByStayDateMiddleware } from '@/presentation/http/middlewares'

const mockRequest = (): HttpRequest => {
  return {
    headers: {},
    body: {},
    params: {}
  }
}

describe('SearchByStayDate Middleware', () => {
  test('Should return 400 if checkin and checkout is empty', async () => {
    const searchByStayDateMiddleware = new SearchByStayDateMiddleware()
    const request = mockRequest()
    request.body = { }

    const httpResponse = await searchByStayDateMiddleware.handle(request)
    expect(httpResponse.statusCode).toEqual(400)
  })
  test('Should return 400 if checkin and checkout is not date', async () => {
    const searchByStayDateMiddleware = new SearchByStayDateMiddleware()
    const request = mockRequest()
    request.body = { checkin: '-', checkout: '-' }

    const httpResponse = await searchByStayDateMiddleware.handle(request)
    expect(httpResponse.statusCode).toEqual(400)
  })
  test('Should return 200 if checkin and checkout is date', async () => {
    const searchByStayDateMiddleware = new SearchByStayDateMiddleware()
    const request = mockRequest()
    request.body = { checkin: '2021-07-01', checkout: '2021-07-03' }

    const httpResponse = await searchByStayDateMiddleware.handle(request)
    expect(httpResponse.statusCode).toEqual(200)
  })
})
