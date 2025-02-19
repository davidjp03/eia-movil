interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

function Button({ children, onClick, className, type }: Readonly<ButtonProps>) {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`px-4 py-2 text-white bg-customBlue font-semibold rounded-md shadow-md transition-all hover:opacity-80`}
    >
      {children}
    </button>
  );
}
export default Button;
