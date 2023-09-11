import { addressRepository } from "../repositories/address.repository";
import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../errors/badRequest.error";
import { NotFoundError } from "../errors/notFound.error";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { createTransport } from "nodemailer";
import { hash } from "bcrypt";

class UsersService {
  async create(user: IUser): Promise<User> {
    const newAddress = addressRepository.create(user.address);
    await addressRepository.save(newAddress);

    if (await userRepository.findOneBy({ email: user.email })) {
      throw new BadRequestError("Email already exists");
    }

    const hashedPassword = await hash(user.password, 10);

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
    newUser.comments = [];
    newUser.products = [];

    userRepository.create(newUser);
    await userRepository.save(newUser);

    Reflect.deleteProperty(newUser, "password");

    return newUser;
  }

  async listAll(): Promise<ReadonlyArray<User>> {
    const users = await userRepository.find({
      relations: ["address", "products", "comments"],
    });

    return users;
  }

  async listProductsUser(id: string): Promise<User> {
    const user = await userRepository.findOne({
      where: { id },
      relations: ["address", "products", "comments"],
    });

    if (!user) {
      throw new NotFoundError("User");
    }

    Reflect.deleteProperty(user, "password");

    return user;
  }

  async profile(email: string): Promise<User> {
    const user = await userRepository.findOneBy({ email });

    Reflect.deleteProperty(user!, "password");

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

    Reflect.deleteProperty(updatedUser!, "password");

    return updatedUser!;
  }

  async specificUserWithEmail(email: string): Promise<User> {
    const user = await userRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundError("User");
    }

    const transporter = createTransport({
      host: "smtp-mail.outlook.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    await transporter
      .sendMail({
        from: process.env.SMTP_EMAIL,
        to: user.email,
        subject: "Change the password",
        html: `Reset your password at this link: http://localhost:5173/newpassword/${user.id}`,
      })
      .catch((err) => {
        console.error(err);
        throw new BadRequestError("Error sending email, try again later");
      });

    return user;
  }
}

export { UsersService };
