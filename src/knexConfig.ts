import { Knex, knex } from "knex";

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: "127.0.0.1",
    port: 5432,
    user: "postgres",
    database: "projectideas",
  },
  //asyncStackTraces: true,
  //debug: true,
};

export default config;
