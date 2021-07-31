import { ISearchHotelRoomByStayDate } from '@/domain/usecases'
import { IController, HttpResponse, HttpResponseBadRequest, HttpResponseServerOk, HttpRequest, HttpResponseServerError } from '@/presentation/http/models'
import { parseISO } from 'date-fns'

export class SearchByStayDateController implements IController {
  constructor (private readonly usecase: ISearchHotelRoomByStayDate) {
  }

  async handle (request: HttpRequest): Promise<HttpResponse<[]>> {
    try {
      if (!request.body.checkin || !request.body.checkout) {
        return HttpResponseBadRequest('empty')
      }

      const checkin = parseISO(request.body.checkin)
      const checkout = parseISO(request.body.checkout)
      const resultList = await this.usecase.call(checkin,checkout)
      return HttpResponseServerOk(resultList)
    } catch (error) {
      return HttpResponseServerError(error)
    }
  }
}
