import { commentRepository } from "../../repositories/commentRepository";
import { productRepository } from "../../repositories/productRepository";
import { useRepository } from "../../repositories/userRepository";
import { IComment } from "../../interfaces/comments";
import { Comment } from "../../entities/comments";
import { NotFoundError } from "../../helpers";

const createCommentService = async (
  comment: IComment,
  email: string,
  product_id: string
): Promise<Comment> => {
  const user = await useRepository.findOneBy({ email });

  const product = await productRepository.findOneBy({ id: product_id });

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  const newComment = new Comment();
  (newComment.content = comment.content), (newComment.user = user!);
  newComment.product = product;

  commentRepository.create(newComment);
  await commentRepository.save(newComment);

  return newComment;
};

export { createCommentService };
