import React, {
  ReactNode,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
import { createPortal } from "react-dom";

type Props = { children: ReactNode };

const Modal: React.FC<Props> = forwardRef(({ children }, ref) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  useImperativeHandle(ref, () => {
    return {
      open() {
        modalRef.current && modalRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={modalRef}>
      {children}
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")!
  );
});

export default Modal;
