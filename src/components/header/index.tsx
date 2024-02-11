import { Link, useLocation } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { selectCart } from "@/redux/slices/cart.slice";

const Header = () => {
  const { pathname } = useLocation();
  const selector = useSelector(selectCart);

  return (
    <div className="container mx-auto">
      <div className="relative z-50 flex items-center gap-x-4 px-4 py-4 text-2xl font-semibold sm:gap-x-6">
        <Link to={"/"}>Home</Link>
        <Link to={"/products"}>Products</Link>
        <Link to={"/cart"} className="flex items-center">
          Cart
          {pathname === "/products" && (
            <span className="flex items-center gap-x-2 pl-4 text-xl">
              <FaCartShopping />
              {selector.cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Header;
