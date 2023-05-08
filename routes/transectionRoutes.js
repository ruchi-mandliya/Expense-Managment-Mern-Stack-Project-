const express = require("express");
const {
  addTransection,
  getAllTransection,

  deleteTransection,
} = require("../controllers/transectionCtrl");

//router object
const router = express.Router();

//routes
//add transection POST MEthod
router.post("/add-transection", addTransection);

//Delete transection POST MEthod
router.post("/delete-transection", deleteTransection);

//get transections
router.post("/get-transection", getAllTransection);

module.exports = router;
