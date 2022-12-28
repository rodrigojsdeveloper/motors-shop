import { commentRepository } from "../../repositories/commentRepository";
import { Comment } from "../../entities/comments";

const listAllCommentsService = async (): Promise<Array<Comment>> => {
  const comments = await commentRepository.find({
    relations: ["user", "product"],
  });

  return comments;
};

export { listAllCommentsService };
