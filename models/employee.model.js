module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employees", {
    employee_id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      // autoIncrement: true,
      allowNull: false,
    },
    employee_name: {
      type: Sequelize.STRING(),
      // unique: true,
      allowNull: false,
    },
    employee_position: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    employee_hire_date: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    employee_status: {
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

  return Employee;
};
