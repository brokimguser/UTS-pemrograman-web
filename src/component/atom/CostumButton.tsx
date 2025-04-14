// CustomButton.tsx
import React from "react";

// Define the props interface for CustomButton
interface CustomButtonProps {
  text: string;
  onClick: () => void; // Function that handles the click event
  className: string; // Classes for styling
}

const CustomButton: React.FC<CustomButtonProps> = ({
  text,
  onClick,
  className,
}) => {
  return (
    <button onClick={onClick} className={`${className} px-6 py-3 rounded-lg`}>
      {text}
    </button>
  );
};

export default CustomButton;
