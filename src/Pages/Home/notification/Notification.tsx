import { useContext, useState } from "react";
import bell from "../../../assets/img/notification-2.png";
import { MdCircleNotifications } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";

import { AuthContext } from "../../../Providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const Notification = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [open, setOpen] = useState(false);
  // load notification data
  const {
    data: notifications = [],
    // isLoading,
    refetch,
  }: any = useQuery({
    queryKey: ["notification"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/notifications/notification?email=${user?.email}`
      );
      return res.data;
    },
  });

  const capitalizeWords = (text: string) =>
    text
      .split(" ")
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(" ");

  const getErrorMessage = (error: any) =>
    error?.response?.data?.message || error.message || "Something went wrong";

  // notification delete

  const handleNotificationDelete = async (id: string) => {
    try {
      const res = await axiosSecure.delete("/notifications/notification/" + id);

      const msg = res.data.message || "Notification deleted";
      toast.success(capitalizeWords(msg));

      refetch();
    } catch (error: any) {
      toast(capitalizeWords(getErrorMessage(error)));
    }
  };

  return (
    <div className="relative dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <button
          onClick={() => setOpen(open)}
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            <MdCircleNotifications
              style={{ fontSize: "28px", color: "white" }}
            />
            <span className="badge badge-xs badge-primary indicator-item">
              {notifications.length}
            </span>
          </div>
        </button>
      </label>
      <ul className="menu menu-sm dropdown-content mt-3 z-10 shadow bg-base-100 rounded-box w-80 absolute right-0">
        {notifications.slice(0, 5).map((_notification: any) => (
          <li
            onClick={() => setOpen(true)}
            className="text-green-500 flex font"
            key={_notification._id}
          >
            <div className="flex gap-4  mt-2 border ">
              <img className="w-4 bg-slate-200" src={bell} alt="" />
              <span className="justify-between">{_notification.title}</span>
              <span>{_notification.date}</span>
              <button
                onClick={() => handleNotificationDelete(_notification._id)}
                className="relative top-0"
              >
                <TiDeleteOutline style={{ fontSize: "35px" }} />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
