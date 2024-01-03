module.exports = (sequelize, Sequelize) => {
  const Permission = sequelize.define("permissions", {
    permission_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    permission_name: {
      type: Sequelize.STRING(150),
      // unique: true,
      allowNull: false,
    },
    permission_modules: {
      type: Sequelize.TEXT(),
      // unique: true,
      // allowNull: false,
    },
    permission_description: {
      type: Sequelize.TEXT(),
      // unique: true,
      allowNull: false,
    },
    permission_status: {
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

  return Permission;
};
