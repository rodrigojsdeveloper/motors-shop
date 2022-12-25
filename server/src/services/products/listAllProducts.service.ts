import { productRepository } from "repositories/productRepository";

const listAllProductsService = async () => {
  const products = await productRepository.find();

  return products;
};

export { listAllProductsService };
