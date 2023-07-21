import { ProductsServices } from "../../services/products.service";
import { CommentsServices } from "../../services/comments.service";
import { UsersServices } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import {
  comment,
  product,
  updatedComment,
  user,
  user2,
  user3,
  user4,
} from "../../mocks";

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

  it("Must be able to create a comment", async () => {
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

  it("Must be able to show all reviews for a product using id", async () => {
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

  it("Must be able to edit a comment", async () => {
    const createdUser = await new UsersServices().create(user3);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
    );

    const createdComment = await new CommentsServices().create(
      comment,
      createdUser.email,
      createdProduct.id
    );

    const result = await new CommentsServices().update(
      updatedComment,
      createdComment.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("content");
    expect(result).toHaveProperty("created_at");
  });

  it("Must be able to delete a comment", async () => {
    const createdUser = await new UsersServices().create(user4);

    const createdProduct = await new ProductsServices().create(
      product,
      createdUser.email
    );

    const createdComment = await new CommentsServices().create(
      comment,
      createdUser.email,
      createdProduct.id
    );

    const result = await new CommentsServices().delete(createdComment.id);

    expect(result).toBeUndefined();
  });
});
