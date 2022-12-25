import { useRepository } from "../../repositories/userRepository";
import { NotFoundError } from "../../helpers";
import { User } from "../../entities/users";

const listProductsUserService = async (id: string): Promise<User> => {
  const user = await useRepository.findOne({
    where: { id },
    relations: ["products"],
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

export { listProductsUserService };
