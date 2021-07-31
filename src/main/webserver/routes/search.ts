import { Router } from 'express'
import { makeSearchByStayDateController } from '@/main/webserver/factories/controllers'
import { adaptRoute } from '@/main/webserver/adapters'
import { validateStayDate } from '../middlewares'

export default (router: Router): void => {
  router.post('/search', [validateStayDate],adaptRoute(makeSearchByStayDateController()))
}
