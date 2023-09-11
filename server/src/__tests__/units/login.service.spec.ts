import { UsersService } from "../../services/users.service";
import { LoginService } from "../../services/login.service";
import { AppDataSource } from "../../data-source";
import { login, user } from "../../mocks";
import { DataSource } from "typeorm";

describe("Testing all service login methods", () => {
  let connection: DataSource;

  beforeAll(async () => {
    await AppDataSource.initialize()
      .then((res) => (connection = res))
      .catch((err) =>
        console.error("Error during DataSource initialization", err)
      );

    await new UsersService().create(user);
  });

  afterAll(async () => await connection.destroy());

  it("Must be able to login", async () => {
    const result = await new LoginService().login(login);

    expect(result).toHaveProperty("token");
  });
});
