
import { UserRepository } from "../../../Infrastructure/Cob/Repository/UserRepository"
import { DomainError } from "../../Core/Error/DomainError"
import { Result } from "../../Core/Result/Result"
import { UserEntity } from "../Entity/UserEntity"
import { UserError } from "../Error/UserErrors"

export class UserService {
  private userRepository: UserRepository

  constructor() {
    // TODO - Fazer injeção de dependencia, domain deve conhecer apenas a interface do repository.
    this.userRepository = new UserRepository()
  }

  public async create(user: UserEntity): Promise<Result<UserEntity>> {
    const validError = this.validUser(user)
    if (validError) return Result.fail<UserEntity>(validError)

    const userOrError = await this.userRepository.create(user)
    if (userOrError.isFailure) return Result.fail<UserEntity>(userOrError.error)

    return Result.ok<UserEntity>(userOrError.getValue())
  } 

  private validUser (user: UserEntity): DomainError {
    if (!user.cpf) {
      return new UserError.InvalidCPF(user.cpf)
    }
    if (user.cpf.length < 8) {
      return new UserError.InvalidCPF(user.cpf)
    } 
    return null
  }
}