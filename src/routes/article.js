const router = require("express").Router();
const ctrl = require("../controllers/article");

// Retrieve all Articles
router.get("/", ctrl.findAll);

// Retrieve a single Article with id
router.get("/:id", ctrl.findOne);

// Create a new Article
router.post("/", ctrl.create);

// Update a Article with id
router.put("/:id", ctrl.update);

// Delete a Article with id
router.delete("/:id", ctrl.deleteOne);

// Delete all Article
router.delete("/", ctrl.deleteAll);

module.exports = router;
