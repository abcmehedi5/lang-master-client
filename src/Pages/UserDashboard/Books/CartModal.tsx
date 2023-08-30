import React, { useState } from "react";

interface ProfileData {
  address: string;
  location: string;
  site: string;
  birthday: string;
  gender: string;
  genderLevel: string;
}

interface ProfileEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ProfileData) => void;
}

const ProfileEditModal: React.FC<ProfileEditModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [address, setAddress] = useState("");
  const [location, setLocation] = useState("");
  const [site, setSite] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [genderLevel, setGenderLevel] = useState("");

  const handleSubmit = () => {
    const data: ProfileData = {
      address,
      location,
      site,
      birthday,
      gender,
      genderLevel,
    };
    onSubmit(data);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-6 rounded-lg shadow-md relative md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Update Profile Info</h2>
        <div className="space-y-4">
 

        <a href="#" className="group block">
            <img
                src="https://images.unsplash.com/photo-1592921870789-04563d55041c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-3 flex justify-between text-sm">
                <div>
                <h3
                    className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                    Small Headphones
                </h3>

                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi nobis,
                    quia soluta quisquam voluptatem nemo.
                </p>
                </div>

                <p className="text-gray-900">$299</p>
            </div>
            </a>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded"
            onClick={handleSubmit}
          >
            Add Confirm
          </button>
          <button className="px-4 py-2 ml-4 border rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
