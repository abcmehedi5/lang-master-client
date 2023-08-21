import { useEffect, useState } from "react";
import bell from "../../../assets/img/notification-2.png";
import {MdCircleNotifications } from "react-icons/md";
interface Review {
  _id: string;
  name: string;
  rating: number;
  details: string;
  description: string;
  image: string;
  passion: string;
  title: string;
  notification: string;
  date: string;
}

const Notification = () => {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Review[]>([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNotifications(data);
      });
  }, []);
  return (
    <div className="relative dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <button
          onClick={() => setOpen(open)}
          className="btn btn-ghost btn-circle"
        >
          <div className="indicator">
            
                <MdCircleNotifications style={{ fontSize: '28px',color:"white" }} />
            <span className="badge badge-xs badge-primary indicator-item">
              {notifications.length}
            </span>
          </div>
        </button>
      </label>
      <ul className="menu menu-sm dropdown-content mt-3 z-10 shadow bg-base-100 rounded-box w-72 absolute right-0">
        {notifications.map((_notification) => (
          <li
            onClick={() => setOpen(true)}
            className="text-green-500 flex font-serif"
            key={_notification._id}
          >
            <div className="flex gap-4 ">
              <img className="w-4 bg-slate-200" src={bell} alt="" />
              <span className="justify-between">{_notification.title}</span>
            </div>
            <a className="ml-8" href="">
              <small>{_notification.date}</small>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notification;
