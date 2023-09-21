import React, { useContext, useState } from "react";
import "./Profile.css";
import { FaCoins, FaEdit, FaUserAlt } from "react-icons/fa";
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
  phoneNumber: string;
  score: number;
  image: string;
  role: string;
  state: string;
  birthday: string;
  gender: string;
}

const Profile: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const [data, setData] = useState<any>(null);
  const [singleUser, , refetch] = useUser();

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
      if (response.data.modifiedCount > 0) {
        toast("Successfully updated user profile:", response.data);
        refetch();
      }
    } catch (error) {
      toast.error("Error updating user profile");
      console.error("Error updating user profile:", error);
    }
  };

  return (
    <div className="px-4 py-8 md:px-20 md:py-16">
      <Helmet>
        <title> Profile | Lang Master </title>
      </Helmet>
      <div className="md:flex h-full gap-4 lg:gap-8 mt-5 border-2 rounded-2xl p-10 bg-gray-100 shadow">
        <div
          className="border rounded-lg shadow-md"
          style={{ height: "450px", width: "100%" }}
        >
          <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg ">
            <figure>
              <img
                src={singleUser?.image}
                alt="Profile Picture"
                className="w-full md:h-60 p-6 object-cover"
              />
            </figure>
            <div className="px-4">
              <div className="flex justify-between">
                <div>
                  <h2 className="text-xl font-semibold py-2 fontKalam">
                    {singleUser?.name}
                  </h2>
                  <p className="fontKalam text-[#757575] flex items-center gap-3">
                    {singleUser?.bio}
                  </p>
                </div>
                <div className="text-right m-3">
                  <button className="tooltip" onClick={handleEditButtonClick}>
                    <span className="tooltiptext">Edit</span>
                    <FaEdit className="text-xl" />
                  </button>
                </div>
              </div>
              <div className="mt-5">
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
              </div>
              <hr className="py-2" />
            </div>
          </div>
        </div>

        <div style={{ height: "450px", width: "100%" }}>
          {/* one */}
          <div className=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg border">
            <div className="p-4 space-y-5">
              {/* user payment History */}
              <div className="flex justify-between">
                <p className="text-xl fontKalam font-semibold">My payment</p>
                <button className="bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold w-48 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <Link to="/user-dashboard/userPaymentData">
                    Payment History
                  </Link>
                </button>
              </div>
              {/* users book  */}
              <div className="flex justify-between">
                <p className="text-xl fontKalam font-semibold">My Book</p>
                <button className="bg-gradient-to-r from-cyan-500 to-green-500 ...  text-white font-semibold w-48 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300">
                  <Link to="/user-dashboard/bought-books">Book History</Link>
                </button>
              </div>

              {/* users total coin  */}
              <div className="flex justify-between">
                <p className="text-xl fontKalam font-semibold flex items-center">
                  Total Coin:{" "}
                  <FaCoins className="text-yellow-500 text-2xl ml-2" />
                </p>
                <p
                  className="bg-gradient-to-r from-purple-500 to-teal-500
                text-white font-semibold w-48 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-center"
                >
                  {singleUser?.score}
                </p>
              </div>
              {/* role  */}
              <div className="flex justify-between">
                <p className="text-xl fontKalam font-semibold flex items-center">
                  My Role:{" "}
                  <FaUserAlt className="text-green-500 text-2xl ml-2" />
                </p>
                <p
                  className="bg-gradient-to-r from-red-500 to-yellow-500
                text-white font-semibold w-48 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-center uppercase"
                >
                  {singleUser?.role}
                </p>
              </div>
            </div>
          </div>

          {/* two */}
          <div className=" bg-white mt-8 border rounded-lg shadow-md overflow-hidden hover:shadow-lg">
            <div className="p-4 space-y-5">
              {/* user payment History */}
              <div className="flex justify-between">
                <p className="text-xl fontKalam font-semibold flex items-center">
                  Date of Birth:
                </p>
                <p
                  className="bg-gradient-to-r from-orange-500 to-lime-500
                text-white font-semibold w-48 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-center"
                >
                  {singleUser?.birthday}
                </p>
              </div>
              {/* users book  */}
              <div className="flex justify-between">
                <p className="text-xl fontKalam font-semibold flex items-center">
                  Gender:
                </p>
                <p
                  className="bg-gradient-to-r from-emerald-500 to-purple-500
                text-white font-semibold w-48 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-300 text-center"
                >
                  {singleUser?.gender}
                </p>
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
