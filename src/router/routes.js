// src/routes.js
import Home from "../pages/home";

import About from "../pages/about";
import Contact from "../pages/contact";
// import User from "./pages/User";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  // { path: "/stats", element: <StatsIntro /> },
  // { path: "/users/:id", element: <User /> },
];

export default routes;
