import React from "react";
import "./LandingPG.css";

const LandingPage = () => {
  return (
    <div>
      <div className="LandingPagePicture">Picture</div>
      <div className="MidPage">
        <div className="AboutUs">
          About Us
          <div className="Buttons">
            <button>Become a Sifu</button>
            <button>Become a Student</button>
            <button>Log In</button>
          </div>
        </div>
        <div className="Signupin">Signup/In</div>
      </div>
    </div>
  );
};

export default LandingPage;
