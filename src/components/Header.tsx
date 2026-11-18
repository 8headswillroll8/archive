import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/graphics/archive-logo.svg";
import menu from "../assets/graphics/menu-icon.svg";
import shoppingBag from "../assets/graphics/shopping-bag-icon.svg";
import close from "../assets/graphics/close-icon.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleMenuClick() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header className="bg-brand-neutral-100 ">
      <div className="flex justify-center items-center text-white bg-brand-accent w-full h-6">
        <p className="text-xs">FREE SHIPPING ON ORDERS OVER 999 KR</p>
      </div>

      <div className="flex justify-between mx-auto max-w-7xl px-4 py-4">
        <Link to="/">
          <img src={logo} alt="Archive logo" className="w-26" />
        </Link>

        <nav className="hidden md:flex md:justify-center md:items-center text-sm md:text-brand-neutral-500 gap-24">
          <Link to="/products">Shop</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex gap-4">
          <Link
            to="/cart"
            aria-label="View shopping cart"
            className="flex justify-center items-center"
          >
            <img src={shoppingBag} alt="" className="h-5" />
          </Link>
          <button
            onClick={handleMenuClick}
            type="button"
            aria-label="Toggle menu"
            className="md:hidden"
          >
            <img src={isMenuOpen ? close : menu} alt="" />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          className="flex flex-col gap-4 p-4 text-sm text-brand-neutral-500 md:hidden"
          id="mobile-navigation"
        >
          <Link to="/products" onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/sales" onClick={() => setIsMenuOpen(false)}>
            Sales
          </Link>
          <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}

export default Header;
