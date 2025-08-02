import { Link } from "react-router-dom";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";

export const AuthButtons = () => (
  <Link title="login" to="/login">
    <WhiteButton variant="outline" className="hidden lg:block">Login</WhiteButton>
    <WhiteButton variant="outline" size="sm" className="block lg:hidden">Login</WhiteButton>
  </Link>
);