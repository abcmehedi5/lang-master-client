import React, { useState, useContext } from "react";
import Swal from "sweetalert2";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { AuthContext } from "../../../Providers/AuthProvider";
import LikeModal from "../LikeModal";
import useSingleBlogData from "../../../hooks/useSingleBlogData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

interface LikeProps {
  postId: number;
  like: number;
  likedUsers: {
    email: string;
    liked: boolean;
    userImg: string;
    username: string;
  }[];
}

const Like: React.FC<LikeProps> = ({ postId, likedUsers }) => {
  const [axiosSecure] = useAxiosSecure();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const { refetch } = useSingleBlogData(postId);
  const { user }: any = useContext(AuthContext);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const likeData = async (): Promise<void> => {
    // ---------- user liked this ----------
    try {
      // Include user information in the request body
      const userData = {
        username: user?.displayName,
        email: user?.email,
        liked: true,
        userImg: user?.photoURL,
      };

      // Send a POST request to the server with user information
      const res = await axiosSecure.put(`/blogs/blog/${postId}/like`, userData);

      if (res.status === 200) {
        refetch();
        setUserLiked(true);

        // Set userLiked back to false after 1 second
        setTimeout(() => {
          setUserLiked(false);
        }, 500);
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Please try again🙂",
      });
      console.error(error);
    }
  };

  return (
    <div className="text-2xl flex items-center gap-3">
      <button
        className="flex items-center font-semibold text-xl"
        onClick={() => likeData()}
      >
        {likedUsers?.length > 0 ? (
          <>
            <div className="text-3xl items-center flex">
              {likedUsers.some((likeuser) => likeuser.email === user?.email) ? (
                <>
                  {userLiked ? (
                    <AiFillHeart className="text-rose-500 transition ease-linear scale-125 duration-100" />
                  ) : (
                    <AiFillHeart className="text-rose-500" />
                  )}
                </>
              ) : (
                <AiOutlineHeart />
              )}
              {likedUsers?.length}
            </div>
          </>
        ) : (
          <span className="text-3xl items-center flex">
            <AiOutlineHeart />
            {likedUsers?.length}
          </span>
        )}
      </button>
      {likedUsers ? (
        <span
          className="text-lg hover:underline cursor-pointer text-gray-400"
          onClick={() => toggleModal()}
        >
          see who liked
        </span>
      ) : (
        ""
      )}

      <LikeModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        likedUsers={likedUsers}
      />
    </div>
  );
};

export default Like;
