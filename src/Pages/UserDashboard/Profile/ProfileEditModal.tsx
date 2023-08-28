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
      <div className="bg-white p-6 rounded-lg shadow-md relative w-1/2">
        <h2 className="text-lg font-semibold mb-4">Update Profile Info</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Your website"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="text"
            placeholder="Birthday"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
            className="w-full border rounded p-2"
          />
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                value="Male"
                checked={gender === "Male"}
                onChange={(e) => setGender(e.target.value)}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                value="Female"
                checked={gender === "Female"}
                onChange={(e) => setGender(e.target.value)}
              />
              Female
            </label>
            <label>
              <input
                type="radio"
                value="Other"
                checked={gender === "Other"}
                onChange={(e) => setGender(e.target.value)}
              />
              Other
            </label>
          </div>
          <div className="space-y-2">
            <label>
              Gender Level:
              <select
                value={genderLevel}
                onChange={(e) => setGenderLevel(e.target.value)}
                className="border rounded p-2 w-full"
              >
                <option value="">Select Gender Level</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
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
          <button
            className="px-4 py-2 ml-4 border rounded"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileEditModal;
