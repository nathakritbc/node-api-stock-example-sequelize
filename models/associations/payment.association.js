module.exports = (db) => {
  db.orders.hasMany(db.payments);
  db.payments.belongsTo(db.orders);
};
