import { productRepository } from "../../repositories/productRepository";
import { useRepository } from "../../repositories/userRepository";
import { IProduct } from "../../interfaces/products";
import { Product } from "../../entities/products";

const createProductService = async (product: IProduct, email: string): Promise<Product> => {
  
  const user = await useRepository.findOneBy({ email })
  
  const newProduct = new Product();
  newProduct.name = product.name;
  newProduct.description = product.description;
  newProduct.year = product.year;
  newProduct.kilometers = product.kilometers;
  newProduct.ad_type = product.ad_type;
  newProduct.price = product.price;
  newProduct.vehicle_type = product.vehicle_type;
  newProduct.images = product.images;
  newProduct.comments = [];
  newProduct.user = user!

  productRepository.create(newProduct);
  await productRepository.save(newProduct);

  return newProduct;
};

export { createProductService };
