import { addressRepository } from "../repositories/address.repository";
import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../errors/badRequest.error";
import { NotFoundError } from "../errors/notFound.error";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UsersServices {
  async create(user: IUser): Promise<User> {
    const newAddress = addressRepository.create(user.address);
    await addressRepository.save(newAddress);

    const hashedPassword = await hash(user.password, 10);

    if (await userRepository.findOneBy({ email: user.email })) {
      throw new BadRequestError("Email already exists");
    }

    const newUser = new User();
    newUser.name = user.name;
    newUser.email = user.email;
    newUser.password = hashedPassword;
    newUser.cellphone = user.cellphone;
    newUser.address = newAddress;
    newUser.cpf = user.cpf;
    newUser.birthdate = user.birthdate;
    newUser.is_seller = user.is_seller;
    newUser.description = user.description;
    newUser.bids = [];
    newUser.comments = [];
    newUser.products = [];

    userRepository.create(newUser);
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }

  async list(): Promise<ReadonlyArray<User>> {
    const users = await userRepository.find({
      relations: ["address", "products", "comments", "bids"],
    });

    return users;
  }

  async listProducts(id: string): Promise<User> {
    const user = await userRepository.findOne({
      where: { id },
      relations: ["address", "products", "comments", "bids"],
    });

    if (!user) {
      throw new NotFoundError("User");
    }

    return user;
  }

  async profile(email: string): Promise<User> {
    const user = await userRepository.findOneBy({ email });

    return user!;
  }

  async update(user: Partial<IUser>, id: string): Promise<User> {
    const findUser = await userRepository.findOneBy({ id });

    if (!findUser) {
      throw new NotFoundError("User");
    }

    await userRepository.update(id, {
      name: user.name ? user.name : findUser.name,
      email: user.email ? user.email : findUser.email,
      password: user.password
        ? await hash(user.password, 10)
        : findUser.password,
      cellphone: user.cellphone ? user.cellphone : findUser.cellphone,
      address: user.address
        ? await addressRepository.save(user.address)
        : findUser.address,
      cpf: user.cpf ? user.cpf : findUser.cpf,
      birthdate: user.birthdate ? user.birthdate : findUser.birthdate,
      is_seller: user.is_seller ? user.is_seller : findUser.is_seller,
      description: user.description ? user.description : findUser.description,
    });

    const updatedUser = await userRepository.findOneBy({ id: findUser.id });

    return updatedUser!;
  }
}

export { UsersServices };
