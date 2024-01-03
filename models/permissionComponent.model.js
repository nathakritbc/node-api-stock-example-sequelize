module.exports = (sequelize, Sequelize) => {
  const PermissionComponent = sequelize.define("permission_components", {
    permission_component_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    permission_component_name: {
      type: Sequelize.STRING(150),
      // unique: true,
      allowNull: false,
    }, 
    permission_component_description: {
      type: Sequelize.TEXT(),
      // unique: true,
      allowNull: false,
    },
    permission_component_status: {
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

  return PermissionComponent;
};
