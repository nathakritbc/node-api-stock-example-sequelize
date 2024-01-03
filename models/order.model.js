module.exports = (sequelize, Sequelize) => {
  const Order = sequelize.define("orders", {
    order_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    order_date: {
      type: Sequelize.DATE(),
      // unique: true,
      allowNull: false,
    },
    order_total_amount: {
      type: Sequelize.INTEGER(),
      // unique: true,
      allowNull: false,
    },
    order_payment_status: {
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

  return Order;
};
