import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import UserForm from "./Components/SignUp/UserForm";
import LandingPage from "./Components/LandingPG/LandingPage";

function App() {
  return (
    <div>
      <NavBar />

      <LandingPage />
      <Routes>
        <Route path="*" />
        <Route path="/LandingPage" />
        <Route path="/Profile" />
      </Routes>
    </div>
  );
}

export default App;
