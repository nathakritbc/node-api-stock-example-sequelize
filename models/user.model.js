module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    u_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      field: "u_id",
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    u_email: {
      type: Sequelize.STRING(50),
      isEmail: true,
      unique: true,
      allowNull: false,
    },
    u_password: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    u_role: {
      type: Sequelize.ENUM("ADMIN", "USER"),
      defaultValue: "USER",
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
