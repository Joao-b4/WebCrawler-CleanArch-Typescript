import { IController } from '@/presentation/interfaces'
import { Request, Response } from 'express'

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    console.log(req.body)
    const httpRequest = { body: req.body, params: req.params }
    const httpResponse = await controller.handle(httpRequest)
    res.status(httpResponse.statusCode).json(httpResponse.data)
  }
}
