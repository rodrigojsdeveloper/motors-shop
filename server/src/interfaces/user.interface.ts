import { IAddress, IAddressUpdate } from "./address.interface";

interface IUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  address: IAddress | object;
  cpf: string;
  birthdate: string;
  is_seller: boolean;
  description: string;
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
  description?: string;
}

export { IUser, IUserUpdate };
