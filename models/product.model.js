module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("products", {
    product_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    product_name: {
      type: Sequelize.STRING(50),
      // unique: true,
      allowNull: false,
    },
    product_title: {
      type: Sequelize.STRING(200),
      // unique: true,
      allowNull: false,
    },
    product_description: {
      type: Sequelize.TEXT,
      // unique: true,
      allowNull: false,
    },
    product_detail: {
      type: Sequelize.TEXT,
      // unique: true,
      allowNull: false,
    },
    product_price: {
      type: Sequelize.FLOAT,
      allowNull: true,
      defaultValue: 0.0,
    },
    // product_amount: {
    //   type: Sequelize.INTEGER,
    //   allowNull: true,
    // },
    product_image: {
      type: Sequelize.TEXT(),
      unique: true,
      allowNull: false,
    },
    product_thumnail: {
      type: Sequelize.TEXT(),
      unique: true,
      allowNull: false,
    },
    product_stock_quantity: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    product_status: {
      type: Sequelize.BOOLEAN(),
      // unique: true,
      allowNull: false,
      defaultValue: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  return Product;
};
