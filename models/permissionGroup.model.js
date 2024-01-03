module.exports = (sequelize, Sequelize) => {
  const PermissionGoup = sequelize.define("permission_groups", {
    permission_group_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    permission_group_name: {
      type: Sequelize.STRING(150),
      // unique: true,
      allowNull: false,
    }, 
    permission_group_description: {
      type: Sequelize.TEXT(),
      // unique: true,
      allowNull: false,
    },
    permission_group_status: {
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

  return PermissionGoup;
};
