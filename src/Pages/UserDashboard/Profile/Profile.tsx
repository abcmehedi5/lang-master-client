import { useEffect, useState } from "react";
import { MdFindReplace, MdLocationPin } from 'react-icons/md';
import { TbBuildingEstate } from 'react-icons/tb';
import "./Profile.css";
import { FaClock, FaEdit, FaFacebook } from "react-icons/fa";
import { BsPersonFillAdd } from "react-icons/bs";

interface Profile {
    _id: string;
    name: string;
    rating: number;
    details: string;
    description: string;
    image: string;
    passion: string;
    location: string;
    joiningDate: Date;
    email: string;
    following: number;
    followers: number;
    mobileNumber: number;
    state:string;
  }

const Profile = () => {
    const [profiles, setProfiles] = useState<Profile[]>([]);

    useEffect(() => {
        fetch("../../../../public/users.json")
          .then((res) => res.json())
          .then((data) => setProfiles(data))
          .catch((error) => console.error(error));
      }, []);
      
      const slicedProfiles = profiles.slice(0, 1);
    return (
        <div className="profile">
             {slicedProfiles.map((profile) => (
            <div key={profile._id} className="mx-auto md:max-w-none px-4 max-w-7xl sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
                <section className="text-center">
                    <div
                    className="p-4 bg-image text-white"
                    >
                        <div className="flex justify-between items-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 items-center text-left">
                                <div>
                                    <img
                                    className="object-cover rounded-full w-12 h-12 md:w-32 md:h-32 lg:w-32 lg:h-32 md:ml-12"
                                    src={profile.image} 
                                    alt=""></img>
                                    
                                </div>
                                <div className="mt-2 md:mt-6 lg:mt-6">
                                    <p className="font-bold text-white font-pj text-md md:text-3xl lg:text-3xl mb-2">
                                        {profile.name}
                                    </p>
                                    <p className="mt-0.5 text-[11px] md:text-sm lg:text-sm font-pj text-white">
                                        {profile.passion}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                        <span className="mt-0.5 text-sm font-pj me-5 flex text-white">
                                            <span className="my-1 me-1"><TbBuildingEstate /></span>{profile.state}
                                        </span>
                                        <span className="mt-0.5 text-sm font-pj flex">
                                            <span className="me-1 my-1"><MdLocationPin /></span>{profile.location}
                                        </span>
                                    </div>
                                    <div className="flex text-center mt-2">
                                        <span className="font-pj me-5">
                                            <span className="text-lg font-bold">{profile.followers}</span>
                                            <p className="text-sm">Followers</p>
                                        </span>
                                        <span className="font-pj">
                                            <span className="text-lg font-bold">{profile.following}</span>
                                            <p className="text-sm">Followings</p>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-4">
                                <div className="flex mb-3 text-[11px]">
                                    <span className="my-1 me-1 mx-4 text-md"><FaClock></FaClock></span>Joined {profile.joiningDate}
                                </div>
                                <button className="bg-white hover:bg-gray-100 text-black font-bold py-1 px-2 md:py-2 md:px-4 rounded text-[9px] md:text-sm">
                                    + Follow
                                </button>
                            </div>
                        </div>
                    </div>
                        <div className="dark-overlay">
                            <div
                            className="card mx-md-5 shadow-5-strong mx-4 md:mx-8 lg:mx-12 rounded-md"
                            style={{
                                marginTop: '-100px',
                                background: 'hsla(0, 0%, 100%, 0.8)',
                                backdropFilter: 'blur(30px)',
                            }}
                            >
                            <div className="card-body py-5 px-md-5 text-left">
                                <div className="row">
                                    <div className="col-lg-8">
                                        <h2 className="font-bold mb-5 text-left ">About</h2>
                                        <p>{profile.description}</p>
                                       
                                          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                                             {/* started card  */}
                                            <div className="card w-auto border border-gray-400 hover:border-blue-600 cursor-pointer bg-white my-6">
                                                <div className="card-body">
                                                    <div className="grid grid-cols-2">
                                                        <div>
                                                            <h2 className="text-4xl mb-3">Info</h2>
                                                        </div>
                                                        <div className="text-right m-3">
                                                            <button className="tooltip" > <span className="tooltiptext">Edit</span>
                                                            <FaEdit></FaEdit></button>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                        <div>
                                                            <h1 className="font-bold">Full Name:</h1>
                                                        </div>
                                                        <div>
                                                            <h1>{profile.name}</h1>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                        <div>
                                                            <h1 className="font-bold">Mobile Number:</h1>
                                                        </div>
                                                        <div>
                                                            <h1>{profile.mobileNumber}</h1>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                        <div>
                                                            <h1 className="font-bold">Email:</h1>
                                                        </div>
                                                        <div>
                                                            <h1>{profile.email}</h1>
                                                        </div>
                                                    </div>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                                        <div>
                                                            <h1 className="font-bold">Location:</h1>
                                                        </div>
                                                        <div>
                                                            <h1>{profile.location}</h1>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <article className="mt-0 md:mt-6 lg:mt-6">
                                            <h2 className="font-bold">Statistics</h2>
                                            <ul className="mt-4 space-y-2">
                                               <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black">0</strong>

                                                            <p className="mt-1 text-xs font-medium text-black">
                                                            Day streak
                                                            </p>
                                                        </a>
                                                    </li>
                                                    
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black">0</strong>

                                                            <p className="mt-1 text-xs font-medium text-black">
                                                            Total xp
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black">None</strong>

                                                            <p className="mt-1 text-xs font-medium text-black">
                                                            Current League
                                                            </p>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black">0</strong>

                                                            <p className="mt-1 text-xs font-medium text-black">
                                                            Top 3 finishes
                                                            </p>
                                                        </a>
                                                    </li>
                                               </div>

                                             
                                            </ul>
                                            </article>
                                            <article className="mt-0 md:mt-6 lg:mt-6">
                                            <h2 className="font-bold">Add friends</h2>
                                            <ul className="mt-4 space-y-2">
                                               <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black"><MdFindReplace></MdFindReplace></strong>
                                                            <span className="font-medium">Find friends</span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="#"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black"><BsPersonFillAdd></BsPersonFillAdd></strong>
                                                            <strong className="font-medium text-black">Invite friends</strong>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            href="https://www.facebook.com/"
                                                            className="block h-full rounded-lg border border-gray-400 p-4 hover:border-blue-600"
                                                        >
                                                            <strong className="font-medium text-black">Contact to</strong>

                                                            <p className="mt-1 text-xs font-medium text-black flex">
                                                            Facebook <FaFacebook className="mt-1 ml-1 text-blue-500"></FaFacebook>
                                                            </p>
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
            </div>
            ))}
        </div>
    );
};

export default Profile;


