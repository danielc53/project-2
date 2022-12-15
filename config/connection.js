const Sequelize = require('sequelize');
require('dotenv').config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME,
//   process.env.DB_USER,
//   process.env.DB_PASSWORD,
//   {
//     host: process.env.DB_HOST,
//     dialect: 'mysql',
//     port: 3306,
//   }
// );

const sequelize = new Sequelize(
  process.env.CLEARDB_DATABASE_URL
)

module.exports = sequelize;
