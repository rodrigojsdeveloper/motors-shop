import { UsersServices } from "../../services/users.service";
import { AppDataSource } from "../../data-source";
import { updatedUser, user } from "../../mocks";
import { DataSource } from "typeorm";

describe("Testing all service user methods", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((error) =>
        console.error("Error during Data Source initialization", error)
      );
  });

  afterAll(async () => await connection.destroy());

  test("Must be able to create a user", async () => {
    const result = await new UsersServices().create(user);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("email");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("cellphone");
    expect(result).toHaveProperty("address");
    expect(result).toHaveProperty("cpf");
    expect(result).toHaveProperty("birthdate");
    expect(result).toHaveProperty("is_seller");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("date_joined");
    expect(result).toHaveProperty("updated_at");
    expect(result).toHaveProperty("products");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("bids");
    expect(result).toHaveProperty("auctions");
  });

  test("Must be able to list all users", async () => {
    const result = await new UsersServices().listAll();

    expect(result).toHaveProperty("map");
  });

  test("Must be able to show a user using email", async () => {
    const result = await new UsersServices().profile(user.email);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("email");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("cellphone");
    expect(result).toHaveProperty("address");
    expect(result).toHaveProperty("cpf");
    expect(result).toHaveProperty("birthdate");
    expect(result).toHaveProperty("is_seller");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("date_joined");
    expect(result).toHaveProperty("updated_at");
    expect(result).toHaveProperty("products");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("bids");
    expect(result).toHaveProperty("auctions");
  });

  test("Must be able to show a user using id", async () => {
    user.email = "johndoe2@org.com";

    const createdUser = await new UsersServices().create(user);

    const result = await new UsersServices().listProductsUser(createdUser.id);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("email");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("cellphone");
    expect(result).toHaveProperty("address");
    expect(result).toHaveProperty("cpf");
    expect(result).toHaveProperty("birthdate");
    expect(result).toHaveProperty("is_seller");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("date_joined");
    expect(result).toHaveProperty("updated_at");
    expect(result).toHaveProperty("products");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("bids");
    expect(result).toHaveProperty("auctions");
  });

  test("Must be able to edit a user", async () => {
    user.email = "johndoe3@org.com";

    const createdUser = await new UsersServices().create(user);

    const result = await new UsersServices().update(
      updatedUser,
      createdUser.id
    );

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("name");
    expect(result).toHaveProperty("email");
    expect(result).not.toHaveProperty("password");
    expect(result).toHaveProperty("cellphone");
    expect(result).toHaveProperty("address");
    expect(result).toHaveProperty("cpf");
    expect(result).toHaveProperty("birthdate");
    expect(result).toHaveProperty("is_seller");
    expect(result).toHaveProperty("description");
    expect(result).toHaveProperty("date_joined");
    expect(result).toHaveProperty("updated_at");
    expect(result).toHaveProperty("products");
    expect(result).toHaveProperty("comments");
    expect(result).toHaveProperty("bids");
    expect(result).toHaveProperty("auctions");
  });
});