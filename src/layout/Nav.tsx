import { ThemeToggle } from "@/components/Toggle/ThemeToggle";
import { Link, Outlet, useLocation } from "react-router";

function Nav() {
  const pathname = useLocation();
  return (
    <div className="h-[4rem] w-full py-4 border-b border-gray-200/20">
      <div className="w-[90%] mx-auto px-8">
        <nav className="flex gap-4 justify-end">
          {pathname.pathname !== "/" && <Link to="/">Home</Link>}
          <Link to="/work">Work</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <ThemeToggle />
        </nav>
      </div>
      <Outlet />
    </div>
  );
}

export default Nav;
