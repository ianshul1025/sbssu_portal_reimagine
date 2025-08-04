const express = require("express");
const router = express.Router();
const { protect, isAdmin } = require("../middleware/authMiddleware");
const User = require("../models/userModel"); // Adjust path if needed

// Updated Student Dashboard Route
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select(
      "name email photo semester subjects balanceFee notices"
    );

    if (!user) {
      return res.status(404).json({ message: "Student not found" });
    }

    const dashboardData = {
      name: user.name,
      email: user.email,
      photo: user.photo || null,
      semester: user.semester || "Not set",
      subjects: user.subjects || [],
      balanceFee: user.balanceFee || 0,
      notices: user.notices || [
        { title: "Welcome Session", date: "2025-08-02" },
        { title: "Fee Deadline", date: "2025-08-10" },
      ],
    };

    res.json({
      message: "Student Dashboard Data",
      user: dashboardData,
    });
  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Admin Dashboard Route (unchanged)
router.get("/admin", protect, isAdmin, (req, res) => {
  res.json({
    message: "Welcome to the Admin Dashboard",
    user: req.user,
  });
});

module.exports = router;
