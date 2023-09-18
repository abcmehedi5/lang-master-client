import React, { useContext, useState } from "react";
import "./Profile.css";
import { FaCoins, FaEdit } from "react-icons/fa";
// import { BsPersonFillAdd } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import ProfileEditModal from "./ProfileEditModal";
import useUser from "../../../hooks/useUser";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
import { ImLocation2 } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

interface Profile {
  _id: string;
  name: string;
  rating: number;
  details: string;
  description: string;
  passion: string;
  location: string;
  joiningDate: Date;
  email: string;
  following: number;
  followers: number;
  phoneNumber: string;
  score: number;
  image: string;
  role: string;
  state: string;
}

const Profile: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [data, setData] = useState<any>(null);
  const [singleUser] = useUser();

  const handleEditButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalSubmit = async (data: any) => {
    try {
      const updatedData = {
        name: data.name,
        bio: data.bio,
        birthday: data.birthday,
        address: data.address,
        phoneNumber: data.phoneNumber,
        gender: data.gender,
      };
      const response = await axiosSecure.patch(
        `/users/update-user/${user?.email}`,
        { updatedData }
      );
      toast("Successfully updated user profile:", response.data);
    } catch (error) {
      toast.error("Error updating user profile");
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div>
      <Helmet>
        <title> Profile | Lang Master </title>
      </Helmet>
      <div className="md:flex h-full gap-4 lg:gap-8 w-10/12 mx-auto mt-5 border-2 rounded-2xl p-10 bg-slate-200 shadow">
        <div
          className="border rounded-lg shadow-md"
          style={{ height: "470px", width: "100%" }}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg ">
            <figure>
              <img
                src={singleUser?.image}
                alt="Shoes"
                className="w-full md:h-60 p-6 object-cover"
              />
            </figure>
            <div className="px-4">
              <h2 className="text-xl font-semibold py-2">{singleUser?.name}</h2>
              <p className="text-gray-600 flex items-center gap-3">
                <BsTelephone /> {singleUser?.phoneNumber}
              </p>
              <hr className="py-2" />
              <p className="text-gray-600 flex items-center gap-3">
                <MdEmail /> {singleUser?.email}
              </p>
              <hr className="py-2" />
              <p className="text-gray-600 flex items-center gap-3">
                <ImLocation2 /> {singleUser?.address}
              </p>
              <hr className="py-2" />
              <p className="text-gray-600 flex items-center gap-3">
                {singleUser?.bio}
              </p>
              <div className="text-right m-3">
                <button className="tooltip" onClick={handleEditButtonClick}>
                  <span className="tooltiptext">Edit</span>
                  <FaEdit />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: "470px", width: "100%" }}>
          {/* one */}
          <div className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg border">
            <div className="p-4">
              {/* user payment History */}
              <h2 className="text-xl font-semibold">User Pay Account</h2>
              <hr className="py-2" />
              <div className="flex justify-between">
                <p>My payment</p>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 ...  text-white font-semibold lg:py-2 lg:px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <Link to="/user-dashboard/userPaymentData">
                    payment History
                  </Link>
                </button>
              </div>
            </div>

            <div className="p-4">
              {/* user payment History */}
              <h2 className="text-xl font-semibold">User Book Account</h2>
              <hr className="py-2" />
              <div className="flex justify-between">
                <p>My Book</p>
                <button className="bg-gradient-to-r from-cyan-500 to-green-500 ...  text-white font-semibold lg:py-2 lg:px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <Link to="/user-dashboard/bought-books">Book History</Link>
                </button>
              </div>
              {/* user payment History */}
            </div>
          </div>

          {/* two */}
          <div className=" bg-white mt-8 border rounded-lg shadow-md overflow-hidden hover:shadow-lg">
            <div className="p-4">
              <h2 className="text-xl font-semibold">My Score</h2>
              <hr className="py-2" />
              <div className="flex justify-evenly">
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-black">
                  <span className="font-bold">Score</span>{" "}
                  <FaCoins className="text-yellow-500 text-2xl" />
                </p>
                <strong className=" text-xl text-secondary px-4">
                  {singleUser?.score}
                </strong>
              </div>
            </div>

            <div className="p-4">
              <h2 className="text-xl font-semibold">My Role</h2>
              <hr className="py-2" />
              <div className="flex justify-evenly">
                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-black">
                  <span className="font-bold">Role</span>
                </p>
                <strong className=" font-medium uppercase  items-center px-4">
                  {singleUser?.role}
                </strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Profile;
