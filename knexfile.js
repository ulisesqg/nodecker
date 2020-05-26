'use strict';

const path = require('path');

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      host: 'db',
      port: 5432,
      database: 'nodecker',
      user: 'root',
      password: 'root',
      charset: 'utf8',
    },
    migrations: {
      directory: path.join(__dirname, 'src', 'db', 'migrations'),
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: path.join(__dirname, 'src', 'db', 'seeds'),
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
