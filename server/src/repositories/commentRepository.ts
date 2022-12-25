import { AppDataSource } from "data-source";
import { Comment } from "entities/comments";

const commentRepository = AppDataSource.getRepository(Comment);

export { commentRepository };
