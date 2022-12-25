import { useRepository } from "../../repositories/userRepository";
import { UnauthorizedError } from "../../helpers";
import { ILogin } from "../../interfaces/login";
import { sign } from "jsonwebtoken";
import { compare } from "bcrypt";

const loginService = async (user: ILogin): Promise<object> => {
  const findUser = await useRepository.findOneBy({ email: user.email });

  if (!findUser) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const passwordMatch = await compare(user.password, findUser.password);

  if (!passwordMatch) {
    throw new UnauthorizedError("Invalid credentials");
  }

  const token = sign(
    { email: findUser.email },
    process.env.SECRET_KEY as string,
    { expiresIn: "24h", subject: findUser.id }
  );

  return { token };
};

export { loginService };
