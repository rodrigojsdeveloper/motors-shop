import { IAddress, IAddressUpdate } from "../address";

interface IUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  address: IAddress | object;
  cpf: string;
  birthdate: string;
  is_seller: boolean;
}

interface IUserUpdate {
  name?: string;
  email?: string;
  password?: string;
  cellphone?: string;
  address?: IAddressUpdate;
  cpf?: string;
  birthdate?: string;
  is_seller?: boolean;
}

export { IUser, IUserUpdate };
