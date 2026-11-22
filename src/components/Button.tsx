interface ButtonProps {
  name: string;
  onClick?: () => void;
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full text-white bg-brand-accent rounded-md px-6 py-2 hover:font-medium"
    >
      {name}
    </button>
  );
}
export default Button;
