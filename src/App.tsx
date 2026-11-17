import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Sales from "./pages/Sales";
import Checkout from "./pages/checkout/Checkout";
import CheckoutSuccess from "./pages/checkout/CheckoutSuccess";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/sales">Sales</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout/checkout" element={<Checkout />} />
        <Route path="/checkout/checkoutsuccess" element={<CheckoutSuccess />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
