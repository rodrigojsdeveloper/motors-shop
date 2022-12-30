import { DataSource } from "typeorm";

require("dotenv").config();

const port = process.env.PG_PORT as number | undefined;

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.PG_HOST,
  port: port,
  username: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
  logging: true,
  synchronize: true,
  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
});

export { AppDataSource };
