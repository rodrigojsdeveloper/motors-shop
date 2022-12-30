import { productRepository } from "../../repositories/productRepository";
import { Product } from "../../entities/product.entity";

const listAllProductsService = async (): Promise<ReadonlyArray<Product>> => {
  const products = await productRepository.find({
    relations: ["user", "comments"],
  });

  return products;
};

export { listAllProductsService };
