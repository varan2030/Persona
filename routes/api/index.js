const router = require("express").Router();
const awsRoutes = require("./aws");
const customerRoutes = require("./customers");
const employeeRoutes = require("./employees");
const menuRoutes = require("./menu");
const orderRoutes = require("./order");
const tableRoutes = require("./table");

// AWS routes
router.use("/aws", awsRoutes);
// customer routes
router.use("/customers", customerRoutes);
// employee routes
router.use("/employees", employeeRoutes);
//Menu routes
router.use("/menu", menuRoutes);
//Order routes
router.use("/order", orderRoutes);
//Table routes
router.use("/table", tableRoutes);
module.exports = router;
