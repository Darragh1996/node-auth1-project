const router = require("express").Router();

const authRouter = require("../routers/auth-router");

const userRouter = require("../routers/users-router");

router.use("/auth", authRouter);
router.use("/users", userRouter);

router.get("/", (req, res) => {
  console.log("test debug");
  res.json({ api: "It's alive" });
});

module.exports = router;
