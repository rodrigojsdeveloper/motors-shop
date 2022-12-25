import { productRepository } from "repositories/productRepository";
import { NotFoundError } from "helpers";

const deleteProductService = async (id: string): Promise<void> => {
  const user = await productRepository.findOneBy({ id });

  if (!user) {
    throw new NotFoundError("Product not found");
  }

  await productRepository.delete(user.id);
};

export { deleteProductService };
