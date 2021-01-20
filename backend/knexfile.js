const path  = require("path")
module.exports = {
  development: {
    client: "sqlite3",
    connection:{
      filename: path.join(__dirname + "/src/database/db.sqlite")
    },
    // connection: {
    //   database: "db_api_users_jwt",
    //   user: "root",
    //   password: "",
    //   host:"127.0.0.1",

    // },
    migrations: {

      directory: path.join(__dirname + "/src/database/migrations")
    },
    useNullAsDefault: true
  },

  staging: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  },

  production: {
    client: "postgresql",
    connection: {
      database: "my_db",
      user: "username",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }
}
