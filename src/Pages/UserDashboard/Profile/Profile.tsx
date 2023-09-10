import React, { useContext, useState } from "react";
import { MdPayments } from "react-icons/md";
import "./Profile.css";
import { FaCoins, FaEdit } from "react-icons/fa";
// import { BsPersonFillAdd } from "react-icons/bs";
import { Helmet } from "react-helmet-async";
import ProfileEditModal from "./ProfileEditModal";
import useUser from "../../../hooks/useUser";
import { Link } from "react-router-dom";
import { GrUserAdmin } from "react-icons/Gr";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { AuthContext } from "../../../Providers/AuthProvider";
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

// ---------------------------------

// interface SomeResponseType {
//   // Define the response type structure here
//   // Example: id: number; message: string;
// }
// ---------------------------------

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
      console.log("updated data", updatedData.name);
      const response = await axiosSecure.patch(
        `/users/update-user/${user?.email}`,
        { updatedData }
      );
      toast("Successfully updated user profile:", response.data);
    } catch (error) {
      toast.error("Error updating user profile");
      console.error("Error updating user profile:", error);
    }
    console.log(data);
  };

  return (
    <div className="profile">
      <Helmet>
        <title> Profile | Lang Master </title>
      </Helmet>
      <div className="mx-auto px-4  sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <section className="text-center">
          <div className="px-4 py-7 bg-image text-white">
            <div className="flex justify-between items-center">
              <div className="flex gap-10">
                <div className="indicator">
                  <span className="indicator-item indicator-bottom badge badge-success"></span>
                  <img
                    className="place-items-center object-cover rounded-xl border-4 w-12 h-12 md:w-32 md:h-32 lg:w-32 lg:h-32 md:ml-12"
                    src={singleUser?.image}
                    alt="profile picture"
                  />
                </div>
                {/* name and bio  */}
                <div className="mt-2 md:mt-6 lg:mt-6">
                  <p className="font-bold text-white text-md md:text-3xl mb-2">
                    {singleUser?.name}
                  </p>
                  <p className="text-gray-800 text-md md:text-3xl mb-2">
                    {singleUser?.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="dark-overlay">
            <div
              className="card mx-md-5 shadow-5-strong mx-4 md:mx-8 lg:mx-12 rounded-md md:-mt-20 -mt-52"
              style={{
                background: "hsla(0, 0%, 100%, 0.8)",
                backdropFilter: "blur(30px)",
              }}
            >
              <div className="card-body py-5 px-md-5 text-left">
                <div className="row">
                  <div className="col-lg-8">
                    <h2 className="font-bold mb-5 text-left ">About</h2>
                    {/* <p>{profile.description}</p> */}

                    <div className="md:flex gap-10">
                      {/* started card  */}
                      <div className="card md:w-1/2 border border-gray-400 hover:border-blue-600 cursor-pointer bg-white my-3">
                        <div className="card-body">
                          <div className="grid grid-cols-2">
                            <div>
                              <h2 className="text-4xl mb-3">Info</h2>
                            </div>
                            <div className="text-right m-3">
                              <button
                                className="tooltip"
                                onClick={handleEditButtonClick}
                              >
                                <span className="tooltiptext">Edit</span>
                                <FaEdit />
                              </button>
                            </div>
                          </div>

                          <div className="flex gap-3">
                            <div>
                              <h1 className="font-bold">Full Address:</h1>
                            </div>
                            <div>
                              <h1 className="text-[#2196f7]">
                                {singleUser?.address}
                              </h1>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div>
                              <h1 className="font-bold">Mobile Number:</h1>
                            </div>
                            <div>
                              <h1 className="text-[#2196f7]">
                                {singleUser?.phoneNumber}
                              </h1>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <div>
                              <h1 className="font-bold">Email:</h1>
                            </div>
                            <div>
                              <h1 className="text-[#2196f7]">
                                {singleUser?.email}
                              </h1>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2">
                            {/* <div>
                                <h1 className="font-bold">Location:</h1>
                              </div>
                              <div>
                                <h1>{profile.location}</h1>
                              </div> */}
                          </div>
                        </div>
                      </div>

                      <article className="mt-0 md:mt-6 lg:mt-6">
                        <h2 className="font-bold">Others Info</h2>
                        <ul className="mt-4 space-y-2">
                          <div className="flex gap-4">
                            {/* -------- score --------- */}
                            <li>
                              <a
                                href="#"
                                className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600 text-center"
                              >
                                <p className="mt-1 flex items-center gap-1 text-xs font-medium text-black">
                                  <span className="font-bold">Score</span>{" "}
                                  <FaCoins className="text-yellow-500 text-2xl" />
                                </p>
                                <strong className="font-medium text-black">
                                  {singleUser?.score}
                                </strong>
                              </a>
                            </li>
                            {/* -------- role --------- */}
                            <li>
                              <a
                                href="#"
                                className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                              >
                                <p className="font-bold text-black">Role</p>
                                <strong className="font-medium text-gradient flex gap-2 uppercase  items-center">
                                  {singleUser?.role}
                                  <GrUserAdmin />
                                </strong>
                              </a>
                            </li>
                            {/* user payment History */}
                            <li>
                              <Link
                                to="/user-dashboard/userPaymentData"
                                className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                              >
                                <strong className="font-medium text-gradient uppercase  items-center">
                                  Payment History
                                </strong>
                              </Link>
                            </li>
                            {/* user payment History */}

                            {/* user Book History */}
                            <li>
                              <Link
                                to="/user-dashboard/bought-books"
                                className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600 text-gradient"
                              >
                                {" "}
                                Book Collection
                              </Link>
                            </li>
                          </div>
                        </ul>
                      </article>
                    </div>
                  </div>
                  {/* <article className="mt-0 md:mt-6 lg:mt-6">
                    <h2 className="font-bold">Add friends</h2>
                    <ul className="mt-4 space-y-2">
                      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                        <li>
                          <a
                            href="#"
                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                          >
                            <strong className="font-medium text-black">
                              <MdFindReplace />
                            </strong>
                            <span className="font-medium">Find friends</span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                          >
                            <strong className="font-medium text-black">
                              <BsPersonFillAdd />
                            </strong>
                            <strong className="font-medium text-black">
                              Invite friends
                            </strong>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/"
                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                          >
                            <strong className="font-medium text-black">
                              Contact to
                            </strong>
                            <p className="mt-1 text-xs font-medium text-black flex">
                              Facebook{" "}
                              <FaFacebook className="mt-1 ml-1 text-blue-500" />
                            </p>
                          </a>
                        </li>
                      </div>
                    </ul>
                  </article> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Profile;
