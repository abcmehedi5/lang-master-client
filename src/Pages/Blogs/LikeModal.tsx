import React from "react";
import Modal from "react-modal";

interface LikeModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  likedUsers: { username: string; email: string; userImg: string }[];
}

const modalStyles = {
  content: {
    width: "80%", // Adjusted width for mobile devices
    maxWidth: "600px", // Added maximum width to ensure readability
    height: "60%", // Adjusted height for mobile devices
    margin: "auto", // Centering the modal horizontally
  },
};

const LikeModal: React.FC<LikeModalProps> = ({
  isOpen,
  onRequestClose,
  likedUsers,
}) => {
  const uniqueEmails = new Set<string>();
  const userOccurrences: { [email: string]: number } = {};

  if (likedUsers) {
    likedUsers.forEach((user) => {
      if (uniqueEmails.has(user.email)) {
        userOccurrences[user.email]++;
      } else {
        uniqueEmails.add(user.email);
        userOccurrences[user.email] = 1;
      }
    });
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Liked Users"
      style={modalStyles}
    >
      <h2 className="text-xl font-bold">Liked by</h2>
      <ul>
        {Array.from(uniqueEmails).map((email, index) => {
          const user = likedUsers.find((user) => user.email === email);
          return (
            <>
            <li key={index} className="sm:flex gap-2 items-center mt-4">
              <img
                className="w-14 h-14 object-cover rounded-full"
                src={user?.userImg}
                alt=""
              />
              <strong>Username:</strong>{user?.username}
              {userOccurrences[email] > 1 && (<span>({userOccurrences[email]})</span>
              )}
              <br />
            </li>
            </>
          );
        })}
      </ul>
    </Modal>
  );
};

export default LikeModal;
