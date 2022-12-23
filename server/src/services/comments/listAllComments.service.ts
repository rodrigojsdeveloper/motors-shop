import { commentRepository } from "../../repositories/commentRepository";
import { Comment } from "../../entities/comments";

const listAllCommentsService = async (): Promise<Comment[]> => {

    const comments = await commentRepository.find()

    return comments
}

export { listAllCommentsService }
