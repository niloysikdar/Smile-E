const express = require("express");
const router = express.Router();

const getUsers = require("../controllers/getUsers");

router.get("/", getUsers);

module.exports = router;
