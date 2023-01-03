import { Comment } from "../entities/comment.entity";
import { AppDataSource } from "../data-source";
import { Repository } from "typeorm";

const commentRepository: Repository<Comment> =
  AppDataSource.getRepository(Comment);

export { commentRepository };
