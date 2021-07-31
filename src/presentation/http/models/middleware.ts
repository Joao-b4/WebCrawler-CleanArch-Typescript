import { HttpResponse } from '@/presentation/http/models'

export interface IMiddleware<T = any> {
  handle: (httpRequest: T) => Promise<HttpResponse>
}
