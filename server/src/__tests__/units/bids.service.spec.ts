import { ProductsServices } from "../../services/products.service";
import { UsersServices } from "../../services/users.service";
import { BidsServices } from "../../services/bids.service";
import { AppDataSource } from "../../data-source";
import { DataSource } from "typeorm";
import {
  auction,
  bid,
  updatedBid,
  user,
  user2,
  user3,
  user4,
} from "../../mocks";

describe("Testing all service bid methods", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to create a bid", async () => {
    const createdUser = await new UsersServices().create(user);

    const createdAuction = await new ProductsServices().create(
      auction,
      createdUser.email
    );

    const result = await new BidsServices().create(
      bid,
      createdUser.email,
      createdAuction.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("value");
    expect(result).toHaveProperty("auction");
    expect(result).toHaveProperty("created_at");
  });

  it("Must be able to show all bids for a auction using id", async () => {
    const createdUser = await new UsersServices().create(user2);

    const createdAuction = await new ProductsServices().create(
      auction,
      createdUser.email
    );

    const result = await new BidsServices().listBidsAuction(createdAuction.id);

    expect(result).toHaveProperty("map");
  });

  it("Must be able to edit a bid", async () => {
    const createdUser = await new UsersServices().create(user3);

    const createdAuction = await new ProductsServices().create(
      auction,
      createdUser.email
    );

    const createdBid = await new BidsServices().create(
      bid,
      createdUser.email,
      createdAuction.id
    );

    const result = await new BidsServices().update(updatedBid, createdBid.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("value");
    expect(result).toHaveProperty("created_at");
  });

  it("Must be able to delete a bid", async () => {
    const createdUser = await new UsersServices().create(user4);

    const createdAuction = await new ProductsServices().create(
      auction,
      createdUser.email
    );

    const createdBid = await new BidsServices().create(
      bid,
      createdUser.email,
      createdAuction.id
    );

    const result = await new BidsServices().delete(createdBid.id);

    expect(result).toBeUndefined();
  });
});
