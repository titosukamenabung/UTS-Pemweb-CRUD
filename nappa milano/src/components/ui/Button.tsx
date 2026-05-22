import React from "react";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  variant = "primary",
  type = "button",
  isLoading = false,
  className = "",
  onClick,
}) => {
  const baseStyle =
    "px-10 py-3 rounded font-medium transition-all duration-200";

  const variantStyle =
    variant === "primary"
      ? "bg-red-900 text-white hover:bg-red-700"
      : variant === "outline"
      ? "border border-red-900 text-red-900 hover:bg-red-100"
      : "bg-gray-700 text-white hover:bg-gray-800";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      disabled={isLoading}
    >
      {isLoading ? "Loading..." : label}
    </button>
  );
};

export default Button;