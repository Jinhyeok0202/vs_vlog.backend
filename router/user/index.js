const { Router } = require("express");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("user 다이아아아아");
});

module.exports = router;
