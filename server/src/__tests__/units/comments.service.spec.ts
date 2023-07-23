import { comment, product, updatedComment, user } from "../../mocks";
import { ProductsServices } from "../../services/products.service";
import { CommentsServices } from "../../services/comments.service";
import { UsersServices } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";

describe("Testing all service comment methods", () => {
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

  it("Must be able to create a comment", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const result = await new CommentsServices().create(
      comment,
      createdUserEmail,
      createdProduct.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("content");
    expect(result).toHaveProperty("created_at");
    expect(result).toHaveProperty("product");
  });

  it("Must be able to show all reviews for a product using id", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const result = await new CommentsServices().listCommentsProduct(
      createdProduct.id
    );

    expect(result).toHaveProperty("map");
  });

  it("Must be able to show specific comment using id", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const createdComment = await new CommentsServices().create(
      comment,
      createdUserEmail,
      createdProduct.id
    );

    const result = await new CommentsServices().specific(createdComment.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("content");
    expect(result).toHaveProperty("created_at");
  });

  it("Must be able to edit a comment", async () => {
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const createdComment = await new CommentsServices().create(
      comment,
      createdUserEmail,
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
    const createdProduct = await new ProductsServices().create(
      product,
      createdUserEmail
    );

    const createdComment = await new CommentsServices().create(
      comment,
      createdUserEmail,
      createdProduct.id
    );

    const result = await new CommentsServices().delete(createdComment.id);

    expect(result).toBeUndefined();
  });
});
