module.exports = (db) => {
  db.customers.hasMany(db.orders);
  db.orders.belongsTo(db.customers);

  db.orders.hasMany(db.order_details);
  db.order_details.belongsTo(db.orders);
};
