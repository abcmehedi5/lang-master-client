import { useEffect, useState } from "react";
import { MdLocationPin } from 'react-icons/md';
import { TbBuildingEstate } from 'react-icons/tb';
import "./Profile.css";
import { FaClock } from "react-icons/fa";

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
            <div className="mx-auto md:max-w-none px-4 max-w-7xl sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
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
                                    alt=""
                                    />
                                </div>
                                <div className="mt-6">
                                    <p className="font-bold text-white font-pj text-md md:text-3xl lg:text-3xl mb-2">
                                        {profile.name}
                                    </p>
                                    <p className="mt-0.5 text-[11px] md:text-sm lg:text-sm font-pj text-white">
                                        {profile.passion}
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                                        <p className="mt-0.5 text-sm font-pj  me-5 flex text-white">
                                            <span className="my-1 me-1"><TbBuildingEstate></TbBuildingEstate></span>{profile.state}
                                        </p>
                                        <p className="mt-0.5 text-sm font-pj flex">
                                            <span className="me-1 my-1"><MdLocationPin></MdLocationPin></span>{profile.location}
                                        </p>
                                    </div>
                                    <div className="flex text-center mt-2">
                                        <p className="font-pj me-5">
                                            <span className="text-lg font-bold">{profile.followers}</span>
                                            <p className="text-sm">Followers</p>
                                        </p>
                                        <p className="font-pj">
                                            <span className="text-lg font-bold">{profile.following}</span>
                                            <p className="text-sm">Followings</p>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mx-4">
                                <div className="flex mb-3 text-right text-[11px]">
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
                            <div className="card-body py-5 px-md-5">
                                <div className="row d-flex justify-content-center">
                                    <div className="col-lg-8">
                                        <h2 className="fw-bold mb-5">Registration now</h2>
                                        <form>
                                        <div className="mb-4">
                                            <input type="text" id="form3Example1" placeholder="Name" name='name' className="form-control" />
                                        </div>

                                        <div className="mb-4">
                                            <input type="email" name='email' id="form3Example3" placeholder="Email address" className="form-control" />
                                        
                                        </div>

                                
                                        <div className="form-check d-flex justify-content-center mb-4">
                                            <input
                                            className="me-2 custom-checkbox"
                                            type="checkbox"
                                            id="form2Example33"
                                        
                                            />
                                            <label htmlFor="form2Example33" className="form-check-label">
                                            I agree to the terms and conditions
                                            </label>
                                        </div>
                                        {/* <button type="submit" className="btn-block mb-4 bg-warning text-white py-2">
                                            Register Now
                                        </button> */}
                                        </form>
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


