import { AppDataSource } from "../data-source";
import { User } from "../entities/users";
import { Repository } from "typeorm";

const useRepository: Repository<User> = AppDataSource.getRepository(User);

export { useRepository };
