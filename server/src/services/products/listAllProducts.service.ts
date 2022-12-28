import { productRepository } from "../../repositories/productRepository";

const listAllProductsService = async () => {
  const products = await productRepository.find({
    relations: ["user", "comments"],
  });

  return products;
};

export { listAllProductsService };
