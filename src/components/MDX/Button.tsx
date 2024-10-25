import React from "react";
import { Button as FlowbiteButton } from "flowbite-react";

interface ButtonProps {
  children: React.ReactNode;
  color?:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "light"
    | "dark";

  onClick?: () => void;
  width?: string; // Dodajemy opcjonalny parametr szerokości
}

const Button: React.FC<ButtonProps> = ({
  children,
  color = "primary",
  onClick,
  width,
}) => {
  let colorClass = "";

  switch (color) {
    case "primary":
      colorClass = "bg-blue-500 hover:bg-blue-600";
      break;
    case "secondary":
      colorClass = "bg-gray-500 hover:bg-gray-600";
      break;
    case "success":
      colorClass = "bg-green-500 hover:bg-green-600";
      break;
    case "danger":
      colorClass = "bg-red-500 hover:bg-red-600";
      break;
    case "warning":
      colorClass = "bg-yellow-500 hover:bg-yellow-600";
      break;
    case "info":
      colorClass = "bg-teal-500 hover:bg-teal-600";
      break;
    case "light":
      colorClass = "bg-gray-100 hover:bg-gray-200";
      break;
    case "dark":
      colorClass = "bg-gray-800 hover:bg-gray-900";
      break;
    default:
      colorClass = "bg-blue-500 hover:bg-blue-600";
  }

  // Inline style dla szerokości
  const style = width ? { width } : {};

  return (
    <FlowbiteButton className={colorClass} style={style} onClick={onClick}>
      {children}
    </FlowbiteButton>
  );
};

export default Button;
