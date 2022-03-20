import { Fragment } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
    <>
      <div>
        <h1>SIFU</h1>
      </div>

      <NavBar />
      <div>
        <Profile />
      </div>
    </>
  );
}

export default App;
