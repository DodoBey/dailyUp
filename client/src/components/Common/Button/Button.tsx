import { ComponentPropsWithoutRef, FC, ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

export default Button;
