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
    </>
  );
}

export default App;
