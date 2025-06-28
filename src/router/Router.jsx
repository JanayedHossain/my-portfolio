import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../pages/home/Home";
import ProjectDetails from "../components/projectDetails/ProjectDetails";
import Loading from "../components/loading/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/projects/:id",
    loader: () => fetch("/projects.json"),
      Component: ProjectDetails,
    HydrateFallback:Loading
  },
]);
