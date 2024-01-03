module.exports = (db) => {
  db.roles.hasMany(db.permission_gruops);
  db.permission_gruops.belongsTo(db.roles);

  db.permissions.hasMany(db.permission_gruops);
  db.permission_gruops.belongsTo(db.permissions);

  db.permission_components.hasMany(db.permission_gruops);
  db.permission_gruops.belongsTo(db.permission_components);
};
