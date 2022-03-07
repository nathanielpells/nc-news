import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import { useState } from "react";
import { UserContext } from "../src/Contexts/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState("tickle122");
  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
