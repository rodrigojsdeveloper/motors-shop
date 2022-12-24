import { useRepository } from "../../repositories/userRepository";
import { User } from "../../entities/users";

const viewProfileService = async (email: string): Promise<User> => {

    const user = await useRepository.findOneBy({ email })

    return user!
}

export { viewProfileService }
