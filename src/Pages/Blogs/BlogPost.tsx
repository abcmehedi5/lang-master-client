import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BlogPostModal from "./BlogPostModal";

const BlogPost: React.FC = () => {
  const [openPostModal, setOpenPostModal] = useState<boolean>(false);

  const { user }: any = useContext(AuthContext);

  // Split user's display name into words
  const userNameWords = user?.displayName.split(" ");
  // Take the first two words from the array
  const userName = userNameWords?.slice(0, 2).join(" ");

  return (
    <div className="md:w-[75%]">
      <div
        onClick={() => setOpenPostModal(true)}
        className="py-4 bg-base-100 rounded-xl"
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
            <div
              className="py-2 md:px-4 px-1 w-full cursor-pointer"
              style={{ borderBottom: '2px solid #999' }}
            >
              <p className="text-gray-400">{`What's on your mind, ${userName}?`}</p>
            </div>
          </div>
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
