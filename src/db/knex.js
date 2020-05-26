'use strict';

const knex = require('knex');

const knextConfig = require('../../knexfile');

module.exports = knex(knextConfig.development);
