export class SearchError extends Error {
  constructor (message: string) {
    super('SearchError')
    this.name = 'SearchError'
    this.message = message
  }
}

export class SearchParameterEmpty extends SearchError {}
