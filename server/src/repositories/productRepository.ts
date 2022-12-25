import { AppDataSource } from "data-source";
import { Product } from "entities/products";

const productRepository = AppDataSource.getRepository(Product);

export { productRepository };
