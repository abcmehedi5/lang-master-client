import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAdmin from "../../../hooks/useAdmin";

export const Navigation = () => {
  const { user }: any = useContext(AuthContext);
  const [isAdmin] = useAdmin();

  const navItems = [
    { to: "/", title: "home", label: "Home" },
    { to: "/blog", title: "blog", label: "Blog" },
    { to: "/about-us", title: "About Us", label: "About Us" },
    { to: "/translator", title: "Translator", label: "Translator" },
  ];

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-3 rounded-xl font-medium transition-all duration-300 ease-out relative overflow-hidden group ${
      isActive
        ? "bg-white/10 lg:text-white shadow-lg backdrop-blur-sm border lg:border-white/20"
        : "text-gray-800 lg:text-gray-200 hover:text-white hover:bg-white/5 hover:backdrop-blur-sm"
    }`;

  const NavItem = ({
    to,
    title,
    label,
  }: {
    to: string;
    title: string;
    label: string;
  }) => (
    <div className="relative mx-2">
      <NavLink to={to} title={title} className={navLinkClasses}>
        <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out"></span>
        <span className="absolute inset-0 rounded-xl border border-white/0 group-hover:border-white/20 transition-all duration-300"></span>
        <span className="relative z-10">{label}</span>
        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white/60 transform -translate-x-1/2 group-hover:w-1/2 transition-all duration-300"></span>
      </NavLink>
    </div>
  );

  return (
    <>
      {navItems.map((item) => (
        <NavItem key={item.to} {...item} />
      ))}
      {user && isAdmin && (
        <NavItem
          to="/admin-dashboard/statistics"
          title="Admin Panel"
          label="Admin"
        />
      )}
    </>
  );
};
