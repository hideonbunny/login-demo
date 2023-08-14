import "./App.css";
import Login from "./component/Login";
import Signup from "./component/Signup";
import React, { useState } from "react";

function App() {
  const [currentform, setCurrentform] = useState("login");
  const fromSwitcher = (name) => {
    setCurrentform(name);
  };

  return (
    <div>
      <header className="App-header">
        <h1>Welcome!</h1>
      </header>
      <div className="page">
        {currentform === "login" ? (
          <div className="Login">
            <Login onSwitch={fromSwitcher} />
          </div>
        ) : (
          <div className="Signup">
            <Signup onSwitch={fromSwitcher} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
