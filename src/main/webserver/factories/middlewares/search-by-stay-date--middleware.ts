import { SearchByStayDateMiddleware } from '@/presentation/http/middlewares'
import { IMiddleware } from '@/presentation/http/models'

export const makeSearcByStayDatehMiddleware = (): IMiddleware => {
  return new SearchByStayDateMiddleware()
}
