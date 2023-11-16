import { ReactNode, forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export type ModalHandle = {
  open: () => void;
};
type ModalProps = {
  children: ReactNode;
  title: string | undefined;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  ({ children, title }, ref) => {
    const modalRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle(ref, () => {
      return {
        open() {
          modalRef.current?.showModal();
        },
      };
    });

    return createPortal(
      <dialog
        ref={modalRef}
        className="open:bg-alternateColor open:shadow-lg p-40 rounded-lg"
      >
        <div>
          <h2>{title}</h2>
          {children}
        </div>

        <form
          method="dialog"
          className="m-auto"
        >
          <button className="border border-alternateColor rounded-3xl w-32 p-2 bg-primaryColor border-y-2 border-x-2 hover:bg-secondaryColor">
            Close
          </button>
        </form>
      </dialog>,
      document.getElementById("modal")!
    );
  }
);

export default Modal;
