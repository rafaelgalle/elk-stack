import axios from 'axios'
import { UserEntity } from '../../../Domain/Cob/Entity/UserEntity'
import { UserService } from '../../../Domain/Cob/Service/UserService'
import { Result } from '../../../Domain/Core/Result/Result'
import { UserMapper } from '../Mapper/UserMapper'

export class UserController {
  private userService: UserService

  constructor() {
    this.userService = new UserService()
  }

  public async createUserr(request: any, res: any, next: any) {
    try {
      // throw new Error('asdadsadsa') // To generate an unmapped error
      const userOrError: Result<UserEntity> = await this.userService.create(UserMapper.toEntity(request.body))
      if (userOrError.isFailure) {
        return next(userOrError.error)
      }

      return res.status(201).json(userOrError.getValue()) 
    } catch (error) {
      return next(error)
    }
  }
}
