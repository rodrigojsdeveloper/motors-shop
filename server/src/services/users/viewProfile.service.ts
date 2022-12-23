import { useRepository } from "../../repositories/userRepository";
import { User } from "../../entities/users";

const viewProfileService = async (email: string): Promise<User> => {

    const user = await useRepository.findOneBy({ email })

    if(!user) {

        throw new Error("User not found")
    }

    return user
}

export { viewProfileService }
