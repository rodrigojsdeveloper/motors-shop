import { productRepository } from "../../repositories/productRepository";
import { Product } from "../../entities/product.entity";
import { NotFoundError } from "../../helpers";

const specificProductService = async (id: string): Promise<Product> => {
  const product = await productRepository.findOne({
    where: { id },
    relations: ["comments", "user"],
  });

  if (!product) {
    throw new NotFoundError("Product not found");
  }

  return product;
};

export { specificProductService };
