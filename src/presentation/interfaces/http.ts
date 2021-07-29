
export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export type HttpRequest = {
  params: any
  body: any
}

export const HttpResponseServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: { error: error.message }
})

export const HttpResponseServerOk = (data: any): HttpResponse => ({
  statusCode: 200,
  data: data
})
