import { Fragment } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";
import SearchBar from "./Components/SearchBar";
import mentors from "../src/MentorsDummyData.json";

function App() {
  return (
    <>
      {/* <h1>SIFU</h1>
      </div>
      <NavBar />
      <div>
        <Profile /> */}
      <SearchBar />
    </>
  );
}

export default App;
