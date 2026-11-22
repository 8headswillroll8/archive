interface ButtonProps {
  name: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({ name, onClick, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full text-white bg-brand-accent rounded-md px-6 py-2 hover:font-medium"
    >
      {name}
    </button>
  );
}

export default Button;
