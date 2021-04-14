import { UserDto } from "../Dto/UserDto"
import { UserEntity } from "../../../Domain/Cob/Entity/UserEntity"

export class UserMapper {
  public static toDto (raw: unknown): UserDto {
    const dto: UserDto = raw as UserDto
    return dto
  }
  public static toEntity (raw: unknown): UserEntity {
    const dto: UserEntity = raw as UserEntity
    return dto
  }
}
