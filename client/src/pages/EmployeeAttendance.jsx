import { useState, useEffect } from "react";
import profile from "../assets/images/profile.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const EmployeeAttendance = () => {
  const [location, setLocation] = useState(null);
  const [user, setUser] = useState({});
  const [userId, setUserId] = useState();
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  const navigate = useNavigate();

  const getUserInfo = async function () {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) throw new Error("User ID not found in localStorage");
      const response = await axios.get(
        `http://localhost:9800/user/users/${userId}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Failed to fetch user info:", error.message);
      alert("User Info Invalid");
      localStorage.removeItem("userId");
      navigate("/EmployeeLogin");
      return null;
    }
  };

  const handleCheckIn = async (userId, location) => {
    if (location === "Outside allowed area") {
      return alert("Your are in out of the School");
    }
    try {
      const response = await axios.post(
        "http://localhost:9800/attendance/checkin",
        {
          userId,
          location,
        }
      );

      alert(response.data.message);
      console.log("Check-In Response:", response.data);
      return response.data;
    } catch (error) {
      alert(error.response?.data?.message || "Check-in failed");
      console.error("Check-In Error:", error);
    }
  };

  const handleCheckout = async (userId) => {
    try {
      const response = await axios.post(
        "http://localhost:9800/attendance/checkout",
        {
          userId: userId,
        }
      );
      console.log("Checkout success:", response.data);
      alert(response.data.message);
    } catch (error) {
      console.error("Checkout error:", error);
      alert(error.response?.data?.message || "Checkout failed");
    }
  };

  // {
  //       date: "2025-08-20",
  //       checkIn: "09:05 AM",
  //       checkOut: "05:30 PM",
  //       status: "Present",
  //       location: "SVS EM School",
  //     },

  const getAttedanceHistory = async () => {
    const year = new Date().getFullYear();
    const month = new Date().getMonth() + 1;
    console.log({ year, month, userId });
    try {
      const response = await axios.get(
        `http://localhost:9800/attendance/report/${userId}/${year}/${month}`
      );
      setAttendanceHistory(response.data.dailyRecords);
    } catch (err) {
      console.log(err.message);
    }
  };

  const allowedLocations = [
    { name: "SVS EM School", latitude: 18.4105841, longitude: 83.8916016 },
    { name: "SURYA EM School", latitude: 18.1976131, longitude: 83.6871136 },
    {
      name: "Express Spark Learning Center",
      latitude: 18.299361,
      longitude: 83.8802478,
    },
    { name: "New Central School", latitude: 18.298269, longitude: 83.8774376 },
  ];

  // Haversine formula
  function getDistanceFromLatLonInM(lat1, lon1, lat2, lon2) {
    const R = 6371000;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) ** 2;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function getNearestLocation(userLat, userLng, radius = 300) {
    for (let loc of allowedLocations) {
      const distance = getDistanceFromLatLonInM(
        userLat,
        userLng,
        loc.latitude,
        loc.longitude
      );
      if (distance <= radius) {
        return loc.name;
      }
    }
    return "Outside allowed area";
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        const locName = getNearestLocation(userLat, userLng);
        setLocation(locName);
      },
      (error) => {
        console.error("Error:", error.message);
      }
    );
  };
  function isTimeBetween(startTime, endTime, date = new Date()) {
    // Helper to convert "HH:MM" to total minutes
    const toMinutes = (timeStr) => {
      const [h, m] = timeStr.split(":").map(Number);
      return h * 60 + m;
    };

    const totalMinutes = date.getHours() * 60 + date.getMinutes();
    const startMinutes = toMinutes(startTime);
    const endMinutes = toMinutes(endTime);

    return totalMinutes >= startMinutes && totalMinutes < endMinutes;
  }
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      setUserId(id);
    } else {
      navigate("/EmployeeLogin");
    }
    getUserInfo();
    getLocation();
  }, []);
  useEffect(() => {
    if (userId) {
      getAttedanceHistory();
    }
  }, [userId]);
  return (
    <div className="attendance-container">
      <div className="attendance-firstRow">
        <div className="profile-card">
          <img src={profile} alt="Profile" className="profile-pic" />
          <h3>{user.userName}</h3>
          <p>📘 Subject: {user.userSubject}</p>
          <p>📅 Joined: {new Date(user.userDOJ).toLocaleDateString()}</p>
          <p
            className="logout"
            onClick={() => {
              localStorage.removeItem("userId");
              navigate("/EmployeeLogin");
            }}
          >
            Log-out
          </p>
        </div>

        <div className="location-card">
          <div className="location-header">
            {/* Left: Location */}
            <div className="location-left">
              <h2>📍 Current Location</h2>
              <p
                className={location?.includes("Outside") ? "outside" : "inside"}
              >
                {location ? location : "Fetching location..."}
              </p>
              <button onClick={getLocation} className="refresh-btn">
                Refresh Location
              </button>
            </div>

            {/* Right: Date */}
            <div className="location-right">
              <h3>📅 Today</h3>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
          </div>
          {/* Check-in / Check-out buttons */}`
          <div className="attendance-buttons">
            <button
              className="checkin-btn"
              onClick={() => {
                if (isTimeBetween("08:30", "10:00")) {
                  handleCheckIn(localStorage.getItem("userId"), location);
                }
                else{
                  alert("This not a Time to check-in (8:30AM - 10:00AM) \n (or) contact to technical team")
                }
              }}
            >
              Check-In
            </button>
            <button
              className="checkout-btn"
              onClick={() => {
                 if (isTimeBetween("15:00", "18:10")) {
                  handleCheckout(localStorage.getItem("userId"))
                }
                else{
                  alert("This not a Time to check-out (15:10AM - 6:05AM) \n (or) contact to technical team")
                }

              }}
            >
              Check-Out
            </button>
          </div>
        </div>
      </div>
      <div className="attendance-card">
        <h3>Attendance History</h3>
        <ul>
          {attendanceHistory.map((day, index) => (
            <li
              key={index}
              className={day.status === "Absent" ? "absent" : "present"}
            >
              <span>
                <strong>{day.date}</strong>
              </span>
              <span>Status: {day.status}</span>
              <span>CheckIn: {day.checkIn || "-"}</span>
              <span>CheckOut: {day.checkOut || "-"}</span>
              <span>📍 {day.location}</span>
            </li>
          ))}
        </ul>
        {/* <div className="pagination-btns">
          <button>Prev</button>
          <p>page : 1 of 3</p>
          <button>Next</button>
        </div> */}
      </div>
    </div>
  );
};

export default EmployeeAttendance;
