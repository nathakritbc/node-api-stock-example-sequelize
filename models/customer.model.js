module.exports = (sequelize, Sequelize) => {
  const Customer = sequelize.define("customers", {
    customer_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    customer_name: {
      type: Sequelize.STRING(200),
      // unique: true,
      allowNull: false,
    },
    customer_email: {
      type: Sequelize.STRING(100),
      // unique: true,
      allowNull: false,
    },
    customer_phone_number: {
      type: Sequelize.STRING(50),
      // unique: true,
      allowNull: false,
    },
    customer_address: {
      type: Sequelize.TEXT(),
      // unique: true,
      allowNull: false,
    },
    customer_status: {
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

  return Customer;
};
