
export type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

export type HttpRequest = {
  headers: any
  params: any
  body: any
}

export const HttpResponseServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: { error: error.message }
})
export const HttpResponseBadRequest = (error: String): HttpResponse => ({
  statusCode: 400,
  body: { error: error }
})
export const HttpResponseServerOk = (body: any): HttpResponse => ({
  statusCode: 200,
  body: body
})
