const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 process.env.DB_NAME,
 process.env.DB_USER_NAME,
 process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
console.log(process.env.DB_NAME)
sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
 }).catch((error) => {
    console.error('Unable to connect to the database: ', error);
 });
 sequelize.sync().then(() => {
  console.log('Table Auto Sync');
}).catch((error) => {
  console.error('Unable to create table : ', error);
});
 module.exports = sequelize