import React, { useContext, useState } from "react";
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
import { ImLocation2 } from "react-icons/im";
import { BsTelephone } from "react-icons/bs";
import { MdEmail, MdOutlinePayments } from "react-icons/md";
import { IoBookSharp } from "react-icons/io5";

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
    <div>
      <Helmet>
        <title> Profile | Lang Master </title>
      </Helmet>
      <div className="bg-image relative">
        <div className="absolute md:-bottom-20 -bottom-6 left-0">
          <div className="indicator">
            <span className="indicator-item indicator-bottom badge badge-success"></span>
            <img
              className="place-items-center object-cover rounded-full border-4 w-16 h-16 md:w-44 md:h-44  md:ml-12"
              src={singleUser?.image}
              alt="profile picture"
            />
          </div>
        </div>
      </div>

      <section >
        <div className="dark-overlay mt-12">
          <div>
            <div className=" py-5 px-md-5 text-left">
              <div>
                <div className="col-lg-8">
                  {/* name and bio  */}
                  <div className="mt-2 md:mt-6 lg:mt-6">
                    <p className="font-bold text-md md:text-3xl mb-2">
                      {singleUser?.name}
                    </p>
                    <p className="text-gray-800 text-md md:text-xl mb-2">
                      {singleUser?.bio}
                    </p>

                    <div className="flex gap-4">
                      {/* user payment History */}
                      <p>
                        <Link
                          to="/user-dashboard/userPaymentData"
                        >
                          <strong className=" text-[#053B50] text-xl items-center hover:">
                            <MdOutlinePayments />
                          </strong>
                        </Link>
                      </p>
                      {/* user payment History */}
                      {/* user Book History */}
                      <p>
                        <Link
                          to="/user-dashboard/bought-books"
                          className="text-[#053B50]  text-xl items-center"
                        >
                          {" "}
                          <IoBookSharp />
                        </Link>
                      </p>
                    </div>
                  </div>


                  <div className="md:flex gap-10">
                    {/* started card  */}
                    <div className="cursor-pointer my-3">
                      <div>
                        <div >
                          <div>
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
                            <h1 className="font-bold"><ImLocation2 /></h1>
                          </div>
                          <div>
                            <h1 className="">
                              {singleUser?.address}
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div>
                            <h1 className="font-bold"><BsTelephone /></h1>
                          </div>
                          <div>
                            <h1 className="">
                              {singleUser?.phoneNumber}
                            </h1>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div>
                            <h1 className="font-bold"><MdEmail /></h1>
                          </div>
                          <div>
                            <h1 className="text-[#64CCC5]">
                              {singleUser?.email}
                            </h1>
                          </div>
                        </div>
                      </div>
                    </div>

                    <article className="mt-0 md:mt-6 lg:mt-6">

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
                              <strong className="font-medium  flex gap-2 uppercase  items-center">
                                {singleUser?.role}
                                <GrUserAdmin />
                              </strong>
                            </a>
                          </li>
                        </div>
                      </ul>
                    </article>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <ProfileEditModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSubmit={handleModalSubmit}
      />
    </div>
  );
};

export default Profile;
