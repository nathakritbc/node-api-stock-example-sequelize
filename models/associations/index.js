const roleAssociation = require("./role.association");
const permissionComponentAssociation = require("./permissionComponent.association");
const permissionGroupAssociation = require("./permissionGroup.association");
const orderDetailAssociation = require("./orderDetail.association");
const paymentAssociation = require("./payment.association");
const productAssociation = require("./products.association");
const ordersAssociation = require("./order.association");

module.exports = (db) => {
  productAssociation(db);
  orderDetailAssociation(db);
  ordersAssociation(db);
  roleAssociation(db);
  permissionComponentAssociation(db);
  permissionGroupAssociation(db);
  paymentAssociation(db);
};
