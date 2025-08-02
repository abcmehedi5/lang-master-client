import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import Notification from "../../Home/notification/Notification";
import { Link } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";
import { MobileMenu } from "./MobileMenu";
import { Navigation } from "./Navigation";
import { UserProfile } from "./NavUserProfile";
import { AuthButtons } from "./AuthButtons";

const Navbar: React.FC = () => {
  const { user }: any = useContext(AuthContext);

  return (
    <div
      className="navbar sticky top-0 justify-between py-0 bg-gradient-to-r from-[#95d3a2] to-[#359fac]"
      style={{ zIndex: 1000 }}
    >
      <div className="container">
        {/* Navbar Start */}
        <div className="navbar-start flex max-md:justify-between">
          <MobileMenu>
            <Navigation />
            <div className="ml-5 my-2">
              {/* ResponsiveIconsSection can go here */}
            </div>
            <div>
              <Link to="/user-dashboard/learning">
                <WhiteButton>Get Started</WhiteButton>
              </Link>
            </div>
          </MobileMenu>
          {/* Logo */}
          <div>
            <Link to="/" className="normal-case text-xl text-white">
              <img
                className="md:w-30 md:h-20 h-[50px] w-20 object-cover"
                src="https://i.ibb.co/bgbkbc2/logo.png"
                alt="Logo"
              />
            </Link>
          </div>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-white">
              <Navigation />
            </ul>
          </div>
        </div>

        {/* Navbar End */}
        <div className="md:navbar-end flex items-center gap-4 md:pb-0 ml-4 pb-2">
          <div className="hidden lg:flex text-white">
            {/* ResponsiveIconsSection */}
          </div>

          {user && <Notification />}

          {user ? <UserProfile /> : <AuthButtons />}

          <div className="hidden lg:flex">
            <Link to="/user-dashboard/learning">
              <WhiteButton>Get Started</WhiteButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
