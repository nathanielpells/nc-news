import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import { UserContext } from "../src/Contexts/UserContext";
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Body from "./Components/Body";

function App() {
  const [currentUser, setCurrentUser] = useState("tickle122");
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <div id="app" className={`App__${currentUser}`}>
          <Header />
          <Navigation />
          <Body />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
