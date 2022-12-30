import { productRepository } from "../../repositories/productRepository";
import { IProductUpdate } from "../../interfaces/product.interface";
import { Product } from "../../entities/product.entity";
import { NotFoundError } from "../../helpers";

const updateProductService = async (
  product: IProductUpdate,
  id: string
): Promise<Product> => {
  const findProduct = await productRepository.findOneBy({ id });

  if (!findProduct) {
    throw new NotFoundError("Product not found");
  }

  await productRepository.update(findProduct.id, {
    title: product.title ? product.title : findProduct.title,
    description: product.description
      ? product.description
      : findProduct.description,
    year: product.year ? product.year : findProduct.year,
    kilometers: product.kilometers
      ? product.kilometers
      : findProduct.kilometers,
    ad_type: product.ad_type ? product.ad_type : findProduct.ad_type,
    price: product.price ? product.price : findProduct.price,
    vehicle_type: product.vehicle_type
      ? product.vehicle_type
      : findProduct.vehicle_type,
    cover_image: product.cover_image
      ? product.cover_image
      : findProduct.cover_image,
    gallery_image: product.gallery_image
      ? product.gallery_image
      : findProduct.gallery_image,
  });

  const updatedProduct = await productRepository.findOneBy({
    id: findProduct.id,
  });

  return updatedProduct!;
};

export { updateProductService };
