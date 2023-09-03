import { AiFillCloseCircle } from "react-icons/ai";
import Swal from "sweetalert2";

const SingleBook = ({ handleModalClose, selectedBook }: any) => {
  const handleBuyNow = () => {
    console.log("btn buy now", selectedBook.price);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Buy this!",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Sure!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Success!", "Your Bought This Book.", "success");
      }
    });
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

                <p className="text-gray-900">${selectedBook.price}</p>
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
