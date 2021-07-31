import { IMiddleware, HttpResponse, HttpResponseServerError, HttpResponseServerOk, HttpRequest, HttpResponseBadRequest } from '@/presentation/http/models'

export class SearchByStayDateMiddleware implements IMiddleware {
  async handle (request: HttpRequest): Promise<HttpResponse> {
    try {
      if (!Date.parse(request.body.checkin) || !Date.parse(request.body.checkout)) {
        return HttpResponseBadRequest('InvalidFormat')
      }
      return HttpResponseServerOk({})
    } catch (error) {
      return HttpResponseServerError(error)
    }
  }
}
