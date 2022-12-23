import { IAddress } from "../address"

interface IUser {
    name: string
    email: string
    password: string
    cellphone: string
    address: IAddress
    cpf: string
    birthdate: string
    is_seller: boolean
}

export { IUser }
