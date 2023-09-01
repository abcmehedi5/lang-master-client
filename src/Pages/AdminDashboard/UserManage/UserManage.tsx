import Chart from "./Chart";
import UserInfo from "./UserInfo";
import UserOfTable from "./UserOfTable";

const UserManage = () => {
  return (
    <div>
      <UserInfo></UserInfo>
      <Chart></Chart>
      {/* <UserTable></UserTable> */}
      <UserOfTable></UserOfTable>
    </div>
  );
};

export default UserManage;
