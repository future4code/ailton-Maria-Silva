import React, { useState } from "react";
import Router from "./Routes/Router";
import theme from "./Constants/theme";
import { ThemeProvider } from "@mui/material";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
  const token = localStorage.getItem("token")
  const [logButton, setLogButton] = useState(token ? "LOGOUT" : "LOGIN")
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header logButton={logButton} setLogButton={setLogButton}/>
        <Router setLogButton={setLogButton}/>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
