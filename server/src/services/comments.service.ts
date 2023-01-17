import { commentRepository } from "../repositories/comment.repository";
import { productRepository } from "../repositories/product.repository";
import { userRepository } from "../repositories/user.repository";
import { IComment } from "../interfaces/comment.interface";
import { NotFoundError } from "../errors/notFound.error";
import { Comment } from "../entities/comment.entity";

class CommentsServices {
  async create(
    comment: IComment,
    email: string,
    product_id: string
  ): Promise<Comment> {
    const user = await userRepository.findOneBy({ email });

    const product = await productRepository.findOneBy({ id: product_id });

    if (!product) {
      throw new NotFoundError("Product");
    }

    const newComment = new Comment();
    newComment.content = comment.content;
    newComment.user = user!;
    newComment.product = product;

    commentRepository.create(newComment);
    await commentRepository.save(newComment);

    return newComment;
  }

  async listCommentsProduct(
    product_id: string
  ): Promise<ReadonlyArray<Comment>> {
    const product = await productRepository.findOne({
      where: { id: product_id },
      relations: ["comments"],
    });

    const comments = await commentRepository.find({
      relations: ["user", "product"],
    });

    if (!product) {
      throw new NotFoundError("Product");
    }

    return comments.filter((comment) => comment.product.id == product.id);
  }
}
export { CommentsServices };
