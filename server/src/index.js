import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoute from "./routes/user.route.js";
import attendanceRoute from "./routes/attendance.route.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user',userRoute);
app.use('/attendance',attendanceRoute)
app.get('/',(req,res)=>{
    res.send("api is running...")
})

mongoose
  .connect('mongodb+srv://KSAnandh:KSAnandh1432@cluster0.7ocr1zk.mongodb.net/expressspark?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    app.listen(9800, () => {
      console.log("Server is running on PORT: 9800");
    });
  })
  .catch((err) => {
    console.log(err);
  });

