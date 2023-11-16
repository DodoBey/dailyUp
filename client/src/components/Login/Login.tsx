import { useEffect, useRef } from "react";
import Modal, { ModalHandle } from "../Common/Modal/Modal";
import Input from "../Common/Input/Input";

const Login = () => {
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
        id="password"
        label="Password"
        type="password"
      />
    </Modal>
  );
};

export default Login;
