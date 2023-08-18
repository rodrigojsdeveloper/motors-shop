import { productRepository } from "../repositories/product.repository";
import { userRepository } from "../repositories/user.repository";
import { ForbiddenError } from "../errors/forbidden.error";
import { IProduct } from "../interfaces/product.interface";
import { NotFoundError } from "../errors/notFound.error";
import { Product } from "../entities/product.entity";

class ProductsServices {
  async create(product: IProduct, email: string): Promise<Product> {
    const user = await userRepository.findOneBy({ email });

    if (!user?.is_seller) {
      throw new ForbiddenError("User is not seller");
    }

    const newProduct = new Product();
    newProduct.title = product.title;
    newProduct.description = product.description;
    newProduct.year = product.year;
    newProduct.kilometers = product.kilometers;
    newProduct.price = product.price;
    newProduct.vehicle_type = product.vehicle_type;
    newProduct.cover_image = product.cover_image;
    newProduct.gallery_image = product.gallery_image;
    newProduct.comments = [];
    newProduct.user = user!;

    productRepository.create(newProduct);
    await productRepository.save(newProduct);

    return newProduct;
  }

  async listAll(): Promise<ReadonlyArray<Product>> {
    const products = await productRepository.find({
      relations: ["user", "comments"],
    });

    return products;
  }

  async specific(id: string): Promise<Product> {
    const product = await productRepository.findOne({
      where: { id },
      relations: ["user", "comments"],
    });

    if (!product) {
      throw new NotFoundError("Product");
    }

    return product;
  }

  async update(product: Partial<IProduct>, id: string): Promise<Product> {
    const findProduct = await productRepository.findOneBy({ id });

    if (!findProduct) {
      throw new NotFoundError("Product");
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
  }

  async delete(id: string): Promise<void> {
    const product = await productRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundError("Product");
    }

    await productRepository.update(product.id, { is_published: false });
  }
}

export { ProductsServices };
