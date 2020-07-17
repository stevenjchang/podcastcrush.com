import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
  document.getElementById("root")
);
