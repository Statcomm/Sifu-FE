import React from "react";
import UserForm from "../SignUp/UserForm";
import "./LandingPG.css";
import tree from "../../assets/Home/tree.png";
import { Image } from "react-bootstrap";
import { useState } from "react";
import SignInForm from "../SignUp/SignInForm";

const LandingPage = () => {
  const [show, setShow] = useState(false);
  const [showSifuForm, setShowSifuForm] = useState(false);
  const [userTypeText, setUserTypeText] = useState("");

  const [login, setLogin] = useState(false);

  return (
    <div>
      <div className="lp">
        <div>
          <div className="primary-text">
            <h1> A Sifu is a mentor.</h1>
          </div>
          <div className="highlighted-text">
            <p>
              A mentor nurtures their pupils into the peers they hope will one
              day stand on their shoulders.
            </p>
          </div>
        </div>
        <div className="lp-picture">
          <Image src={tree} className="lp-picture-background" />
        </div>
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
            <button
              onClick={() => {
                setShow(true);
                setUserTypeText("sifu");
              }}
              className="ButtonsThemselves"
            >
              Become a Sifu
            </button>
            <button
              onClick={() => {
                setShow(true);
                setUserTypeText("student");
              }}
              className="ButtonsThemselves"
            >
              Become a Student
            </button>
          </div>
          <div className="ButtonsSegmentLogin">
            <button
              onClick={() => setShow(false)}
              className="ButtonsThemselves"
            >
              Log In
            </button>
            <div className="Buttons"></div>
          </div>
        </div>
        <div className="Signupin">
          {show ? <UserForm userType={userTypeText} /> : <SignInForm />}
        </div>
      </div>
    </div>
  );
};

{
}

export default LandingPage;
