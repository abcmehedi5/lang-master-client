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
  // likedUsers: string[];
}

const Like: React.FC<LikeProps> = ({ postId, like, likedUsers }) => {
  console.log("likedUsers", likedUsers);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [userLiked, setUserLiked] = useState<boolean>(false);
  const { refetch } = useBlogData();
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(likedUsers);

  // done liked user
  // if (likedUsers && likedUsers.length > 0) {
  //   if (likedUsers.find(userlike => userlike?.email === user?.email)) {
  //     setUserLiked(true);
  //   } else {
  //     setUserLiked(false);
  //   }
  // }

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
      await axios
        .put(`http://localhost:5000/blogs/blog/${postId}/like`, userData)
        .then((res) => {
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
        });
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

  // const likeData = async (): Promise<void> => {
  //   try {
  //     // Check if the user's email is in the likedUsers array
  //     const isUserLiked = likedUsers.find((user) => user.email === user?.email);

  //     // If the user has already liked the post, do nothing
  //     if (isUserLiked) {
  //       return;
  //     }

  //     // Include user information in the request body
  //     const userData = {
  //       username: user?.displayName,
  //       email: user?.email,
  //       liked: true,
  //       userImg: user?.photoURL,
  //     };

  //     // Send a POST request to the server with user information
  //     await axios
  //       .put(`http://localhost:5000/blogs/blog/${postId}/like`, userData)
  //       .then((res) => {
  //         if (res.status === 200) {
  //           refetch();
  //           setUserLiked(true); // Set userLiked to true when the user likes the post
  //           Swal.fire({
  //             position: "top-end",
  //             icon: "success",
  //             title: "Liked!",
  //             text: "You've liked this post.",
  //             showConfirmButton: false,
  //             timer: 1500,
  //           });
  //         }
  //       });
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

  return (
    <div className="text-2xl flex items-center gap-3">
      <button
        className="flex items-center font-semibold text-xl"
        onClick={() => likeData()}
        disabled={userLiked} // Disable the button if the user has already liked the post
      >

  {likedUsers?.length > 0 ? <>
    <div className="text-4xl items-center flex">
        {likedUsers.find(user => user.email === user.email && user.liked === true) ? <AiFillHeart className="text-rose-500" /> :  <AiOutlineHeart /> }
        {likedUsers?.length ? likedUsers?.length : 0}
</div>
</> :
<span className="text-4xl items-center flex">
          
            <AiOutlineHeart />
        
          {likedUsers?.length ? likedUsers?.length : 0}
        </span>
}


        {/* <span className="text-4xl items-center flex">
          {likedUsers ? (
            <AiFillHeart className="text-rose-500" />
          ) : (
            <AiOutlineHeart />
          )}
          {likedUsers?.length ? likedUsers?.length : 0}{" "}
        </span> */}
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
      <LikeModal
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        likedUsers={likedUsers}
      />
    </div>
  );
};

export default Like;

// const donelikeduser = likedUsers?.find(userlike => userlike?.email === user?.email)
// console.log(donelikeduser);

// try {
//   // Send a PATCH request to update the like count
//   axios
//     .patch(`http://localhost:5000/blogs/blog/${postId}`, {
//       like: like + 1,
//     })
//     .then((res) => {
//       refetch();
//       console.log("post", res.data);
//       // setLikeActive(true);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Liked!",
//         text: "You've liked this post.",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       // ---------- user liked this ----------
//       try {
//         // Include user information in the request body
//         const userData = {
//           username: user?.displayName, // Remove curly braces here
//           email: user?.email,
//           liked: true
//         };

//         // Send a POST request to the server with user information
//         const res = axios.put(
//           `http://localhost:5000/blogs/blog/${postId}/like`,
//           userData
//         );

//         // Handle the response and update the like status
//         if (res.status === 200) {
//           refetch();
//           console.log("post", res.data);

//           // Update the state and store the like status in local storage
//           // setLikeActive(true);
//           localStorage.setItem(`likeActive-${postId}`, JSON.stringify(true));

//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Liked!",
//             text: "You've liked this post.",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         } else {
//           // Handle errors if the API request fails
//           console.error("API request failed:", res.data);
//         }
//       } catch (error) {
//         // Show an error message if an exception occurs
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong! Please try again🙂",
//         });
//         console.error(error);
//       }

//     })
//     .catch((error) => {
//       console.error("Post request failed:", error);
//     });
// } catch (error) {
//   // Show an error message if an exception occurs
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong! Please try again🙂",
//   });
//   console.error(error);
// } // try {
//   // Send a PATCH request to update the like count
//   axios
//     .patch(`http://localhost:5000/blogs/blog/${postId}`, {
//       like: like + 1,
//     })
//     .then((res) => {
//       refetch();
//       console.log("post", res.data);
//       // setLikeActive(true);
//       Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Liked!",
//         text: "You've liked this post.",
//         showConfirmButton: false,
//         timer: 1500,
//       });
//       // ---------- user liked this ----------
//       try {
//         // Include user information in the request body
//         const userData = {
//           username: user?.displayName, // Remove curly braces here
//           email: user?.email,
//           liked: true
//         };

//         // Send a POST request to the server with user information
//         const res = axios.put(
//           `http://localhost:5000/blogs/blog/${postId}/like`,
//           userData
//         );

//         // Handle the response and update the like status
//         if (res.status === 200) {
//           refetch();
//           console.log("post", res.data);

//           // Update the state and store the like status in local storage
//           // setLikeActive(true);
//           localStorage.setItem(`likeActive-${postId}`, JSON.stringify(true));

//           Swal.fire({
//             position: "top-end",
//             icon: "success",
//             title: "Liked!",
//             text: "You've liked this post.",
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         } else {
//           // Handle errors if the API request fails
//           console.error("API request failed:", res.data);
//         }
//       } catch (error) {
//         // Show an error message if an exception occurs
//         Swal.fire({
//           icon: "error",
//           title: "Oops...",
//           text: "Something went wrong! Please try again🙂",
//         });
//         console.error(error);
//       }

//     })
//     .catch((error) => {
//       console.error("Post request failed:", error);
//     });
// } catch (error) {
//   // Show an error message if an exception occurs
//   Swal.fire({
//     icon: "error",
//     title: "Oops...",
//     text: "Something went wrong! Please try again🙂",
//   });
//   console.error(error);
// }
