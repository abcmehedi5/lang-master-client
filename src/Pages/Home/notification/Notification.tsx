import { useEffect, useState } from "react";
import bell from "../../../assets/img/notification-2.png";

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
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
