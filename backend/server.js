const express = require("express");

require("dotenv").config();
const workoutRoutes = require("./routes/workout");
const mongoose = require("mongoose");

// express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

// connect to mongodb
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log("db connected & app run on :", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// // listen for requests
// app.listen(process.env.PORT,()=>{
//     console.log('app run on :',process.env.PORT);
// });
