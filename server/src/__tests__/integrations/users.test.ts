import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import {
  login,
  login3,
  updatedUser,
  user,
  user2,
  user3,
  user4,
} from "../../mocks";
import request from "supertest";
import { app } from "../../app";

describe("Testing all user routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a user", async () => {
    const response = await request(app).post("/users/signup").send(user);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("cellphone");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("birthdate");
    expect(response.body).toHaveProperty("is_seller");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("date_joined");
    expect(response.body).toHaveProperty("updated_at");
    expect(response.body).toHaveProperty("products");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("bids");
    expect(response.body).toHaveProperty("auctions");
  });

  test("Must be able to prevent creation of a user with email that already exists", async () => {
    const response = await request(app).post("/users/signup").send(user);

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to list all users", async () => {
    const response = await request(app).get("/users");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to show a user using email", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .get("/users/profile")
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("cellphone");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("birthdate");
    expect(response.body).toHaveProperty("is_seller");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("date_joined");
    expect(response.body).toHaveProperty("updated_at");
    expect(response.body).toHaveProperty("products");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("bids");
    expect(response.body).toHaveProperty("auctions");
  });

  test("Must be able to prevent showing a user using tokenless email", async () => {
    const response = await request(app).get("/users/profile");

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to show a user using id", async () => {
    const createdUser = await request(app).post("/users/signup").send(user2);

    const response = await request(app).get(
      `/users/products/${createdUser.body.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("cellphone");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("birthdate");
    expect(response.body).toHaveProperty("is_seller");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("date_joined");
    expect(response.body).toHaveProperty("updated_at");
    expect(response.body).toHaveProperty("products");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("bids");
    expect(response.body).toHaveProperty("auctions");
  });

  test("Must be able to prevent displaying a user using invalid id", async () => {
    const response = await request(app).get(
      "/users/products/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to edit a user", async () => {
    const createdUser = await request(app).post("/users/signup").send(user3);

    const requestLogin = await request(app).post("/signin").send(login3);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .patch(`/users/${createdUser.body.id}`)
      .send(updatedUser)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("name");
    expect(response.body).toHaveProperty("email");
    expect(response.body).not.toHaveProperty("password");
    expect(response.body).toHaveProperty("cellphone");
    expect(response.body).toHaveProperty("address");
    expect(response.body).toHaveProperty("cpf");
    expect(response.body).toHaveProperty("birthdate");
    expect(response.body).toHaveProperty("is_seller");
    expect(response.body).toHaveProperty("description");
    expect(response.body).toHaveProperty("date_joined");
    expect(response.body).toHaveProperty("updated_at");
    expect(response.body).toHaveProperty("products");
    expect(response.body).toHaveProperty("comments");
    expect(response.body).toHaveProperty("bids");
    expect(response.body).toHaveProperty("auctions");
  });

  test("Must be able to prevent editing of a user without token", async () => {
    const createdUser = await request(app).post("/users/signup").send(user4);

    const response = await request(app)
      .patch(`/users/${createdUser.body.id}`)
      .send(updatedUser);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent editing a user with invalid id", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const response = await request(app)
      .patch("/users/05a429c8-ca25-4007-8854-25c25f734167")
      .send(updatedUser)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
