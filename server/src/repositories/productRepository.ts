import { Product } from "../entities/products";
import { AppDataSource } from "../data-source";

const productRepository = AppDataSource.getRepository(Product);

export { productRepository };
