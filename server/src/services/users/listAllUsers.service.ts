import { useRepository } from "../../repositories/userRepository";
import { User } from "../../entities/user.entity";

const listAllUsersService = async (): Promise<ReadonlyArray<User>> => {
  const users = await useRepository.find({
    relations: ["address", "products", "comments", "bids"],
  });

  return users;
};

export { listAllUsersService };
