import { IAddress } from "./address.interface";

interface IUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  address: IAddress | object | Partial<IAddress>;
  cpf: string;
  birthdate: string;
  is_seller: boolean;
  description: string;
}

export { IUser };
