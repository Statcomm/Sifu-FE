import React from "react";
import UserForm from "../SignUp/UserForm";
import "./LandingPG.css";
import { useState } from "react";
import SignInForm from "../SignUp/SignInForm";

const LandingPage = () => {
  const [show, setShow] = useState(false);
  // const [showSifuForm, setShowSifuForm] = useState(false);
  const [userTypeText, setUserTypeText] = useState("");
  console.log(
    "🚀 ~ file: LandingPage.js ~ line 11 ~ LandingPage ~ userTypeText",
    userTypeText
  );
  const [login, setLogin] = useState(false);
  console.log("🚀 ~ file: LandingPage.js ~ line 8 ~ LandingPage ~ show", show);
  return (
    <div>
      <div className="LandingPagePicture">Picture</div>
      <div className="MidPage">
        <div className="AboutUs">
          About Us
          <div className="Buttons">
            <button
              onClick={() => {
                setShow(true);
                setUserTypeText("student");
              }}
            >
              Sign In as a student
            </button>
            <button
              onClick={() => {
                setShow(true);
                setUserTypeText("sifu");
              }}
            >
              Sign In as a sifu
            </button>

            <button onClick={() => setShow(false)}>login</button>
          </div>
        </div>
        <div className="Signupin">
          {show ? <UserForm userType={userTypeText} /> : <SignInForm />}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
