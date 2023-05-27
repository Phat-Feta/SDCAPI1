const { Pool, Client } = require('pg');
require('dotenv').config()

const pool = new Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'q_a_db',
    password: "password",
    port: 5432
});

pool.connect();

module.exports = pool;