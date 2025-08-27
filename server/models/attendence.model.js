import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      ref: "users",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    checkIn: Date,
    checkOut: Date,
    status: {
      type: String,
      enum: ["Present", "Absent"],
      default: "Absent",
    },
    location: String,
  },
  { timestamps: true }
);

const Attendance = mongoose.model("attendance", attendanceSchema);
export default Attendance;
