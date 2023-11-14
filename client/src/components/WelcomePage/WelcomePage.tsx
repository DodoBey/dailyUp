import logo from "../../assets/logox540.png";
import googleLogo from "../../assets/googleLogo.png";
import Modal, { ModalHandle } from "../Common/Modal/Modal";
import { useRef, useState } from "react";
import Button from "../Common/Button/Button";
import SignUp from "../SignUp/SignUp";

const WelcomePage = () => {
  const modalRef = useRef<ModalHandle>(null);

  const [modalContent, setModalContent] = useState("");
  const [signingUp, setSigningUp] = useState<boolean>(false);

  const modalOpenHandler = (modalValue: string) => {
    setModalContent(modalValue);
    modalRef.current?.open();
  };

  let modalProps;
  if (modalContent === "Terms Of Service") {
    modalProps = <p>TermsOfService</p>;
  } else if (modalContent === "Privacy Policy") {
    modalProps = <p>PrivacyPolicy</p>;
  } else if (modalContent === "Cookie Policy") {
    modalProps = <p>CookiePolicy</p>;
  }

  const signUpHandler = () => {
    setSigningUp(true);
  };

  return (
    <>
      <Modal
        ref={modalRef}
        title={modalContent}
      >
        {modalProps}
      </Modal>
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
              <Button className="border flex border-alternateColor h-max justify-center rounded-3xl w-60 p-2 bg-white border-y-2 border-x-2 hover:bg-secondaryColor">
                <span className="flex my-auto">Signup with </span>
                <img
                  src={googleLogo}
                  alt="google logo"
                  className="w-4 ml-2 mr-1 flex my-auto"
                />
                <span className="flex my-auto">Google</span>
              </Button>
              <span>or</span>
              <Button
                className="border border-alternateColor rounded-3xl w-60 p-2 bg-primaryColor border-y-2 border-x-2 hover:bg-secondaryColor"
                onClick={() => signUpHandler()}
              >
                Create an Account
              </Button>
              <span className="text-alternateColor text-sm mt-2">
                By signing up, you agree to the{" "}
                <span
                  onClick={() => modalOpenHandler("Terms Of Service")}
                  className="text-secondaryColor hover:text-secondAlternateColor hover:cursor-pointer"
                >
                  Terms of Service
                </span>{" "}
                and{" "}
                <span
                  onClick={() => modalOpenHandler("Privacy Policy")}
                  className="text-secondaryColor hover:text-secondAlternateColor hover:cursor-pointer"
                >
                  Privacy Policy
                </span>
                , including{" "}
                <span
                  onClick={() => modalOpenHandler("Cookie Policy")}
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
              <Button className="border border-alternateColor my-auto rounded-3xl w-60 p-2 bg-alternateColor border-y-2 border-x-2 hover:bg-secondaryColor mt-2">
                Login
              </Button>
            </div>
          </div>
        </div>
      </section>
      {signingUp && <SignUp />}
    </>
  );
};

export default WelcomePage;
