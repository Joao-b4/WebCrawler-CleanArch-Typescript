export class SearchError extends Error {
  constructor (message?: string) {
    super('SearchError')
    this.name = 'SearchError'
    this.message = message || ''
  }
}

export class SearchParameterInvalid extends SearchError {}
