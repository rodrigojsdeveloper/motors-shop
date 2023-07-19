import { product, updatedUser, user, user2, user3, user4 } from "../../mocks";
import { ProductsServices } from "../../services/products.service";
import { UsersServices } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";

describe("Testing all service product methods", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a product", async () => {
    const createdUser = await new UsersServices().create(user);

    const result = await new ProductsServices().create(
      product,
      createdUser.email
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("ad_type");
    expect(result).toHaveProperty("vehicle_type");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("gallery_image");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("user");
  });

  test("Must be able to list all products", async () => {
    const result = await new ProductsServices().listAll();

    expect(result).toHaveProperty("map");
  });

  test("Must be able to show specific product using id", async () => {
    const createdUser = await new UsersServices().create(user2);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
    );

    const result = await new ProductsServices().specific(createdProduct.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("title");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("year");
    expect(result).toHaveProperty("kilometers");
    expect(result).toHaveProperty("price");
    expect(result).toHaveProperty("ad_type");
    expect(result).toHaveProperty("vehicle_type");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("gallery_image");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("is_published");
    expect(result).toHaveProperty("user");
  });

  test("Must be able to edit a product", async () => {
    const createdUser = await new UsersServices().create(user3);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
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
    expect(result).toHaveProperty("ad_type");
    expect(result).toHaveProperty("vehicle_type");
    expect(result).toHaveProperty("cover_image");
    expect(result).toHaveProperty("gallery_image");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("is_published");
  });

  test("Must be able to delete a product", async () => {
    const createdUser = await new UsersServices().create(user4);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
    );

    const result = await new ProductsServices().delete(createdProduct.id);

    expect(result).toBeUndefined();
  });
});
