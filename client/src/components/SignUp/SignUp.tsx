import { useEffect, useRef } from "react";
import Input from "../Common/Input/Input";
import Modal, { ModalHandle } from "../Common/Modal/Modal";

const SignUp = () => {
  const modalRef = useRef<ModalHandle>(null);

  useEffect(() => {
    modalRef.current?.open();
  }, []);

  return (
    <Modal
      title="Sign Up"
      ref={modalRef}
    >
      <Input
        id="email"
        label="Email"
        type="email"
      />
      <Input
        id="username"
        label="Username"
        type="text"
      />
      <Input
        id="password"
        label="Password"
        type="password"
      />
    </Modal>
  );
};

export default SignUp;
