function Button({ name }: { name: string }) {
  return (
    <button className="w-full text-white bg-brand-accent rounded-md px-6 py-2 hover:font-medium">
      {name}
    </button>
  );
}
export default Button;
