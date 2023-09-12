import { ProductsService } from "../../services/products.service";
import { UsersService } from "../../services/users.service";
import { product, updatedUser, user } from "../../mocks";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";

describe("Testing all service product methods", () => {
  let connection: DataSource;
  let createdUserEmail: string;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );

    const createdUserResponse = await new UsersService().create(user);

    createdUserEmail = createdUserResponse.email;
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a product", async () => {
    const result = await new ProductsService().create(
      product,
      createdUserEmail
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("brand");
    expect(result).toHaveProperty("model");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("fuel");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("color");
    expect(result).toHaveProperty("fipe");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("primary_image");
    expect(result).toHaveProperty("second_image");
    expect(result).toHaveProperty("comments");
  });

  it("Must be able to list all products", async () => {
    const result = await new ProductsService().listAll();

    expect(result).toHaveProperty("map");
  });

  it("Must be able to show specific product using id", async () => {
    const createdProduct = await new ProductsService().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsService().specific(createdProduct.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("brand");
    expect(result).toHaveProperty("model");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("fuel");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("color");
    expect(result).toHaveProperty("fipe");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("primary_image");
    expect(result).toHaveProperty("second_image");
    expect(result).toHaveProperty("comments");
  });

  it("Must be able to edit a product", async () => {
    const createdProduct = await new ProductsService().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsService().update(
      updatedUser,
      createdProduct.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("brand");
    expect(result).toHaveProperty("model");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("fuel");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("color");
    expect(result).toHaveProperty("fipe");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("primary_image");
    expect(result).toHaveProperty("second_image");
    expect(result).toHaveProperty("comments");
  });

  it("Must be able to deactive a product", async () => {
    const createdProduct = await new ProductsService().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsService().deactive(createdProduct.id);

    expect(result).toBeUndefined();
  });

  it("Must be able to active a product", async () => {
    const createdProduct = await new ProductsService().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsService().active(createdProduct.id);

    expect(result).toBeUndefined();
  });
});
