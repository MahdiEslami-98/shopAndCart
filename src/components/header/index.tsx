import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="relative z-50 flex items-center gap-x-6 px-4 py-4 text-2xl font-semibold">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"}>Cart</Link>
      </div>
    </div>
  );
};

export default Header;
