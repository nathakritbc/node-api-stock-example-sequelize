module.exports = (db) => {
  db.product_types.hasMany(db.products);
  db.products.belongsTo(db.product_types);

  db.roles.hasMany(db.products);
  db.products.belongsTo(db.roles);
};
