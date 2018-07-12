const router = require("express").Router();
const customersController = require("../../controllers/customersController");

// Matches with "/api/customers"
router.route("/")
  .get(customersController.findAll)
  .post(customersController.create);

// Matches with "/api/customers/:id"
router
  .route("/:id")
  .get(customersController.findById)
  .put(customersController.update)
  .delete(customersController.remove);

module.exports = router;
