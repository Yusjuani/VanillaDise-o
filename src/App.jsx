import React, { useState } from "react";
import "./App.css";
import Header from "./componentes/Header";
import Main from "./componentes/Main";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
