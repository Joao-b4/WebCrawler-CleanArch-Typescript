import { HttpResponse , HttpRequest } from '@/presentation/interfaces'

export interface IController{
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
