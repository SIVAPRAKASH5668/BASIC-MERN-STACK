const WorkoutDetails = ({ workout }) => {
    return (
      <div className="workout-details">
        <h4>{workout.title}</h4>
        {/* Add more details if available */}
        <p><strong>load:</strong> {workout.load} kg</p>
        <p><strong>reps:</strong> {workout.reps}</p>
      </div>
    );
  };
  
  export default WorkoutDetails;
  