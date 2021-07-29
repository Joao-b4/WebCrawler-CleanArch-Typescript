
export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const HttpResponseServerError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.message
})

export const HttpResponseServerOk = (data: any): HttpResponse => ({
  statusCode: 200,
  data: data
})
