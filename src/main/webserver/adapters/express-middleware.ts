import { IMiddleware } from '@/presentation/http/models'
import { Request, Response, NextFunction } from 'express'

export const adaptMiddleware = (middleware: IMiddleware) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const request = {
      body: (req.body || {}),
      params: (req.params || {}),
      headers: (req.headers || {})
    }
    const httpResponse = await middleware.handle(request)
    if (httpResponse.statusCode === 200) {
      Object.assign(req, httpResponse.body)
      next()
    } else {
      res.status(httpResponse.statusCode).json(httpResponse.body)
    }
  }
}
