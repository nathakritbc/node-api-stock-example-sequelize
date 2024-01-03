module.exports = (sequelize, Sequelize) => {
  const Payment = sequelize.define("payments", {
    payment_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    payment_amount_paid: {
      type: Sequelize.FLOAT(),
      // unique: true,
      allowNull: false,
      defaultValue: 0.0,
    },
    payment_date: {
      type: Sequelize.DATE,
    },
    payment_method: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    },
  });

  return Payment;
};
