import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../src/Contexts/UserContext";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Paths from "./Components/Paths";

function App() {
  const [currentUser, setCurrentUser] = useState("tickle122");
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <div id="app" className={`App__${currentUser}`}>
          <Header />
          <Navigation />
          <Paths />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
