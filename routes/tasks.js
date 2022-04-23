const express = require("express");
const router = express.Router();

// import functions
const {
  getAllTasks,
  updateTask,
  deleteTask,
  getTask,
  createTask,
} = require("../controllers/functions");
// routes
router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

// export
module.exports = router;
