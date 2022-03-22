import { Fragment } from "react";
import { Button } from "react-bootstrap";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import SearchBar from "./Components/SearchBar";
import mentors from "../src/MentorsDummyData.json";
import { Route, Routes } from "react-router-dom";
import UserForm from "./Components/SignUp/UserForm";
import LandingPage from "./Components/LandingPG/LandingPage";

function App() {
  return (
    <>
<<<<<<< HEAD
      <div className="logo-text">
        <h1 className="logo-text">SIFU</h1>
      </div>
      <div className="lang">
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
        </button>{" "}
        <NavBar />
        <LandingPage />
        <Routes>
          <Route path="*" />
          <Route path="/LandingPage" />
          <Route path="/Profile" />
        </Routes>
      </div>

      <div></div>
=======
      {/* <h1>SIFU</h1>
      </div>
      <NavBar />
      <div>
        <Profile /> */}
      <SearchBar />
      <NavBar />

      <LandingPage />
      <Routes>
        <Route path="*" />
        <Route path="/LandingPage" />
        <Route path="/Profile" />
      </Routes>
>>>>>>> e83558b6b019fc6bc96188eb9589f91e513fad04
    </>
  );
}

export default App;
