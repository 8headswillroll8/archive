function CartSummary() {
  return (
    <div className="space-y-4 bg-brand-neutral-100 rounded-md p-3 text-lg">
      <div className="flex justify-between">
        <p>Rabatt</p>
        <p>123 kr</p>
      </div>

      <div className="flex justify-between">
        <p>Total</p>
        <p>123 kr</p>
      </div>

      <div className="flex justify-between">
        <p>Shipping</p>
        <p>123 kr</p>
      </div>
    </div>
  );
}

export default CartSummary;
