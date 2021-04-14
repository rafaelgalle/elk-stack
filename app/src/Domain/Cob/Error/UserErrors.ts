import { DomainErrorBase } from "../../Core/Error/DomainError"

export namespace UserError {
  export class InvalidCPF extends DomainErrorBase {
    constructor(value: string) {
      super(`The cpf '${value}' is not valid!`)
      this.statusCode = 400
      this.classError = 'UserError.InvalidCPF'
    }
  }
}