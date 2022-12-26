import { productRepository } from "../../repositories/productRepository";

const listAllProductsService = async () => {
  const products = await productRepository.find({ relations: ["user"] });

  return products;
};

export { listAllProductsService };
