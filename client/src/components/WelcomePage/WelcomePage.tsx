import logo from "../../assets/logox540.png";
import googleLogo from "../../assets/googleLogo.png";
import Modal from "../Common/Modal/Modal";
import { useRef } from "react";

const WelcomePage = () => {
  const modalRef = useRef(null);

  const modalOpenHandler = () => {
    modalRef.current && modalRef.current.open();
  };

  return (
    <>
      <Modal
        children={"test"}
        ref={modalRef}
      />
      <section className="container m-auto flex h-screen">
        <div className="m-auto flex justify-between">
          <img
            src={logo}
            alt="Logo of the application"
            className="w-1/4 mx-4 object-contain"
          />
          <div className="flex flex-col gap-4 m-auto">
            <div
              id="Sign Up"
              className="flex flex-col items-center"
            >
              <h1 className="font-bold text-5xl mb-16">
                Completely New Experience
              </h1>
              <h2 className="font-semibold text-3xl my-3">Join Now!</h2>
              <button className="border flex border-alternateColor h-max justify-center rounded-3xl w-60 p-2 bg-white border-y-2 border-x-2 hover:bg-secondaryColor">
                <span className="flex my-auto">Signup with </span>
                <img
                  src={googleLogo}
                  alt="google logo"
                  className="w-4 ml-2 mr-1 flex my-auto"
                />
                <span className="flex my-auto">Google</span>
              </button>
              <span>or</span>
              <button className="border border-alternateColor rounded-3xl w-60 p-2 bg-primaryColor border-y-2 border-x-2 hover:bg-secondaryColor">
                Create an Account
              </button>
              <span className="text-alternateColor text-sm mt-2">
                By signing up, you agree to the{" "}
                <span
                  onClick={modalOpenHandler}
                  className="text-secondaryColor hover:text-secondAlternateColor hover:cursor-pointer"
                >
                  Terms of Service
                </span>{" "}
                and{" "}
                <span
                  onClick={modalOpenHandler}
                  className="text-secondaryColor hover:text-secondAlternateColor hover:cursor-pointer"
                >
                  Privacy Policy
                </span>
                , including{" "}
                <span
                  onClick={modalOpenHandler}
                  className="text-secondaryColor hover:text-secondAlternateColor hover:cursor-pointer"
                >
                  Cookie Usage
                </span>
                .
              </span>
            </div>
            <div className="border-alternateColor border-y-2"></div>
            <div
              id="Login"
              className="mt-4 flex flex-col items-center"
            >
              <span>Already have an account?</span>
              <button className="border border-alternateColor my-auto rounded-3xl w-60 p-2 bg-alternateColor border-y-2 border-x-2 hover:bg-secondaryColor mt-2">
                Login
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomePage;
