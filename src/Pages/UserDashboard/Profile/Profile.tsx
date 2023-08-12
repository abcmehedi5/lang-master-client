import { useEffect, useState } from "react";
import { MdLocationPin } from 'react-icons/md';
import "./Profile.css";

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
                    className="p-5 bg-image text-white"
                    >
                        <div className="flex">
                            <div className="flex items-center mt-8 text-left">
                                <img
                                className="flex-shrink-0 object-cover rounded-full w-12 h-12 md:w-32 md:h-32 lg:w-32 lg:h-32 ml-4"
                                src={profile.image}
                                alt=""
                                />
                                <div className="ml-4">
                                    <p className="font-bold text-blue-900 font-pj text-3xl">
                                        {profile.name}
                                    </p>
                                    <p className="mt-0.5 text-sm font-pj text-gray-900">
                                        {profile.passion}
                                    </p>
                                    <p className="mt-0.5 text-sm font-pj text-gray-900 flex">
                                        <span className="me-1 my-1"><MdLocationPin></MdLocationPin></span>{profile.location}
                                    </p>
                                </div>
                            </div>
                            <div className="text-right">
                                <h2>hh</h2>
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
                                        <button type="submit" className="btn-block mb-4 bg-warning text-white py-2">
                                            Register Now
                                        </button>
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


