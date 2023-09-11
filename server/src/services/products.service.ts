import { productRepository } from "../repositories/product.repository";
import { userRepository } from "../repositories/user.repository";
import { ForbiddenError } from "../errors/forbidden.error";
import { IProduct } from "../interfaces/product.interface";
import { NotFoundError } from "../errors/notFound.error";
import { Product } from "../entities/product.entity";

class ProductsService {
  async create(product: IProduct, email: string): Promise<Product> {
    const user = await userRepository.findOneBy({ email });

    if (!user?.is_seller) {
      throw new ForbiddenError("User is not seller");
    }

    const newProduct = new Product();
    newProduct.brand = product.brand;
    newProduct.model = product.model;
    newProduct.year = product.year;
    newProduct.fuel = product.fuel;
    newProduct.kilometers = product.kilometers;
    newProduct.color = product.color;
    newProduct.fipe = product.fipe;
    newProduct.price = product.price;
    newProduct.description = product.description;
    newProduct.cover_image = product.cover_image;
    newProduct.primary_image = product.primary_image;
    newProduct.second_image = product.second_image;
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
      brand: product.brand ? product.brand : findProduct.brand,
      model: product.model ? product.model : findProduct.model,
      year: product.year ? product.year : findProduct.year,
      fuel: product.fuel ? product.fuel : findProduct.fuel,
      kilometers: product.kilometers
        ? product.kilometers
        : findProduct.kilometers,
      color: product.color ? product.color : findProduct.color,
      fipe: product.fipe ? product.fipe : findProduct.fipe,
      price: product.price ? product.price : findProduct.price,
      description: product.description
        ? product.description
        : findProduct.description,
      cover_image: product.cover_image
        ? product.cover_image
        : findProduct.cover_image,
      primary_image: product.primary_image
        ? product.primary_image
        : findProduct.primary_image,
      second_image: product.second_image
        ? product.second_image
        : findProduct.second_image,
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

export { ProductsService };
