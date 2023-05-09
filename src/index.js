import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter  } from "react-router-dom";

import App from "components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter  basename="/test-task-tweets">
      <App />
    </HashRouter >
  </React.StrictMode>
);
