module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    user_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      // field: "user_id",
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    user_email: {
      type: Sequelize.STRING(50),
      isEmail: true,
      unique: true,
      allowNull: false,
    },
    user_password: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    user_status: {
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

  return User;
};
