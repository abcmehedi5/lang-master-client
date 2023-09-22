import { Helmet } from "react-helmet-async";
import UserOfTable from "./UserOfTable";

const UserManage = () => {
  return (
    <div>
      <Helmet>
        <title> Users | Lang Master </title>
      </Helmet>
      <UserOfTable></UserOfTable>
    </div>
  );
};

export default UserManage;
