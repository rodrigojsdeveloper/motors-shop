import { addressRepository } from "../repositories/addressRepository";
import { IUser, IUserUpdate } from "../interfaces/user.interface";
import { useRepository } from "../repositories/userRepository";
import { BadRequestError, NotFoundError } from "../helpers";
import { User } from "../entities/user.entity";
import { hash } from "bcrypt";

class UsersServices {
  async create(user: IUser): Promise<User> {
    addressRepository.create(user.address);
    const newAddress = await addressRepository.save(user.address);

    const hashedPassword = await hash(user.password, 10);

    if (await useRepository.findOneBy({ email: user.email })) {
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

    useRepository.create(newUser);
    await useRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }

  async list(): Promise<ReadonlyArray<User>> {
    const users = await useRepository.find({
      relations: ["address", "products", "comments", "bids"],
    });

    return users;
  }

  async listProducts(id: string): Promise<User> {
    const user = await useRepository.findOne({
      where: { id },
      relations: ["address", "products", "comments", "bids"],
    });

    if (!user) {
      throw new NotFoundError("User not found");
    }

    return user;
  }

  async profile(email: string): Promise<User> {
    const user = await useRepository.findOneBy({ email });

    return user!;
  }

  async update(user: IUserUpdate, id: string): Promise<User> {
    const findUser = await useRepository.findOneBy({ id });

    if (!findUser) {
      throw new NotFoundError("User not found");
    }

    await useRepository.update(id, {
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

    const updatedUser = await useRepository.findOneBy({ id: findUser.id });

    return updatedUser!;
  }
}

export { UsersServices };
