import React, { useState, useContext } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import useBlogData from "../../../hooks/useBlogData";
import { AuthContext } from "../../../Providers/AuthProvider";
import LikeModal from "../LikeModal";

interface LikeProps {
  postId: number;
  like: number;
  likedUsers: { email: string; liked: boolean, userImg: string, username: string }[];
}

const Like: React.FC<LikeProps> = ({ postId, like, likedUsers }) => {
  console.log("likedUsers", likedUsers);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  // const [userLiked, setUserLiked] = useState<boolean>(false);
  const { refetch } = useBlogData();
  const { user } = useContext(AuthContext);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const likeData = async (): Promise<void> => {
    // ---------- user liked this ----------
    try {
      // Include user information in the request body
      const userData = {
        username: user?.displayName, // Remove curly braces here
        email: user?.email,
        liked: true,
        userImg: user?.photoURL,
      };

      // Send a POST request to the server with user information
      const res = await axios.put(`http://localhost:5000/blogs/blog/${postId}/like`, userData);

      console.log(res);
      if (res.status === 200) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Liked!",
          text: "You've liked this post.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    } catch (error) {
      // Show an error message if an exception occurs
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
        // disabled={userLiked} // Disable the button if the user has already liked the post
      >
        {likedUsers?.length > 0 ? (
          <>
            <div className="text-3xl items-center flex">
              {likedUsers.some((user) => user.email === user.email && user.liked) ? (
                <AiFillHeart className="text-rose-500" />
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
          onClick={() => toggleModal()} // Open the modal on click
        >
          see who liked
        </span>
      ) : (
        ""
      )}

      {/* Render the LikeModal component */}
      <LikeModal isOpen={modalIsOpen} onRequestClose={toggleModal} likedUsers={likedUsers} />
    </div>
  );
};

export default Like;
