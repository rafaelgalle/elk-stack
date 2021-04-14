export namespace CobError {
  export class Connection extends Error {
    constructor(url: string, error: any) {
      super('Error connection with cob')
      this.statusCode = 502
      this.classError = 'CobError.Connection'
      console.error('Error connection with cob in url: ' + url, error)
    }
  }

  export class UnexpectedResult extends Error {
    constructor(url: string, result: any) {
      super('Unexpected result')
      this.statusCode = 502
      this.classError = 'CobError.UnexpectedResult'
      console.error('UnexpectedResult: ' + url, result)
    }
  }
}