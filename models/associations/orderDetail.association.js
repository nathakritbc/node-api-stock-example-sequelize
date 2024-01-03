module.exports = (db) => {
  db.products.hasMany(db.order_details);
  db.order_details.belongsTo(db.products);
};
