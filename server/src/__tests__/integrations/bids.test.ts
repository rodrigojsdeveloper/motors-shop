import { auction, bid, login, user } from "../../mocks";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import { app } from "../../app";
import request from "supertest";

describe("Testing all bid routes", () => {
  let connection: DataSource;
  let token: string;
  let createdAuctionId: string;

  async function loginUser() {
    const requestLogin = await request(app).post("/signin").send(login);
    return requestLogin.body.token;
  }

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await request(app).post("/users/signup").send(user);
    token = await loginUser();

    const createdAuctionResponse = await request(app)
      .post("/products")
      .send(auction)
      .set("Authorization", `Bearer ${token}`);
    createdAuctionId = createdAuctionResponse.body.id;
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a bid", async () => {
    const response = await request(app)
      .post(`/bids/${createdAuctionId}`)
      .send(bid)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty("id");
    expect(response.body).toHaveProperty("value");
    expect(response.body).toHaveProperty("auction");
    expect(response.body).toHaveProperty("created_at");
  });

  test("Must be able to prevent creating of a bid without token", async () => {
    const response = await request(app)
      .post(`/bids/${createdAuctionId}`)
      .send(bid);

    expect(response.status).toBe(401);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to prevent creating a bid with invalid id", async () => {
    const response = await request(app)
      .post("/bids/05a429c8-ca25-4007-8854-25c25f734167")
      .send(bid)
      .set("Authorization", `Bearer ${token}`);

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });

  test("Must be able to show all bids for a product using id", async () => {
    const response = await request(app).get(`/bids/${createdAuctionId}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("map");
  });

  test("Must be able to stop showing all bids for a product using invalid id", async () => {
    const response = await request(app).get(
      "/bids/05a429c8-ca25-4007-8854-25c25f734167"
    );

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty("message");
  });
});
