const Workout = require('../model/WorkoutModel.js');
const mongoose = require('mongoose');

// Get all workouts
const getWorkout = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 });
        res.status(200).json(workouts);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get single workout by ID
const getsingWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' }); // Fixed json syntax
    }
    try {
        const workout = await Workout.findById(id);
        if (!workout) {
            return res.status(404).json({ error: 'No such workout' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Create new workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout); // Corrected this line
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' }); // Fixed json syntax
    }
    try {
        const workout = await Workout.findOneAndDelete({ _id: id });
        if (!workout) {
            return res.status(404).json({ error: 'No such workout' });
        }
        res.status(200).json(workout);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Update workout
const UpdateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such workout' }); // Fixed json syntax
    }
    try {
        const workout = await Workout.findOneAndUpdate(
            { _id: id },
            { ...req.body },
            { new: true } // Ensures the updated workout is returned
        );
        if (!workout) {
            return res.status(404).json({ error: 'No such workout' });
        }
        res.status(200).json(workout); // Return the updated workout
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createWorkout,
    getWorkout,
    getsingWorkout,
    deleteWorkout,
    UpdateWorkout
};
