const router = require("express").Router();
const tablesController = require("../../controllers/tablesController");

// Matches with "/api/tables"
router.route("/")
  .get(tablesController.findAll)
  .post(tablesController.create);

// Matches with "/api/tables/:id"
router
  .route("/:id")
  .get(tablesController.findById)
  .put(tablesController.update)
  .delete(tablesController.remove);

router
  .route("/closed/:id")
  .put(tablesController.updateAsClosed)
  
module.exports = router;
