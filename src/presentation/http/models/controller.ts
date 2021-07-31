import { HttpResponse , HttpRequest } from '@/presentation/http/models'

export interface IController{
  handle: (request: HttpRequest) => Promise<HttpResponse>
}
