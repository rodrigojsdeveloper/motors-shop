import { Comment } from "../entities/comments";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const commentRepository: Repository<Comment> = AppDataSource.getRepository(Comment);

export { commentRepository };
