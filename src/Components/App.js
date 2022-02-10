import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  // const [validateUser, setValidateUser] = useState(false)

  const validation = (validation) => {
    validation == true && setLoggedIn(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        {loggedIn ? (
          <Route path="/" element={<Home />} />
        ) : (
          <Route path="" element={<Login onClick={validation} />} />
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
