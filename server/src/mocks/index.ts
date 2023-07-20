import { IAddress } from "../interfaces/address.interface";
import { IProduct } from "../interfaces/product.interface";
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

const user2: IUser = {
  name: "John doe",
  email: "johndoe2@org.com",
  password: "Johndoe@123",
  cellphone: "99 99999-9999",
  address: address,
  cpf: "00000000000",
  birthdate: "01/01/2001",
  is_seller: true,
  description: "Lorem Ipsum.",
};

const user3: IUser = {
  name: "John doe",
  email: "johndoe3@org.com",
  password: "Johndoe@123",
  cellphone: "99 99999-9999",
  address: address,
  cpf: "00000000000",
  birthdate: "01/01/2001",
  is_seller: true,
  description: "Lorem Ipsum.",
};

const user4: IUser = {
  name: "John doe",
  email: "johndoe4@org.com",
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

const product: IProduct = {
  title: "BMW",
  description: "Descriçãoo",
  year: 2023,
  kilometers: 0,
  price: "R$ 1.000.000,00",
  ad_type: "sale",
  vehicle_type: "car",
  cover_image:
    "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBguNbJl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSRnqoQh47wMvcYi9K6rfMb3islBglUb90cRScHz63MbnMdQocyJGy58iUrQ%25r9oi5W8zWu3djqogqaJjdl3ilUQzjcRScH8gsMbnMdobeyJGy53ARrQ%25r9R1HW8zWubxdqogqaJhul3ilUQTqcRScH753MbnMd08YyJGy5BoorQ%25r9YbJW8zWunUQqogqaGb7l3ilU%25JjcRScHzo9MbnMdg3YyJGy5iRBrQ%25r9SEUW8zWunFbqogqaG%25Jl3ilU%254mcRScHzJmMbnMdg5uyJGy5i9ErQ%25r9SBYW8zWunCjqogqaG4zl3ilU%25WFcRScHzRUMbnMdg1RyJGy5mR3rQ%25r9sEGW8zWuKGEqogqaDCdl3ilUC4ocRScH4JBMbnMdeoiyJGy5m30rQ%25r9sRcW8zWuKSuqogqaDnvl3ilURJ5cRScHbeiMbnMdJ70yJGy5Q3drQ%25r98R9W8zWuobSqogqa3GIl3ilUR3pcRScHbDBMbnMdJC0yJGy5QkirQ%25r99aGW8zWuuRHqogqaabJl3ilUUJecRScHHeiMbnMddQuyJGy559KrQbBUq2rjGLqryJR5GlJirjGNY3QcNQBUJ1",
  gallery_image:
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/08103657/BMW-Serie-1-thumb-300x169.jpg",
};

const updatedProduct: Partial<IProduct> = {
  description: "Description",
  year: 2020,
  kilometers: 100,
};

const auction: IProduct = {
  title: "BMW",
  description: "Descriçãoo",
  year: 2023,
  kilometers: 0,
  price: "R$ 1.000.000,00",
  ad_type: "auction",
  vehicle_type: "car",
  cover_image:
    "https://cosystatic.bmwgroup.com/bmwweb/cosySec?COSY-EU-100-2545xM4RIyFnbm9Mb3AgyyIJrjG0suyJRBODlsrjGpuaprQbhSIqppglBguNbJl384MlficYiGHqoQxYLW7%25f3tiJ0PCJirQbLDWcQW7%251uSRnqoQh47wMvcYi9K6rfMb3islBglUb90cRScHz63MbnMdQocyJGy58iUrQ%25r9oi5W8zWu3djqogqaJjdl3ilUQzjcRScH8gsMbnMdobeyJGy53ARrQ%25r9R1HW8zWubxdqogqaJhul3ilUQTqcRScH753MbnMd08YyJGy5BoorQ%25r9YbJW8zWunUQqogqaGb7l3ilU%25JjcRScHzo9MbnMdg3YyJGy5iRBrQ%25r9SEUW8zWunFbqogqaG%25Jl3ilU%254mcRScHzJmMbnMdg5uyJGy5i9ErQ%25r9SBYW8zWunCjqogqaG4zl3ilU%25WFcRScHzRUMbnMdg1RyJGy5mR3rQ%25r9sEGW8zWuKGEqogqaDCdl3ilUC4ocRScH4JBMbnMdeoiyJGy5m30rQ%25r9sRcW8zWuKSuqogqaDnvl3ilURJ5cRScHbeiMbnMdJ70yJGy5Q3drQ%25r98R9W8zWuobSqogqa3GIl3ilUR3pcRScHbDBMbnMdJC0yJGy5QkirQ%25r99aGW8zWuuRHqogqaabJl3ilUUJecRScHHeiMbnMddQuyJGy559KrQbBUq2rjGLqryJR5GlJirjGNY3QcNQBUJ1",
  gallery_image:
    "https://fotos.jornaldocarro.estadao.com.br/wp-content/uploads/2020/06/08103657/BMW-Serie-1-thumb-300x169.jpg",
};

export {
  user,
  user2,
  user3,
  user4,
  address,
  updatedUser,
  product,
  updatedProduct,
  auction,
};
