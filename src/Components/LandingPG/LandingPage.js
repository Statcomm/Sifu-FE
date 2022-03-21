import React from "react";
import "./LandingPG.css";
import LandingPic from "../../Media/LandingPic.png";
import { Image } from "react-bootstrap";

const LandingPage = () => {
  return (
    <div>
      <div className="LandingPagePicture">
        <div>
          <h1> A Sifu is a mentor.</h1>
        </div>

        <div>
          <p>
            A mentor nurtures their pupils into the peers they hope will one day
            stand on their shoulders.
          </p>
        </div>

        <Image src={LandingPic} />
      </div>
      <div className="MidPage">
        <div className="AboutUs">
          <div className="TextTitle">
            Find your Sifu! <p></p> {"\n"}
          </div>
          A Sifu is a mentor. Mentors are more than teachers, at the crux of
          lifelong friends, peers and the giants whose shoulders we all hope to
          one day stand on. Whether you are a student seeking a Sifu or looking
          to be one, you are in the right place to be connected. <p></p>
          <div className="ButtonsSegment">
            <button className="ButtonsThemselves">Become a Sifu</button>
            <button className="ButtonsThemselves">Become a Student</button>
          </div>
          <div className="ButtonsSegmentLogin">
            <button className="ButtonsThemselves">Log In</button>
          </div>
        </div>
        <div className="Signupin">Signup/In</div>
      </div>
    </div>
  );
};

export default LandingPage;
