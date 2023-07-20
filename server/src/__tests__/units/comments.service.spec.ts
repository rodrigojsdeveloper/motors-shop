import { ProductsServices } from "../../services/products.service";
import { CommentsServices } from "../../services/comments.service";
import { UsersServices } from "../../services/users.service";
import { comment, product, user, user2 } from "../../mocks";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";

describe("Testing all service comment methods", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a comment", async () => {
    const createdUser = await new UsersServices().create(user);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
    );

    const result = await new CommentsServices().create(
      comment,
      createdUser.email,
      createdProduct.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("content");
    expect(result).toHaveProperty("created_at");
    expect(result).toHaveProperty("product");
  });

  test("Must be able to list all comments", async () => {
    const createdUser = await new UsersServices().create(user2);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
    );

    const result = await new CommentsServices().listCommentsProduct(
      createdProduct.id
    );

    expect(result).toHaveProperty("map");
  });
});
