const express = require("express");
const router = express.Router();
const { registerUser, loginUser } = require("../controllers/authController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

// Public Routes
router.post("/register", registerUser);
router.post("/login", loginUser);

// Protected User Route
router.get("/profile", protect, (req, res) => {
  res.json({ user: req.user });
});

// Admin Only Route Example
router.get("/admin", protect, isAdmin, (req, res) => {
  res.json({ message: "Welcome, Admin!" });
});

module.exports = router;
