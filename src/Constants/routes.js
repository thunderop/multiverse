import Home from "../Views/Home";
import Movies from "../Views/Movies";

export const MainRoutes = [
  {
    Component: Home,
    path: "/",
    exact: true,
    route: "/",
    name: "Home",
  },
  {
    Component: Movies,
    path: "/movies",
    exact: true,
    route: "/movies",
    name: "Movies",
  },
];
