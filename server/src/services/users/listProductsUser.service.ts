import { useRepository } from "../../repositories/userRepository"
import { User } from "../../entities/users"

const listProductsUserService = async (id: string): Promise<User> => {

    const user = await useRepository.findOne({ where: { id }, relations: [ "products" ] })

    return user!
}

export { listProductsUserService }
