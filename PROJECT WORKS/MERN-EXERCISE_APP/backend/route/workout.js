const express = require('express');
const {createWorkout,
    getWorkout,
    getsingWorkout,
    deleteWorkout,
    UpdateWorkout

}=require('../controllers/workoutcontroller')
const router = express.Router();

// Get all workouts


// Create a new workout
router.post('/', createWorkout)
router.get('/', getWorkout)


// Delete a workout by ID
router.delete('/:id', deleteWorkout)


// Update a workout by ID
router.patch('/:id', UpdateWorkout) 
// Get a single workout by ID
router.get('/:id',getsingWorkout)

module.exports = router;
