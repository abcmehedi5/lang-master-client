import React, { useContext, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { FcGallery } from "react-icons/fc";
import Swal from "sweetalert2";
import axios from "axios";
import { AuthContext } from "../../Providers/AuthProvider";
import useBlogData from "../../hooks/useBlogData";

const BlogPostModal: React.FC<{
  setOpenPostModal: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setOpenPostModal }) => {
  const { user }: any = useContext(AuthContext);
  const fileInputRef: any = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedFile, setSelectedFile]: any = useState(null);
  const { refetch } = useBlogData();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const convertTimestamp = (timestamp: any) => {
    const date = new Date(timestamp);
    return date.toLocaleString();
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const form = e.target;
    const status = form.status.value;
    const title = form.title.value;

    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", fileInputRef.current.files[0]);
      const url = `https://api.imgbb.com/1/upload?key=${
        import.meta.env.VITE_IMGBB_API_KEY
      }`;
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });
      const result = await response.json();
      const imageUrl = result?.data?.display_url;

      //   send data to the server----------------
      const postData = {
        authorImage: user?.photoURL,
        image: imageUrl,
        name: user?.displayName,
        email: user?.email,
        description: status,
        title,
        uploadedtime: convertTimestamp(new Date().getTime()),
        like: 0,
        comment: [],
      };
      axios
        .post("http://localhost:5000/blogs/blog", postData)
        .then((res) => {
          console.log("post", res.data);
          setOpenPostModal(false);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "uploaded",
            showConfirmButton: false,
            timer: 1500,
          });
          refetch();
        })
        .catch((error) => {
          console.error("Post request failed:", error);
        });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-6 md:w-1/2 rounded-lg shadow-md relative">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center my-3 justify-around">
            <h1 className="text-center text-xl font-semibold">
              Create Blog Post
            </h1>
            <button
              onClick={() => setOpenPostModal(false)}
              className="bg-base-200 rounded-full p-3 text-xl text-start"
            >
              <IoClose />
            </button>
          </div>
          <hr />
          <div className="flex items-center gap-2 m-3">
            <img
              className="w-14 rounded-full h-14 object-cover"
              src={user?.photoURL}
              alt="user photo"
            />
            <h3 className="text-sm font-bold">{user?.displayName}</h3>
          </div>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Title"
              name="title"
              className="input input-bordered w-full text-2xl"
              required
            />
            <label
              className="input border-gray-300 border-2 flex items-center justify-between text-xl text-gray-400 cursor-pointer mt-3"
              onClick={() => fileInputRef.current.click()}
              aria-required
            >
              <h1 className="text-">
                {selectedFile ? selectedFile.name : "Add image to your post"}
              </h1>
              <FcGallery className="text-2xl" />
            </label>
            <textarea
              name="status"
              className="textarea text-2xl w-full input-bordered"
              placeholder={`What's on your mind, ${
                user?.displayName.split(" ")[0]
              } ?`}
              required
            ></textarea>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileUpload}
            required
          />

          <button
            type="submit"
            className="btn bg-[#3b82f6] text-white text-xl w-full mt-3"
            disabled={loading}
          >
            {loading ? "Posting..." : "Post"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogPostModal;
