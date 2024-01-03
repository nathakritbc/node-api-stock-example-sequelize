module.exports = (sequelize, Sequelize) => {
  const OrderDetail = sequelize.define("order_details", {
    order_detail_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    order_detail_quantity: {
      type: Sequelize.INTEGER(),
      // unique: true,
      allowNull: false,
    },
    order_detail_unit_price: {
      type: Sequelize.FLOAT(),
      // unique: true,
      allowNull: false,
      defaultValue: 0.0,
    },

    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  return OrderDetail;
};
