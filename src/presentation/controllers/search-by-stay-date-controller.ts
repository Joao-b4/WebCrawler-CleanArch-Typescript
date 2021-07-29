import { ISearchByStayDate } from '@/domain/usecases'
import { IController, HttpResponse, HttpRequest, HttpResponseServerError, HttpResponseServerOk } from '@/presentation/interfaces'

export class SearchByStayDateController implements IController {
  constructor (private readonly usecase: ISearchByStayDate) {
  }

  async handle (request: HttpRequest): Promise<HttpResponse<[]>> {
    try {
      // todo - adicionar middleware
      const checkin = new Date(request.body.checkin)
      const checkout = new Date(request.body.checkout)
      const resultList = await this.usecase.call(checkin,checkout)
      return HttpResponseServerOk(resultList)
    } catch (error) {
      return HttpResponseServerError(error)
    }
  }
}
