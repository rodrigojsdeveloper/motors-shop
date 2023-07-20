import { comment, login, product, user } from "../../mocks";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

async function loginUser() {
  const requestLogin = await request(app).post("/signin").send(login);
  return requestLogin.body.token;
}

describe("Testing all comment routes", () => {
  let connection: DataSource;
  let token: string;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/users/signup").send(user);

    token = await loginUser();
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a comment", async () => {
    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .post(`/comments/${createdProduct.body.id}`)
      .send(comment)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("content");
    expect(response.body).toHaveProperty("created_at");
    expect(response.body).toHaveProperty("product");
  });

  test("Must be able to prevent creating of a comment without token", async () => {
    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .post(`/comments/${createdProduct.body.id}`)
      .send(comment);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent creating a comment with invalid id", async () => {
    const response = await request(app)
      .post("/comments/05a429c8-ca25-4007-8854-25c25f734167")
      .send(comment)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to show all reviews for a product using id", async () => {
    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app).get(
      `/comments/${createdProduct.body.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to stop showing all reviews for a product using invalid id", async () => {
    const response = await request(app).get(
      "/comments/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
