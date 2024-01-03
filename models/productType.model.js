module.exports = (sequelize, Sequelize) => {
  const ProductType = sequelize.define("product_types", {
    product_types_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    product_types_description: {
      type: Sequelize.STRING(250),
      // unique: true,
      allowNull: false,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  return ProductType;
};
