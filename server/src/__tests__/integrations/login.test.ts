import { AppDataSource } from "../../data-source";
import { login, login3, user } from "../../mocks";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all login routes", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/users/signup").send(user);
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to login", async () => {
    const response = await request(app).post("/signin").send(login);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("token");
  });

  test("Must prevent login with invalid credentials", async () => {
    const response = await request(app).post("/signin").send(login3);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });
});
