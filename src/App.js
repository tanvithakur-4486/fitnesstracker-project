import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import RegisterPage from "./pages/RegisterPage/RegisterPage.js";
import ProgressPage from "./pages/HomePage/pages/ProgressPage/ProgressPage.js";
import AboutusPage from "./pages/HomePage/pages/AboutusPage/AboutusPage.js";
import WorkoutPage from "./pages/HomePage/pages/WorkoutPage/WorkoutPage.js";
import MainPage from "./pages/HomePage/pages/MainPage/MainPage.js";
import WorkoutPage1 from "./pages/HomePage/pages/WorkoutPage/pages/StartWorkoutPage/WorkoutPage1.js";
import ProfilePage from "./pages/HomePage/pages/ProfilePage/ProfilePage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/home" element={<MainPage />} />
          <Route path="/about us" element={<AboutusPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/workout" element={<WorkoutPage />} />
          <Route path="/workoutPage1" element={<WorkoutPage1 />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
