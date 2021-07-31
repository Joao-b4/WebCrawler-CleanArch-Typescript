import { adaptMiddleware } from '@/main/webserver/adapters'
import { makeSearcByStayDatehMiddleware } from '@/main/webserver/factories'

export const validateStayDate = adaptMiddleware(makeSearcByStayDatehMiddleware())
