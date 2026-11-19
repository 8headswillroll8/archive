import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="flex flex-col gap-3 p-6 md:p-8 bg-brand-neutral-100">
      <h2 className="text-4xl sm:text-5xl md:text-7xl text-pretty">
        GET IN TOUCH WITH US
      </h2>
      <div className="flex flex-col gap-8 md:flex-row md:justify-between md:max-w-150 text-brand-neutral-500">
        <nav className="flex flex-col">
          <Link to="/products">Shop</Link>
          <Link to="/sales">Sales</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="flex flex-col">
          <p>Questions:</p>
          <p>hello@archive.no</p>
        </div>
        <div className="flex flex-col">
          <a href="#">Newsletter</a>
          <a href="#">Instagram</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
