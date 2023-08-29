import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
// import { BiSearch } from 'react-icons/bi';
import { IoMdPhotos } from 'react-icons/io';
import { RiLiveFill } from 'react-icons/ri';
import { BsFillEmojiHeartEyesFill } from 'react-icons/bs';
import BlogPostModal from "./BlogPostModal";

const BlogPost = () => {
    const [openPostModal, setOpenPostModal] = useState(false)

    const { user } = useContext(AuthContext)

  return (
    <div>
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
            />
          ) : (
            <img
              className="w-10 h-10 object-cover rounded-full"
              src={userpng}
            />
          )}
          <div className="flex items-center  w-full">
            <div className="py-2 md:px-4 px-1 bg-base-200 rounded-full w-full cursor-pointer">
                <p>{`What's on your mind, ${
                user?.displayName.split(" ")[0]
              }?`}</p>
            </div>
            {/* <input
              type="text"
              name="text"
              className="py-2 md:px-4 px-1 bg-base-200 rounded-full w-full"
              placeholder={`What's on your mind, ${
                user?.displayName.split(" ")[0]
              }?`}
            /> */}
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex items-center gap-2">
          {/* live vedio */}
          {/* photos or vedios */}
          <button className="flex items-center gap-2 text-xl p-2 hover:bg-base-200 rounded-lg">
            <IoMdPhotos className="text-[#45bd62]" /> Photo/video
          </button>
          {/* feelings */}
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
