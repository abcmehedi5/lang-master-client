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
          <label>
            <span className="block mt-3 px-2">Birthday</span>
            <input
              type="date"
              value={birthday}
              onChange={(e) => setBirthday(e.target.value)}
              className="w-full border rounded p-4"
            />
          </label>
          <label>
            <span className="block mt-3 px-2">Address</span>
            <input
              type="text"
              placeholder="Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full border rounded p-4"
            />
          </label>
          <label>
            <span className="block mt-3 px-2">Location</span>
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full border rounded p-4"
            />
          </label>
          <label>
            <span className="block mt-3 px-2">Your website</span>
            <input
              type="text"
              placeholder="Your website link"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              className="w-full border rounded p-4"
            />
          </label>

          <div className="my-3">
            <label>
              <select
                value={genderLevel}
                onChange={(e) => setGenderLevel(e.target.value)}
                className="border rounded p-4 w-full"
              >
                <option value="">English proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </label>
          </div>
          <div className="flex items-center space-x-4 text-xl">
            <label>
              <input
                type="radio"
                value="Male"
                className="mr-2"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                className="mr-2"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                className="mr-2"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Save
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
