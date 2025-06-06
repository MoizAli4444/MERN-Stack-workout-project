const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// get all workouts
const getWorkouts = async (req,res) =>{
    const workouts = await Workout.find({}).sort({createdAt:-1});
    res.status(200).json(workouts);
}


// get a single workout
const getWorkout = async (req,res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such workout'});
    }

    const workout= await Workout.findById(id);

    if (!workout) {
        return res.status(404).json({error:'No such document'})
    }

    res.status(200).json(workout);

}


// create new workout
const createWorkout = async (req,res) =>{
    const {title, load, reps} = req.body;


    let emptyFields = [];

    if (!title) {
        emptyFields.push('title')
    }

    if (!load) {
        emptyFields.push('load');
    }

    
    if (!reps) {
        emptyFields.push('reps');
    }

    if (emptyFields.length > 0) {
        return res.status(400).json({error:'Please fill all the fields ',emptyFields});
    }

    // add doc to db
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

// delete workout
const deleteWorkout = async (req,res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such workout'});
    }

    const workout= await Workout.findByIdAndDelete({_id:id});

    if (!workout) {
        return res.status(404).json({error:'No such document'})
    }

    res.status(200).json(workout);

}


// update workout
const updateWorkout = async (req,res) =>{
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error:'No such workout'});
    }

    const workout= await Workout.findByIdAndUpdate({_id:id},{
        ...req.body
    });

    if (!workout) {
        return res.status(404).json({error:'No such document'})
    }

    res.status(200).json(workout);

}




module.exports = {
    getWorkouts,
    getWorkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
}