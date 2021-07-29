import { HttpResponse } from '@/presentation/interfaces'

export interface Controller{
  handle: () => Promise<HttpResponse>
}
