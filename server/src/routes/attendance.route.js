import express from "express";
import Attendance from "../models/attendence.model.js";
import User from "../models/user.model.js";
import cron from "node-cron";

const attendanceRoute = express.Router();

// ✅ Helper function to get current India Date (IST)
function getIndiaDate(d = new Date()) {
  return new Date(d.toLocaleString("en-US", { timeZone: "Asia/Kolkata" }));
}

// ✅ Helper to format date only in IST (dd/mm/yyyy)
function formatDateOnlyIST(date) {
  if (!date) return null;
  return new Date(date).toLocaleDateString("en-GB", {
    timeZone: "Asia/Kolkata",
  });
}

// ✅ Helper to format time only in IST (hh:mm:ss)
function formatTimeOnlyIST(date) {
  if (!date) return null;
  return new Date(date).toLocaleTimeString("en-GB", {
    timeZone: "Asia/Kolkata",
    hour12: false,
  });
}

// CRON: Mark absent users if no check-in by afternoon
cron.schedule("30 23 * * 1-6", async () => {
  try {
    const startOfDay = getIndiaDate();
    startOfDay.setHours(0, 0, 0, 0);

    const now = getIndiaDate();

    const users = await User.find();

    for (const user of users) {
      const record = await Attendance.findOne({
        user: user._id,
        date: { $gte: startOfDay, $lte: now },
      });

      if (!record) {
        await Attendance.create({
          user: user._id,
          date: startOfDay,
          status: "Absent",
        });
      }
    }

    console.log("Absent records inserted for missing users (IST)");
  } catch (error) {
    console.error("Cron Job Error:", error.message);
  }
});

// ✅ Check-in
attendanceRoute.post("/checkin", async (req, res) => {
  try {
    const { location, userId } = req.body;
    const user = await User.findById(userId);
    if (!user) return res.status(200).json({ message: "User not found" });

    const today = getIndiaDate();
    today.setHours(0, 0, 0, 0);

    let attendance = await Attendance.findOne({ user: userId, date: today });

    if (attendance) {
      return res.status(200).json({ message: "Already checked in today" });
    }

    attendance = new Attendance({
      user: userId,
      date: today,
      checkIn: getIndiaDate(),
      location,
    });

    await attendance.save();
    return res.status(200).json({ message: "Check-in Successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Check-out
attendanceRoute.post("/checkout", async (req, res) => {
  try {
    const { userId } = req.body;

    const today = getIndiaDate();
    today.setHours(0, 0, 0, 0);

    let attendance = await Attendance.findOne({ user: userId, date: today });

    if (!attendance) {
      return res.status(404).json({ message: "Check-In is Mandatory" });
    }
    if (attendance.checkOut) {
      return res.status(200).json({ message: "Already checked-out today" });
    }

    attendance.checkOut = getIndiaDate();
    attendance.status = "Present";
    await attendance.save();

    res.json({ message: "check-out marked successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Report per user per month
attendanceRoute.get("/report/:userId/:year/:month", async (req, res) => {
  try {
    const { userId, year, month } = req.params;

    const startDate = getIndiaDate(new Date(year, month - 1, 1));
    startDate.setHours(0, 0, 0, 0);

    const endDate = getIndiaDate(new Date(year, month, 0, 23, 59, 59));

    const records = await Attendance.find({
      user: userId,
      date: { $gte: startDate, $lte: endDate },
    }).sort({ date: 1 });

    const dailyRecords = records.map((r) => ({
      date: formatDateOnlyIST(r.date),
      checkIn: formatTimeOnlyIST(r.checkIn),
      checkOut: formatTimeOnlyIST(r.checkOut),
      status: r.status,
      location: r.location || null,
    }));

    const report = {
      month: `${year}-${month.padStart ? month.padStart(2, "0") : month}`,
      totalDays: records.length,
      present: records.filter((r) => r.status === "Present").length,
      absent: records.filter((r) => r.status === "Absent").length,
      dailyRecords,
    };

    res.json(report);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ✅ Update/insert attendance manually (manager override)
attendanceRoute.post("/update-attendance", async (req, res) => {
  try {
    const { userId, date, checkIn, checkOut, status, location } = req.body;

    if (!userId || !date) {
      return res.status(400).json({ message: "userId and date are required" });
    }

    const targetDate = getIndiaDate(new Date(date));
    targetDate.setHours(0, 0, 0, 0);

    const updateData = {};
    if (checkIn) updateData.checkIn = getIndiaDate(new Date(checkIn));
    if (checkOut) updateData.checkOut = getIndiaDate(new Date(checkOut));
    if (status) updateData.status = status;
    if (location) updateData.location = location;

    const attendance = await Attendance.findOneAndUpdate(
      { user: userId, date: targetDate },
      { $set: updateData, $setOnInsert: { user: userId, date: targetDate } },
      { new: true, upsert: true }
    );

    res.status(200).json({
      message: "Attendance updated successfully",
      attendance: {
        user: attendance.user,
        date: formatDateOnlyIST(attendance.date),
        checkIn: formatTimeOnlyIST(attendance.checkIn),
        checkOut: formatTimeOnlyIST(attendance.checkOut),
        status: attendance.status,
        location: attendance.location,
      },
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// ✅ Mark holiday (or update attendance for all users)

export default attendanceRoute;
