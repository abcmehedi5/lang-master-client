// LikeModal.tsx
import React from "react";
import Modal from "react-modal";

interface LikeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  likedUsers: { username: string; email: string; userImg: string }[]; // Update the type based on your data structure
}

const modalStyles = {
  content: {
    width: "40%", // Adjust the width as needed
    height: "40%", // Adjust the height as needed
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const LikeModal: React.FC<LikeModalProps> = ({
  isOpen,
  onRequestClose,
  likedUsers,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Liked Users"
      style={modalStyles} // Apply custom styles
    >
      <h2 className="text-xl font-bold">Liked by</h2>
      <ul>
        {likedUsers?.map((user, index) => (
          <>
            {" "}
            <li key={index} className="flex gap-2 items-center mt-4">
              <img
                className="w-14 h-14 object-cover rounded-full"
                src={user?.userImg}
                alt=""
              />
              <strong>Username:</strong> {user.username}
              <br />
              {/* <strong>Email:</strong> {user.email} */}
            </li>
          </>
        ))}
      </ul>
    </Modal>
  );
};

export default LikeModal;
