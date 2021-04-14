import { UserDto } from "../Dto/UserDto"
import { UserEntity } from "../../../Domain/Cob/Entity/UserEntity"

export class UserMapper {
  public static toEntity (dto: UserDto): UserEntity {
    const entity = new UserEntity()
    entity.id = dto.codigo
    entity.name = dto.nome
    entity.cpf = dto.registro_nacional
    return entity
  }
}
