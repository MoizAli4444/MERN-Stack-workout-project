const express = require("express");

const Workout = require('../models/workoutModel'); 

const router = express.Router();

// get all workouts
router.get("/", (req,res) => {
    res.json({mssg : 'get requires'});
});

// get single workout
router.get("/:id", (req,res) => {

});

// post a new workout
router.post("/", async (req,res) => {
    
});

// delete a workout
router.delete("/:id", (req,res) => {

});

// update a workout
router.patch("/:id", (req,res) => {

});

module.exports = router;
