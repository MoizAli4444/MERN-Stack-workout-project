const Workout = require('../models/workoutModel');


// create new workout
const getWorkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}

// create new workout
const createWorkout = async (req,res) =>{
    const {title, load, reps} = req.body;

    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

module.exports = {
    createWorkout
}