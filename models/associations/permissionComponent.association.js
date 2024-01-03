module.exports = (db) => {
  db.permissions.hasMany(db.permission_components);
  db.permission_components.belongsTo(db.permissions);
};
