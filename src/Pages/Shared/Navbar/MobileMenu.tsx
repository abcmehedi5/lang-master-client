import { GiHamburgerMenu } from "react-icons/gi";

interface MobileMenuProps {
  children: React.ReactNode;
}

export const MobileMenu = ({ children }: MobileMenuProps) => (
  <div className="dropdown">
    <label tabIndex={0} className="btn btn-ghost lg:hidden">
      <GiHamburgerMenu className="text-3xl text-white" />
    </label>
    <ul
      tabIndex={0}
      className="menu menu-sm flex items-center dropdown-content mt-3 z-[1] p-2 shadow-2xl bg-base-100 rounded-box w-52"
    >
      {children}
    </ul>
  </div>
);