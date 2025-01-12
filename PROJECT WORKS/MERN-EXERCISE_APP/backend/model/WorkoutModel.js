const mongoose = require('mongoose');

// Define the schema
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema(
  {
    title: {
      required: true,
      type: String,
    },
  
    load: {
      type: Number,
      required: true,
    },
    reps: {
        type: Number,
        required: true,
      },
  },
  { timestamps: true } // Corrected "timestamp" to "timestamps"
);

// Create and export the model
module.exports = mongoose.model('Workout', WorkoutSchema);
