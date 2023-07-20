import { auction, login, user } from "../../mocks";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all auction routes", () => {
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

  test("Must be able to list all auctions", async () => {
    const response = await request(app).get("/auctions");

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to show a auction using id", async () => {
    const requestLogin = await request(app).post("/signin").send(login);

    const token: string = requestLogin.body.token;

    const createdProduct = await request(app)
      .post("/products")
      .send(auction)
      .set("Authorization", `Bearer ${token}`);

    const response = await request(app).get(
      `/auctions/${createdProduct.body.id}`
    );

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("product");
    expect(response.body).toHaveProperty("bids");
    expect(response.body).toHaveProperty("time_limit");
    expect(response.body).toHaveProperty("user");
  });

  test("Must be able to prevent displaying a auction using invalid id", async () => {
    const response = await request(app).get(
      "/auctions/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
