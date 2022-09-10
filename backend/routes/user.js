const express = require("express");
const router = express.Router();

const userCtrl = require("../controllers/user");
const userRoutes = require("./routes/user");
router.post("/src/app/auth/signup", userCtrl.signup);
router.post("/", userCtrl.login);
app.use("/api/auth", userRoutes);
module.exports = router;
