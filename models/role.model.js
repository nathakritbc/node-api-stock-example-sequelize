module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    role_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    role_name: {
      type: Sequelize.STRING(150),
      // unique: true,
      allowNull: false,
    },
    role_description: {
      type: Sequelize.TEXT(),
      // unique: true,
      allowNull: false,
    },
    role_status: {
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

  return Role;
};
