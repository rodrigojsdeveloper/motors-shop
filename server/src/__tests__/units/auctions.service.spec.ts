import { ProductsServices } from "../../services/products.service";
import { AuctionsServices } from "../../services/auctions.service";
import { UsersServices } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { auction, user } from "../../mocks";
import { DataSource } from "typeorm";

describe("Testing all service auction methods", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to list all auctions", async () => {
    const result = await new AuctionsServices().listAll();

    expect(result).toHaveProperty("map");
  });

  it("Must be able to show specific auction using id", async () => {
    const createdUser = await new UsersServices().create(user);

    const createdAuction = await new ProductsServices().create(
      auction,
      createdUser.email
    );

    const result = await new AuctionsServices().specific(createdAuction.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("product");
    expect(result).toHaveProperty("bids");
    expect(result).toHaveProperty("time_limit");
    expect(result).toHaveProperty("user");
  });
});
