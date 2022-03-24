import { Fragment, React } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import SearchBar from "./Components/SearchBar/SearchBar";
import mentors from "../src/MentorsDummyData.json";
import { Route, Routes } from "react-router-dom";
import UserForm from "./Components/Signups-ins/SifuSignUp";
import LandingPage from "./Components/LandingPG/LandingPage";
import SifuSignUp from "./Components/Signups-ins/SifuSignUp";
import SignInForm from "./Components/Signups-ins/SignInForm";

function App() {
  return (
    <>
      <div className="logo-text">
        <h1 className="logo-text">SIFU</h1>
      </div>
      {/* <div className="lang">
        <button className="button-71">
          <img
            className="imgb"
            src="https://flagdownload.com/wp-content/uploads/Flag_of_Kuwait_Flat_Round-2048x2048.png"
            alt=""
          />
          عربي
        </button>
        <button className="button-71">
          <img
            className="imgb"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/1200px-United-kingdom_flag_icon_round.svg.png"
            alt=""
          />
          English
        </button> */}
      {/* <NavBar /> */}

      <SearchBar />
      <LandingPage />
      <Routes>
        <Route path="*" />
        <Route path="/LandingPage" element={<LandingPage />} />
        <Route path="/sifus/signup" element={<SifuSignUp />} />
        <Route path="/sifus/signin" element={<SignInForm />} />
        <Route path="/Profile" />
      </Routes>
      {/* </div> */}

      {/* <h1>SIFU</h1>
      </div>
      <NavBar />
      <div> */}
      {/* <Profile /> */}

      {/* <NavBar />

      <LandingPage />
      <Routes>
        <Route path="*" />
        <Route path="/LandingPage" />
        <Route path="/Profile" />
      </Routes>  */}
    </>
  );
}

export default App;
