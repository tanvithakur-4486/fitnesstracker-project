import React from "react";
import "./styles.css";
import aboutusImage from "../../../../Assets/images/aboutus.jpg";

const About = () => {
  return (
    <div className="about-container">
       <h1 className="topAboutContainer">About Us</h1>
       <p className="about-text">
          Welcome to <span className="about-highlight">Fitness Tracker</span>,
          your ultimate fitness companion! Our mission is to help you take
          control of your health by tracking your progress, setting achievable
          goals, and staying motivated on your fitness journey.
        </p>
      <img src={require("../../../../Assets/images/aboutus.jpg")} />
      {/* <h1 className="about-title">About Us</h1> */}
      {/* <h1 className="topAboutContainer">About Us</h1> */}

      <div className="about-content">
        {/* <h1 className="topAboutContainer">About Us</h1>  */}

       

        <h2 className="about-title">Why Choose Us?</h2>
        <ul className="about-list">
          <li>
            <span className="about-highlight">Easy-to-Use Tracker</span> – Log
            workouts, steps, calories, and more.
          </li>
          <li>
            <span className="about-highlight">Personalized Insights</span> –
            Data-driven insights to improve workouts.
          </li>
          <li>
            <span className="about-highlight">Goal Setting & Achievements</span>{" "}
            – Set goals and celebrate milestones.
          </li>
          <li>
            <span className="about-highlight">Community Support</span> – Join a
            supportive fitness community.
          </li>
        </ul>

        <h2 className="about-title">Our Mission</h2>
        <p className="mission-text">
          At <span className="about-highlight">Fitness Tracker</span>, we
          believe fitness is about creating a sustainable and healthy lifestyle.
          Whether you're a beginner or a fitness enthusiast, our platform helps
          you track, improve, and stay consistent with your workouts and
          wellness habits.
        </p>

        <h2 className="about-title">Join Us Today!</h2>
        <p className="join-text">
          Start your fitness journey with{" "}
          <span className="about-highlight">Fitness Tracker</span> and make
          every step count towards a healthier you.
        </p>

        <p className="join-text">🚀 Track. Improve. Achieve.</p>
      </div>
    </div>
  );
};

export default About;
