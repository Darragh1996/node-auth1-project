const router = require("express").Router();

router.get("/", (req, res) => {
  console.log("test debug");
  res.json({ api: "It's alive" });
});

module.exports = router;
