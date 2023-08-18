import { ProductsServices } from "../../services/products.service";
import { UsersServices } from "../../services/users.service";
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

    const createdUserResponse = await new UsersServices().create(user);

    createdUserEmail = createdUserResponse.email;
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a product", async () => {
    const result = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("vehicle_type");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("gallery_image");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("user");
  });

  it("Must be able to list all products", async () => {
    const result = await new ProductsServices().listAll();

    expect(result).toHaveProperty("map");
  });

  it("Must be able to show specific product using id", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsServices().specific(createdProduct.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("vehicle_type");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("gallery_image");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("user");
  });

  it("Must be able to edit a product", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsServices().update(
      updatedUser,
      createdProduct.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("vehicle_type");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("gallery_image");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("is_published");
  });

  it("Must be able to delete a product", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const result = await new ProductsServices().delete(createdProduct.id);

    expect(result).toBeUndefined();
  });
});
