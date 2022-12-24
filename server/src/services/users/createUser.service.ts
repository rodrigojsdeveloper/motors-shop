import { addressRepository } from "../../repositories/addressRepository"
import { useRepository } from "../../repositories/userRepository"
import { IUser } from "../../interfaces/users"
import { User } from "../../entities/users"
import { hash } from "bcrypt"
import { BadRequestError } from "../../helpers"

const createUserService = async (user: IUser): Promise<User> => {

    addressRepository.create(user.address)
    const newAddress = await addressRepository.save(user.address)

    const hashedPassword = await hash(user.password, 10)

    if(user.email) {

        throw new BadRequestError("Email already exists")
    }

    const newUser = new User()
    newUser.name = user.name
    newUser.email = user.email
    newUser.password = hashedPassword
    newUser.cellphone = user.cellphone
    newUser.address = newAddress
    newUser.cpf = user.cpf
    newUser.birthdate = user.birthdate
    newUser.is_seller = user.is_seller
    newUser.bids = []
    newUser.comments = []
    newUser.products = []

    useRepository.create(newUser)
    await useRepository.save(newUser)

    Reflect.deleteProperty(newUser, "password")

    return newUser
}

export { createUserService }
