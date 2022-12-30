import { useRepository } from "../../repositories/userRepository";
import { User } from "../../entities/user.entity";
import { NotFoundError } from "../../helpers";

const listAllProductsUserService = async (id: string): Promise<User> => {
  const user = await useRepository.findOne({
    where: { id },
    relations: ["address", "products", "comments", "bids"],
  });

  if (!user) {
    throw new NotFoundError("User not found");
  }

  return user;
};

export { listAllProductsUserService };
