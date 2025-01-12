import { useEffect, useState } from 'react';
import WorkoutDetails from '../components/WorkoutDetails'
const Home = () => {
  const [workouts, setWorkouts] = useState(null);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const response = await fetch('/api/workout/');
        const json = await response.json();

        if (response.ok) {
          setWorkouts(json); // Update state with the fetched data
        }
      } catch (error) {
        console.error('Failed to fetch workouts:', error);
      }
    };

    fetchWorkouts(); // Call the async function inside useEffect
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div className="home">
      <div className="workouts">
        {/* Render the workouts if they exist */}
        {workouts &&
        workouts.map((workout) => (
            <WorkoutDetails key={workout.id} workout={workout} />
        ))}

      </div>
    </div>
  );
};

export default Home;
