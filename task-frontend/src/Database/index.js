import { Sequelize } from "sequelize";

// use sequenlize
const sequelize = new Sequelize('test_db', 'root', '123456', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Set true if you want to see SQL query logs
});

// const sequelize = new Sequelize('postgres://root:123456@localhost:5432/test_db') // Example for postgres

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}