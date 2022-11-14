const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
      database: process.env.DATABASE_NAME,
      host: process.env.DATABASE_HOST,
      password: process.env.DATABASE_PASSWORD,
      email: process.env.DATABASE_EMAIL,
      user: process.env.DATABASE_USER,
      port: process.env.DATABASE_PORT,
    });

module.exports = pool;