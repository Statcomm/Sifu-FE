import "./App.css";
import NavBar from "./Components/NavBar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" />
        <Route path="/LandingPage" />
        <Route path="/Profile" />
      </Routes>
    </div>
  );
}

export default App;
