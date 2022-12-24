import { addressRepository } from "../../repositories/addressRepository"
import { useRepository } from "../../repositories/userRepository"
import { IUserUpdate } from "../../interfaces/users"
import { User } from "../../entities/users"
import { hash } from "bcrypt"
import { NotFoundError } from "../../helpers"

const updateUserService = async (user: IUserUpdate, id: string): Promise<User> => {

    const findUser = await useRepository.findOneBy({ id })

    if(!findUser) {

        throw new NotFoundError("User not found")
    }

    await useRepository.update(id, {
        name: user.name ? user.name : findUser.name,
        email: user.email ? user.email : findUser.email,
        password: user.password ? await hash(user.password, 10) : findUser.password,
        cellphone: user.cellphone ? user.cellphone : findUser.cellphone,
        address: user.address ? await addressRepository.save(user.address) : findUser.address,
        cpf: user.cpf ? user.cpf : findUser.cpf,
        birthdate: user.birthdate ? user.birthdate : findUser.birthdate,
        is_seller: user.is_seller ? user.is_seller : findUser.is_seller
    })

    const updatedUser = await useRepository.findOneBy({ id })

    return updatedUser!
}

export { updateUserService }
