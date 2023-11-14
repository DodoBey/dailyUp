import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/WelcomePage";
import Feed from "./components/Feed/Feed";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/feed",
    element: <Feed />,
  },
]);

export default routes;
