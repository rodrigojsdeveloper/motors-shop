import { Comment } from "../entities/comments";
import { AppDataSource } from "../data-source";

const commentRepository = AppDataSource.getRepository(Comment);

export { commentRepository };
