import { useRepository } from "repositories/userRepository";
import { User } from "entities/users";
import { NotFoundError } from "helpers";

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
