const express = require("express");
const {
  addTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);

router.post("/delete-transection", deleteTransection);

module.exports = router;
