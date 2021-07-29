import { Router } from 'express'
import { makeSearchByStayDateController } from '@/main/webserver/factories'
import { adaptRoute } from '@/main/webserver/adapters'

export default (router: Router): void => {
  router.post('/search', adaptRoute(makeSearchByStayDateController()))
}
