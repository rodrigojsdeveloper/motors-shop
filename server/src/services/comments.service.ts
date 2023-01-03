import { commentRepository } from "../repositories/commentRepository";
import { productRepository } from "../repositories/productRepository";
import { useRepository } from "../repositories/userRepository";
import { IComment } from "../interfaces/comment.interface";
import { Comment } from "../entities/comment.entity";
import { NotFoundError } from "../helpers";

class CommentsServices {
  async create(
    comment: IComment,
    email: string,
    product_id: string
  ): Promise<Comment> {
    const user = await useRepository.findOneBy({ email });

    const product = await productRepository.findOneBy({ id: product_id });

    if (!product) {
      throw new NotFoundError("Product not found");
    }

    const newComment = new Comment();
    newComment.content = comment.content;
    newComment.user = user!;
    newComment.product = product;

    commentRepository.create(newComment);
    await commentRepository.save(newComment);

    return newComment;
  }

  async list(): Promise<ReadonlyArray<Comment>> {
    const comments = await commentRepository.find({
      relations: ["user", "product"],
    });

    return comments;
  }
}

export { CommentsServices };
