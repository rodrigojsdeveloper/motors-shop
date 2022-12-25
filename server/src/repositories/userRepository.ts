import { AppDataSource } from "../data-source";
import { User } from "../entities/users";

const useRepository = AppDataSource.getRepository(User);

export { useRepository };
