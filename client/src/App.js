import React, { useState, useEffect } from "react";
import config from "./config";
import Footer from "./components/Footer";
import Window from "./components/Window";
import "./style/App.css";

import useSocket from "./hooks/useSocket";

const App = () => {
  const [socket] = useSocket(config[process.env.NODE_ENV].endpoint);

  useEffect(() => {
    socket.on("hi", () => {
      console.log("hello");
    });
  });
  console.log(socket);
  return (
    <div className="App">
      <Window />
      <Footer />
    </div>
  );
};

export default App;
