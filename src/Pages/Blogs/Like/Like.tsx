import React, { useState } from "react";
import { BiLike } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";
import { AiFillHeart, AiOutlineHeart, AiTwotoneLike } from "react-icons/ai";

interface LikeProps {
  postId: string;
  like: number;
}

const Like: React.FC<LikeProps> = ({ postId }) => {
  const [like, setLike] = useState(false);
  // const [like, setLike] = useState<number>(0);
  const [likeActive, setLikeActive] = useState<boolean>(false);
  // const [isLiked, setIsLiked] = useState<boolean>(false);
  // const likeData = async () => {
  //   setLikes(likes + 1)
  //   setLikeActive(true);
  //   // setIsLiked(true);

  //   try {
  //     // Send a PATCH request to update the like count
  //     await axios.patch(`http://localhost:5000/blog/like/${postId}`, {
  //       like: likes, // Increment the like count
  //     });
  //     // Check if the request was successful (status code 200)
  //     // if (response.status === 200) {
  //     //   setLikes(likes + 1); // Update the local state
  //     //   setLikeActive(true);
  //     //   setIsLiked(true);
  //     //   Swal.fire({
  //     //     icon: "success",
  //     //     title: "Liked!",
  //     //     text: "You've liked this post.",
  //     //   });
  //     // } else {
  //     //   // Show an error message if the request is not successful
  //     //   Swal.fire({
  //     //     icon: "error",
  //     //     title: "Oops...",
  //     //     text: "Something went wrong! Please try again🙂",
  //     //   });
  //     // }
  //   } catch (error) {
  //     // Show an error message if an exception occurs
  //     Swal.fire({
  //       icon: "error",
  //       title: "Oops...",
  //       text: "Something went wrong! Please try again🙂",
  //     });
  //     console.error(error);
  //   }
  // };
  const likeData = async () => {
    setLike(!like);
    setLikeActive(!likeActive);

    // try {
    //   // Send a PATCH request to update the like count
    //   await axios.patch(`http://localhost:5000/blogs/blog/${postId}`,
    //    {
    //     like: 1, // Increment the like count by 1
    //   }
    //   );
    //   // Update the local state and set likeActive to true
    //   setLike(like + 1);
    //   setLikeActive(true);
    //   Swal.fire({
    //     icon: "success",
    //     title: "Liked!",
    //     text: "You've liked this post.",
    //   });
    // } catch (error) {
    //   // Show an error message if an exception occurs
    //   Swal.fire({
    //     icon: "error",
    //     title: "Oops...",
    //     text: "Something went wrong! Please try again🙂",
    //   });
    //   console.error(error);
    // }
  };

  console.log(like)

  return (
    <div className="text-2xl">
      <button
        className= "flex items-center font-semibold text-xl"
        onClick={likeData}
        // disabled={likeActive} // Disable the button when already liked
      >
        <span className="text-4xl gap-1 items-center flex">
          {likeActive ? <AiFillHeart className='text-rose-500' /> : <AiOutlineHeart />}
          {like ? 1 : 0}
        </span>
      </button>
    </div>
  );
};

export default Like;
