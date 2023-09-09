import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";
import useUser from "../../../hooks/useUser";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../../Providers/AuthProvider";

const SingleBook = ({ handleModalClose, selectedBook }: any) => {
  console.log("single", selectedBook);

  const [singleUser] = useUser();
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const bookInfo = {
    userName: user?.displayName,
    email: user?.email,
    bookId: selectedBook?.bookId,
    bookName: selectedBook?.bookname,
    writer: selectedBook?.writer,
    downloadUrl: selectedBook?.downloadUrl,
    date: new Date(),
  };
  const handleBuyNow = async () => {
    const bookPrice = selectedBook?.price;
    if (singleUser?.score >= selectedBook?.price) {
      Swal.fire({
        title: "Are you sure?",
        text: "You want to Buy this!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sure!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          // decreamenting the score after successfull buy
          const response = await axiosSecure.patch(
            `/users/user/${user?.email}`,
            {
              score: -bookPrice,
            }
          );
          if (response.data.modifiedCount > 0) {
            Swal.fire("Success!", "You Bought This Book.", "success");
            // sending bought book info to backend
            const res = await axiosSecure.post("/books/bought-book", {
              bookInfo,
            });
            if (res.data.insertedId) {
              //   navigate to my book page
              navigate("/user-dashboard/bought-books");
            }
          }
        }
      });
    } else {
      Swal.fire({
        title: "একাউন্টে যথেষ্ট কয়েন নেই?",
        text: "কয়েন কিনুন পেইজ থেকে কয়েন কিনুন!",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Sure!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/user-dashboard/shop");
        }
      });
    }
  };
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="fixed inset-0 bg-black opacity-70"></div>
        <div className="bg-white p-6 rounded-lg shadow-md relative md:w-1/2">
          <div className="flex justify-end">
            <div
              className="px-2 pb-3 text-yellow-500 text-5xl cursor-pointer"
              onClick={handleModalClose}
            >
              <AiFillCloseCircle></AiFillCloseCircle>
            </div>
          </div>
          <div>
            <div className="group block">
              <img
                src={selectedBook.bookimage}
                alt=""
                className="h-[350px] w-full object-cover sm:h-[450px]"
              />

              <div className="mt-3 flex justify-between text-sm">
                <div>
                  <h3 className="text-gray-900 group-hover:underline group-hover:underline-offset-4 font-bold text-xl">
                    {selectedBook.bookname}
                  </h3>

                  <p className="mt-1.5 max-w-[45ch] text-xs text-gray-700">
                    {selectedBook.description}
                  </p>
                </div>

                <p className="text-red-600">{selectedBook.price} Coin</p>
              </div>
            </div>

            <div className="flex justify-end mt-4">
              <button
                onClick={handleBuyNow}
                className="px-4 py-2 bg-yellow-400 text-black rounded"
              >
                Buy Now
              </button>
              <button
                onClick={handleModalClose}
                className="px-4 py-2 ml-4 border rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBook;
