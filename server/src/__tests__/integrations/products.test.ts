import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";
import {
  login,
  loginNotSeller,
  product,
  updatedProduct,
  user,
  userNotSeller,
} from "../../mocks";

describe("Testing all product routes", () => {
  let connection: DataSource;
  let token: string;
  let createdProductId: string;

  async function loginUser() {
    const requestLogin = await request(app).post("/api/signin").send(login);
    return requestLogin.body.token;
  }

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/api/users/signup").send(user);
    await request(app).post("/api/users/signup").send(userNotSeller);
    token = await loginUser();

    const createdProductResponse = await request(app)
      .post("/api/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);
    createdProductId = createdProductResponse.body.id;
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a product", async () => {
    const response = await request(app)
      .post("/api/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("brand");
    expect(response.body).toHaveProperty("model");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("fuel");
    expect(response.body).toHaveProperty("kilometers");
    expect(response.body).toHaveProperty("color");
    expect(response.body).toHaveProperty("fipe");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("is_published");
    expect(response.body).toHaveProperty("cover_image");
    expect(response.body).toHaveProperty("primary_image");
    expect(response.body).toHaveProperty("second_image");
    expect(response.body).toHaveProperty("comments");
  });

  test("Must be able to prevent creation of a tokenless product", async () => {
    const response = await request(app).post("/api/products").send(product);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent creation of a product if the user is not a seller", async () => {
    const requestLogin = await request(app)
      .post("/api/signin")
      .send(loginNotSeller);

    const tokenNotSeller: string = requestLogin.body.token;

    const response = await request(app)
      .post("/api/products")
      .send(product)
      .set("Authorization", `Bearer ${tokenNotSeller}`);

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list all products", async () => {
    const response = await request(app).get("/api/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to show a product using id", async () => {
    const response = await request(app).get(
      `/api/products/${createdProductId}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("brand");
    expect(response.body).toHaveProperty("model");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("fuel");
    expect(response.body).toHaveProperty("kilometers");
    expect(response.body).toHaveProperty("color");
    expect(response.body).toHaveProperty("fipe");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("is_published");
    expect(response.body).toHaveProperty("cover_image");
    expect(response.body).toHaveProperty("primary_image");
    expect(response.body).toHaveProperty("second_image");
    expect(response.body).toHaveProperty("comments");
  });

  test("Must be able to prevent displaying a product using invalid id", async () => {
    const response = await request(app).get(
      "/api/products/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to edit a product", async () => {
    const response = await request(app)
      .patch(`/api/products/${createdProductId}`)
      .send(updatedProduct)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("brand");
    expect(response.body).toHaveProperty("model");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("fuel");
    expect(response.body).toHaveProperty("kilometers");
    expect(response.body).toHaveProperty("color");
    expect(response.body).toHaveProperty("fipe");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("is_published");
    expect(response.body).toHaveProperty("cover_image");
    expect(response.body).toHaveProperty("primary_image");
    expect(response.body).toHaveProperty("second_image");
    expect(response.body).toHaveProperty("comments");
  });

  test("Must be able to prevent editing of a product without token", async () => {
    const response = await request(app)
      .patch(`/api/products/${createdProductId}`)
      .send(updatedProduct);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent editing a product with invalid id", async () => {
    const response = await request(app)
      .patch("/api/products/05a429c8-ca25-4007-8854-25c25f734167")
      .send(updatedProduct)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to deactive a product", async () => {
    const response = await request(app)
      .delete(`/api/products/${createdProductId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(204);
  });

  test("Must be able to prevent disabling of a product without token", async () => {
    const response = await request(app).delete(
      `/api/products/${createdProductId}`
    );

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent disabling a product with invalid id", async () => {
    const response = await request(app)
      .delete("/api/products/05a429c8-ca25-4007-8854-25c25f734167")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to active a product", async () => {
    const response = await request(app)
      .post(`/api/products/${createdProductId}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(204);
  });

  test("Must be able to prevent activating of a product without token", async () => {
    const response = await request(app).post(
      `/api/products/${createdProductId}`
    );

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent activating a product with invalid id", async () => {
    const response = await request(app)
      .post("/api/products/05a429c8-ca25-4007-8854-25c25f734167")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
