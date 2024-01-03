const dbConfig = require("../configs/db.config");

const associations = require("./associations");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
  operatorsAliases: false,
  dialectOptions: {
    // ssl: {
    // require: false,
    // rejectUnauthorized: false,
    // },
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

// const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
//   host: dbConfig.HOST,
//   dialect: dbConfig.dialect,
//   operatorsAliases: false,

//   pool: {
//     max: dbConfig.pool.max,
//     min: dbConfig.pool.min,
//     acquire: dbConfig.pool.acquire,
//     idle: dbConfig.pool.idle,
//   },
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// check the databse connection
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

db.product_types = require("./productType.model")(sequelize, Sequelize);
db.products = require("./product.model")(sequelize, Sequelize);
db.orders = require("./order.model")(sequelize, Sequelize);
db.order_details = require("./orderDetail.model")(sequelize, Sequelize);
db.roles = require("./role.model")(sequelize, Sequelize);
db.permissions = require("./permission.model")(sequelize, Sequelize);
db.permission_gruops = require("./permissionGroup.model")(sequelize, Sequelize);
db.permission_components = require("./permissionComponent.model")(
  sequelize,
  Sequelize
);
db.payments = require("./payment.model")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.customers = require("./customer.model")(sequelize, Sequelize);
db.employees = require("./employee.model")(sequelize, Sequelize);

// setting table relationship
associations(db);
// db.product_types.hasMany(db.products);
// db.products.belongsTo(db.product_types);

module.exports = db;
