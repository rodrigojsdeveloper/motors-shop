import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";
import {
  login,
  login3,
  loginNotSeller,
  product,
  updatedProduct,
  user,
  user3,
  userNotSeller,
} from "../../mocks";

describe("Testing all product routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/users/signup").send(user);
    await request(app).post("/users/signup").send(user3);
    await request(app).post("/users/signup").send(userNotSeller);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a product", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("kilometers");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("ad_type");
    expect(response.body).toHaveProperty("vehicle_type");
    expect(response.body).toHaveProperty("cover_image");
    expect(response.body).toHaveProperty("gallery_image");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("is_published");
    expect(response.body).toHaveProperty("user");
  });

  test("Must be able to prevent creation of a tokenless product", async () => {
    const response = await request(app).post("/products").send(product);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent creation of a product if the user is not a seller", async () => {
    const requestLogin = await request(app)
      .post("/signin")
      .send(loginNotSeller);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(403);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list all products", async () => {
    const response = await request(app).get("/products");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to show a product using id", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app).get(
      `/products/${createdProduct.body.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("kilometers");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("ad_type");
    expect(response.body).toHaveProperty("vehicle_type");
    expect(response.body).toHaveProperty("cover_image");
    expect(response.body).toHaveProperty("gallery_image");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("is_published");
    expect(response.body).toHaveProperty("user");
  });

  test("Must be able to prevent displaying a product using invalid id", async () => {
    const response = await request(app).get(
      "/products/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to edit a product", async () => {
    const requestLogin = await request(app).post("/signin").send(login3);

    const token: string = requestLogin.body.token;

    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .patch(`/products/${createdProduct.body.id}`)
      .send(updatedProduct)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("title");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("year");
    expect(response.body).toHaveProperty("kilometers");
    expect(response.body).toHaveProperty("price");
    expect(response.body).toHaveProperty("ad_type");
    expect(response.body).toHaveProperty("vehicle_type");
    expect(response.body).toHaveProperty("cover_image");
    expect(response.body).toHaveProperty("gallery_image");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("is_published");
  });

  test("Must be able to prevent editing of a product without token", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .patch(`/products/${createdProduct.body.id}`)
      .send(updatedProduct);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent editing a product with invalid id", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .patch("/products/05a429c8-ca25-4007-8854-25c25f734167")
      .send(updatedProduct)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to delete a product", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app)
      .delete(`/products/${createdProduct.body.id}`)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(204);
  });

  test("Must be able to prevent deleting of a product without token", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const createdProduct = await request(app)
      .post("/products")
      .send(product)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app).delete(
      `/products/${createdProduct.body.id}`
    );

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent deleting a product with invalid id", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .delete("/products/05a429c8-ca25-4007-8854-25c25f734167")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
