import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { DarkModeContextProvider } from "./Nitesh/context/darkModeContext";
// import { AuthContextProvider } from "./Nitesh/context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <DarkModeContextProvider>
        
          <App />
       
      </DarkModeContextProvider>
    </Provider>
  </BrowserRouter>
);
