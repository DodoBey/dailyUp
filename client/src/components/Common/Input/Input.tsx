import { ComponentPropsWithoutRef, FC } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input: FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        {...props}
      />
    </div>
  );
};

export default Input;
