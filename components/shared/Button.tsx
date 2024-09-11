import { ReactNode } from "react";

interface IButton {
  variant: "dark" | "light";
  type: "button" | "submit" | "reset";
  children: ReactNode;
  onClick?: () => void;
}

const Button = ({ variant, type, children, onClick }: IButton) => {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-xl gap-[2px] border transition ${
        variant === "dark"
          ? " bg-button-orange border-button-orange text-white hover:bg-button-orange-hover hover:border-button-orange-hover"
          : " bg-transparent border-button-orange text-button-orange hover:bg-button-orange hover:text-white"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
