import { IAddress } from "../interfaces/address.interface";
import { IUser } from "../interfaces/user.interface";

const address: IAddress = {
  state: "Califórnia",
  city: "Mountain View",
  district: "Amphitheatre Pkwy",
  street: "Amphitheatre Pkwy",
  number: 1600,
  complement: "Googleplex",
  zip_code: "94043",
};

const user: IUser = {
  name: "John doe",
  email: "johndoe@org.com",
  password: "Johndoe@123",
  cellphone: "99 99999-9999",
  address: address,
  cpf: "00000000000",
  birthdate: "01/01/2001",
  is_seller: true,
  description: "Lorem Ipsum.",
};

const updatedUser: Partial<IUser> = {
  name: "John Doe",
  cellphone: "(99) 99999-9999",
};

export { user, address, updatedUser };
