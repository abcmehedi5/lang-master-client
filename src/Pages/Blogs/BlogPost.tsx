import React, { useContext, useState } from "react"; // Import React and specific types
import { AuthContext } from "../../Providers/AuthProvider";
import { IoMdPhotos } from "react-icons/io";
import { BsFillEmojiHeartEyesFill } from "react-icons/bs";
import BlogPostModal from "./BlogPostModal";

// Define types for user and AuthContext
interface User {
  photoURL: string;
  displayName: string;
}

interface AuthContextType {
  user: User | null;
}

const BlogPost: React.FC = () => {
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);

  const { user } = useContext<AuthContextType>(AuthContext);
  return (
    <div className="mt-5">
      <div
        onClick={() => setOpenPostModal(true)}
        style={{ boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" }}
        className="p-4 bg-base-100 rounded-xl "
      >
        <div className="flex items-center gap-3 p-1">
          {user ? (
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={user?.photoURL}
              alt="User"
            />
          ) : (
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="userpng"
              alt="User"
            />
          )}
          <div className="flex items-center  w-full">
            <div className="py-2 md:px-4 px-1 bg-base-200 rounded-full w-full cursor-pointer">
              <p>{`What's on your mind, ${
                user?.displayName.split(" ")[0]
              }?`}</p>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 text-xl p-2 hover:bg-base-200 rounded-lg">
            <IoMdPhotos className="text-[#45bd62]" /> Photo/video
          </button>
          <button className="flex items-center gap-2 text-xl p-2 hover:bg-base-200 rounded-lg">
            <BsFillEmojiHeartEyesFill className="text-[#f7b928]" />{" "}
            Feeling/activity
          </button>
        </div>
      </div>
      {openPostModal && <div className="overlayCustom" />}
      {openPostModal && (
        <BlogPostModal setOpenPostModal={setOpenPostModal}></BlogPostModal>
      )}
    </div>
  );
};

export default BlogPost;
