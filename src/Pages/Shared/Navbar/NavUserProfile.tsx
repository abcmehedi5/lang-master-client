import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useUser from "../../../hooks/useUser";

export const UserProfile = () => {
  const { user, logOut }: any = useContext(AuthContext);
  const [singleUser] = useUser();

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(() => {});
  };

  return (
    <div className="dropdown dropdown-end z-[1000000]">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full border">
          <img
            src={
              singleUser?.image ||
              "https://cdn.icon-icons.com/icons2/1371/PNG/512/robot02_90810.png"
            }
            loading="lazy"
            alt={user.displayName}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="mt-3 z-[10000000] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <Link to="user-dashboard/profile" className="justify-between">
            Profile
          </Link>
        </li>
        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
