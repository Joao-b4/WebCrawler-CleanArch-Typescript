// import { SearchByStayDate } from '@/domain/usecases'
import { Controller, HttpResponse, HttpResponseServerError, HttpResponseServerOk } from '@/presentation/interfaces'

export class SearchByStayDateController implements Controller {
//   constructor (private readonly lastRankingLoader: SearchByStayDate) {
//   }

  async handle (): Promise<HttpResponse<[]>> {
    try {
    //   const ranking = await this.lastRankingLoader.call()
      return HttpResponseServerOk({})
    } catch (error) {
      return HttpResponseServerError(error)
    }
  }
}
