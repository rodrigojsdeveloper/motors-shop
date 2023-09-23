import { IAddress } from "./address.interface";

interface IUser {
  name: string;
  email: string;
  password: string;
  cellphone: string;
  address: IAddress | Partial<IAddress>;
  cpf: string;
  birthdate: string;
  is_seller: boolean;
  description: string;
  color: string;
}

export { IUser };
