import { RouterProvider } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import routes from "../routes";

const AppEntryPoint = () => {
  //Header only visible after the user logged in
  //Unsecured routes Welcom/, Signup, Login
  return (
    <>
      <Header />
      <RouterProvider router={routes} />
      <Footer />
    </>
  );
};

export default AppEntryPoint;
