import React from "react";
import Header from "./Components/Header/Index";
import Main from "./Pages/Main/Index";
import Routes from "./routes";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
