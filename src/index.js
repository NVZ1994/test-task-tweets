import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter   } from "react-router-dom";

import App from "components/App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="test-task-tweets">
      <App />
    </BrowserRouter  >
  </React.StrictMode>
);
