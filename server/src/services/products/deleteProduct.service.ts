import { productRepository } from "../../repositories/productRepository";
import { NotFoundError } from "../../helpers";

const deleteProductService = async (id: string): Promise<void> => {
  const product = await productRepository.findOneBy({ id });

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  await productRepository.delete(product.id);
};

export { deleteProductService };
