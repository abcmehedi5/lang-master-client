import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddNotification: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [position, setPosition] = useState<string>("");
  const [message, setMessage] = useState<string>("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quize = {
        time: time,
        position: position,
        message: message,
      };
      // Log form input values to console
      console.log(quize);
  };

  return (
    <>
      <Helmet>
        <title> Add Notifications | Lang Master </title>
      </Helmet>
      <div className="p-4 lg:w-11/12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-semibold text-center text-cyan-500 mt-10">নোটিফিকেশন যোগ করুন</h1>
          <div>
            <label className="block text-sm font-medium">Your Position:</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              placeholder="What's your position?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Notification Time:</label>
            <input
              type="date"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              placeholder="Time?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium" htmlFor="message">Description:</label>

            <textarea
              className="w-full rounded-lg border border-gray-300 p-3 mt-2 text-sm"
              placeholder="Your Description"
              rows={8}
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button
            type="submit"
            className="btn bg-[#088395] hover:bg-[#21bbd3] text-white w-full px-4 py-2 rounded-md font-semibold"
          >
            Done
          </button>
        </form>
      </div>
    </>
  );
};

export default AddNotification;
