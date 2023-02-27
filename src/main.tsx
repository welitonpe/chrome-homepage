import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

// Imports the @clayui/css package CSS
import "@clayui/css/lib/css/atlas.css";
import { Route, RouterProvider } from "react-router-dom";
import router from "./Router/Router";
import AppRouter from "./Router/Router";

// You will use this to move to some components
// that need Clay icons, you can host your own
// set of icons in your application. We are using
// the collection of icons hosted in codesandox
// itself to avoid an unsafe request error for a
// different URL than the hosted site.
const spritemap = "icons.svg";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
