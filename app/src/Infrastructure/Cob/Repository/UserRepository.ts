import axios from "axios" // TODO - Fazer RestAdapter
import { CobError } from "../Error/CobError"
import { UserEntity } from "../../../Domain/Cob/Entity/UserEntity"
import { Result } from "../../../Domain/Core/Result/Result"
import { UserMapper } from "../Mapper/UserMapper"

export class UserRepository {
  create (user: any): Promise<Result<UserEntity>> {
    return new Promise((resolve, reject) => {
      const url = 'https://aaaa606858f80add49001733ff9b.mockapi.io/api/products'
      axios.post(url, {}, {})
      .then(response => {
        if (response.status !== 201 || typeof response !== 'object' || typeof response.data !== 'object') {
          resolve(Result.fail<UserEntity>(new CobError.UnexpectedResult(url, response)))
        }
        resolve(Result.ok<UserEntity>(UserMapper.toEntity(response.data)))
      })
      .catch(error => {
        resolve(Result.fail<UserEntity>(new CobError.Connection(url, error)))
      })
    })
  }
}
