



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
