import React from "react";
import { useForm, Controller } from "react-hook-form";

interface ProfileData {
  name: string;
  bio: string;
  address: string;
  phoneNumber: number;
  birthday: string;
  gender: string;
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
  const { control, handleSubmit } = useForm<ProfileData>();

  const onSubmitForm = (formData: ProfileData) => {
    onSubmit(formData);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-6 rounded-lg shadow-md relative md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Edit Your Profile</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <div className="space-y-4">
            {/* username  */}
            <label>
              <span className="block mt-3 px-2">User Name</span>
              <Controller
                name="name"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-4"
                  />
                )}
              />
            </label>
            {/* bio  */}
            <label>
              <span className="block mt-3 px-2">Short Bio</span>
              <Controller
                name="bio"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    className="w-full border rounded p-4"
                  />
                )}
              />
            </label>

            {/* birthday */}
            <label>
              <span className="block mt-3 px-2">Birthday</span>
              <Controller
                name="birthday"
                control={control}
                render={({ field }) => (
                  <input
                    type="date"
                    {...field}
                    className="w-full border rounded p-4"
                  />
                )}
              />
            </label>

            {/* Address*/}
            <label>
              <span className="block mt-3 px-2">Address</span>
              <Controller
                name="address"
                control={control}
                render={({ field }) => (
                  <input
                    type="text"
                    placeholder="Address"
                    {...field}
                    className="w-full border rounded p-4"
                  />
                )}
              />
            </label>
            {/* Phone Number*/}
            <label>
              <span className="block mt-3 px-2">Phone Number</span>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    placeholder="number"
                    {...field}
                    className="w-full border rounded p-4"
                  />
                )}
              />
            </label>

            {/* <div className="my-3">
              <label>
              <span className="block mt-3 px-2">Learning Level</span>
                <Controller
                  name="learningLevel"
                  control={control}
                  render={({ field }) => (
                    <select
                      {...field}
                      className="border rounded p-4 w-full"
                    >
                      <option value="">English proficiency</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  )}
                />
              </label>
            </div> */}

            <div className="flex items-center space-x-4 text-xl">
              {/* gender*/}
              <label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        type="radio"
                        value="Male"
                        className="mr-2"
                        checked={field.value === "Male"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      Male
                    </>
                  )}
                />
              </label>
              <label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        type="radio"
                        value="Female"
                        className="mr-2"
                        checked={field.value === "Female"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      Female
                    </>
                  )}
                />
              </label>

              <label>
                <Controller
                  name="gender"
                  control={control}
                  render={({ field }) => (
                    <>
                      <input
                        type="radio"
                        value="Other"
                        className="mr-2"
                        checked={field.value === "Other"}
                        onChange={(e) => field.onChange(e.target.value)}
                      />
                      Other
                    </>
                  )}
                />
              </label>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded"
            >
              Save
            </button>
            <button
              className="px-4 py-2 ml-4 border border-orange-500 rounded"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileEditModal;
