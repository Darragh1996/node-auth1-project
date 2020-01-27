const router = require("express").Router();

const authRouter = require("../routers/auth-router");

router.use("/auth", authRouter);

router.get("/", (req, res) => {
  console.log("test debug");
  res.json({ api: "It's alive" });
});

module.exports = router;
