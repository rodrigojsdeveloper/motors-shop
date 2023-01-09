import { addressRepository } from "../repositories/address.repository";
import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../errors/badRequest.error";
import { NotFoundError } from "../errors/notFound.error";
import { IUser } from "../interfaces/user.interface";
import { User } from "../entities/user.entity";
import { createTransport } from "nodemailer";
import { hash } from "bcrypt";

const createUserService = async (user: IUser): Promise<User> => {
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
  newUser.bids = [];
  newUser.comments = [];
  newUser.products = [];

  userRepository.create(newUser);
  await userRepository.save(newUser);

  Reflect.deleteProperty(newUser, "password");

  return newUser;
};

const listUsersService = async (): Promise<ReadonlyArray<User>> => {
  const users = await userRepository.find({
    relations: ["address", "products", "comments", "bids"],
  });

  return users;
};

const listProductsUserService = async (id: string): Promise<User> => {
  const user = await userRepository.findOne({
    where: { id },
    relations: ["address", "products", "comments", "bids"],
  });

  if (!user) {
    throw new NotFoundError("User");
  }

  return user;
};

const profileService = async (email: string): Promise<User> => {
  const user = await userRepository.findOneBy({ email });

  return user!;
};

const updateUserService = async (
  user: Partial<IUser>,
  id: string
): Promise<User> => {
  const findUser = await userRepository.findOneBy({ id });

  if (!findUser) {
    throw new NotFoundError("User");
  }

  await userRepository.update(id, {
    name: user.name ? user.name : findUser.name,
    email: user.email ? user.email : findUser.email,
    password: user.password ? await hash(user.password, 10) : findUser.password,
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
};

const specificUserWithEmailService = async (email: string): Promise<User> => {
  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new NotFoundError("User");
  }

  const transporter = createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_EMAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter
    .sendMail({
      from: "rodrigojsdeveloper@outlook.com",
      to: user.email,
      subject: "Change the password",
      html: "Reset your password at this link: http://localhost:3000/newpassword",
    })
    .catch((err) => {
      console.error(err);
      throw new BadRequestError("Error sending email, try again later");
    });

  return user;
};

export {
  createUserService,
  listUsersService,
  listProductsUserService,
  profileService,
  updateUserService,
  specificUserWithEmailService,
};
