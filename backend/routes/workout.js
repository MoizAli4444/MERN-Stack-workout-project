const express = require("express");

const Workout = require('../models/workoutModel'); 
const {createWorkout,getWorkout,getWorkouts} = require('../controllers/workoutController');

const router = express.Router();

// get all workouts
router.get("/", getWorkouts);

// get single workout
router.get("/:id", getWorkout);

// post a new workout
router.post("/", createWorkout);

// delete a workout
router.delete("/:id", (req,res) => {

});

// update a workout
router.patch("/:id", (req,res) => {

});

module.exports = router;
