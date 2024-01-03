module.exports = (db) => {
  db.roles.hasMany(db.users);
  db.users.belongsTo(db.roles);

  db.roles.hasMany(db.employees);
  db.employees.belongsTo(db.roles);
};
