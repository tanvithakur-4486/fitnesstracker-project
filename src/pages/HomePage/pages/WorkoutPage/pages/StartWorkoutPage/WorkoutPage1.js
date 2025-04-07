import React, { useState, useEffect } from "react";
import "./WorkoutPage1.css";
import { motion } from "framer-motion";
// import ASSETS from "../../Assets";
import { database } from "../../../../../../firebase";
import { ref, push, set } from "firebase/database";

const exercises = [
  {
    category: "Full Body",
    exercises: ["Burpees", "Jumping Jacks", "Plank"],
    videos: ["burpees.mp4", "jumping jacks.mp4", "plank.mp4"],
  },
  {
    category: "Legs",
    exercises: ["Squats", "Lunges", "Leg Press"],
    videos: ["squats.mp4", "lunges.mp4", "leg.mp4"],
  },
  {
    category: "Arms",
    exercises: ["Bicep Curls", "Push-ups"],
    videos: ["biceps.mp4", "pushups.mp4"],
  },
  {
    category: "Stretching",
    exercises: [
      "Hamstring Stretch",
      "Quad Stretch",
      "Shoulder Stretch",
      "Cobra Stretch",
    ],
  },
];

const exerciseDuration = 30;

const WorkoutPage1 = () => {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(exerciseDuration);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || timeLeft === 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, isPaused]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleSkip();
    }
  }, [timeLeft]);

  const handleSkip = () => {
    const currentCategory = exercises[categoryIndex];
    if (exerciseIndex < currentCategory.exercises.length - 1) {
      setExerciseIndex(exerciseIndex + 1);
      setTimeLeft(exerciseDuration);
    } else if (categoryIndex < exercises.length - 1) {
      setCategoryIndex(categoryIndex + 1);
      setExerciseIndex(0);
      setTimeLeft(exerciseDuration);
    } else {
      alert("Workout is complete!");
    }
  
  };

  const handlePause = () => {
    setIsPaused(!isPaused);
  };

  // const handleDone = () => {
  //   alert("Workout is complete!");
  // };
  const handleDone = () => {
    const workoutData = {
      category: exercises[categoryIndex].category,
      exercise: exercises[categoryIndex].exercises[exerciseIndex],
      workout: "Done",
      timestamp: new Date().toISOString(),
    };

    set(
      ref(
        database,
        `users/${localStorage.getItem(
          "uid"
        )}/workout/${`${new Date().getDate()}-${
          new Date().getMonth() + 1
        }-${new Date().getFullYear()}`}`
      ),
      workoutData
    ) // Adds workout data
      .then(() => {
        alert("Workout data saved successfully!");
      })
      .catch((error) => {
        console.error("Error saving workout data: ", error);
      });

    alert("Workout is complete!");
  };

  return (
    <>
      <div className="workout-container">
        <h2 className="exercise-title">
          {exercises[categoryIndex].category} Workout
        </h2>
        <div>
          <motion.div
            className="exercise-content"
            key={`${categoryIndex}-${exerciseIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="exercise-name">
              {exercises[categoryIndex].exercises[exerciseIndex]}
            </h3>
            <video width={"390px"} height={"350px"} autoPlay={true} loop={true}>
              <source
                src={require(`../../../../../../Assets/video file/${exercises[categoryIndex].videos[exerciseIndex]}`)}
                type="video/mp4"
              ></source>
            </video>
            <p className="timer">Time Left: {timeLeft}s</p>
          </motion.div>
          <div className="button-container">
            <button className="skip-button" onClick={handleSkip}>
              Skip
            </button>
            <button className="pause-button" onClick={handlePause}>
              {isPaused ? "Resume" : "Pause"}
            </button>
            <button className="done-button" onClick={handleDone}>
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutPage1;
