import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./routes/App";

const app = document.getElementById("app");
const rootInstance = ReactDOM.createRoot(app);
rootInstance.render(<App />);
