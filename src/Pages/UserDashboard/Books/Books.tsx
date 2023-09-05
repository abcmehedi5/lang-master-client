import { useEffect, useState } from "react";
// import { AiFillCloseCircle } from "react-icons/ai";
import SingleBook from "./SingleBook";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import { FaRegStar, FaStar } from "react-icons/fa";
// import Rating from "react-rating";

type Book = {
  id: number;
  bookname: string;
  bookimage: string;
  writer: string;
  price: number;
  rating: number;
  description: string;
  status: string;
};

const Books: any = () => {
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);

  const handleEditButtonClick = (book: Book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedBook(null); // Clear the selected book
    setIsModalOpen(false);
  };

  // const handleModalSubmit = () => {
  //   // Handle submitting changes or adding to cart
  //   if (selectedBook) {
  //     console.log("Saving changes:", selectedBook);
  //     // You can add more logic here to handle saving changes or adding to cart
  //   }
  //   setIsModalOpen(false);
  // };

  useEffect(() => {
    axiosSecure
      .get("/books/book")
      .then((res) => {
        setBooks(res.data); // Update state with the response data
      })
      .catch((error) => {
        console.error(error);
      });
  }, [axiosSecure]);

  return (
    <>
      <div className="w-9/12 mx-auto py-12">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold text-center mb-4">
            আপনার পছন্দের পিডিএফ পড়ুন
          </h1>
          {/* search bar  */}
          <div className="flex items-center p-6 space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
            <div className="flex bg-gray-100 p-4 w-72 space-x-4 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 opacity-30"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="bg-gray-100 outline-none"
                type="text"
                placeholder="Book name or keyword..."
              />
            </div>
            <div className="flex py-3 px-4 rounded-lg text-gray-500 font-semibold cursor-pointer">
              <span>All categories</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <div className="bg-yellow-400 py-3 px-5 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
              <span>Search</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 p-14">
          {books.map((book: any) => (
            // <div
            //   key={book.id}
            //   className="group relative block overflow-hidden cursor-pointer"
            // >
            //   <img
            //     src={book.bookimage}
            //     alt=""
            //     className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            //   />
            //   <div className="relative border border-gray-100 bg-white p-6">
            //     <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
            //       {book.status}
            //     </span>
            //     <h3 className="mt-4 text-lg font-medium text-gray-900">
            //       {book.bookname}
            //     </h3>
            //     <h3 className="mt-4 font-medium">Writter: {book.writer}</h3>
            //     <div className="flex items-center">
            //       {/* <p>
            //     <Rating
            //       placeholderRating={book.rating}
            //       readonly
            //       emptySymbol={<FaRegStar />}
            //       placeholderSymbol={<FaStar className="text-yellow-500" />}
            //       fullSymbol={<FaStar />}
            //     />{" "}
            //     {book.rating}
            //   </p> */}
            //     </div>
            //     <p className="mt-1.5 text-sm text-gray-700">
            //       <b>Price:</b> ${book.price}
            //     </p>
            //     <form className="mt-4">
            //       <button
            //         onClick={(e) => {
            //           e.preventDefault();
            //           handleEditButtonClick(book);
            //         }}
            //         className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
            //       >
            //         Add to Cart
            //       </button>
            //     </form>
            //   </div>
            // </div>
            <div
              key={book._id}
              onClick={(e) => {
                e.preventDefault();
                handleEditButtonClick(book);
              }}
              className="group relative block overflow-hidden cursor-pointer"
            >
              <img
                src={book.bookimage}
                alt=""
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-70 text-white">
                <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium absolute top-0 left-0">
                  {book.status}
                </span>
                <span className="text-2xl absolute top-0 right-0 p-2 cursor-pointer">
                  ❤️
                </span>
                <div className="flex flex-col justify-center items-center absolute inset-0">
                  <h3 className="text-lg font-medium">{book.bookname}</h3>
                  <h3 className="mt-2 font-medium">Writer: {book.writer}</h3>
                  <div className="flex items-center">
                    {/* Add Rating component here */}
                  </div>
                  <p className="mt-2 text-sm">
                    <b>Price:</b>{" "}
                    <span className="text-green-500 font-semibold">
                      {book.price} Coin
                    </span>
                  </p>

                  {/* buy now btn  */}
                  {/* <form className="mt-4">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleEditButtonClick(book);
                      }}
                      className="block w-full rounded bg-yellow-400 p-3 text-sm font-medium transition hover:scale-105"
                    >
                      Buy Now
                    </button>
                  </form> */}
                </div>
              </div>
            </div>
          ))}

          {/* // modal open after click on a book  */}
          {isModalOpen && selectedBook && (
            <SingleBook
              key={selectedBook.bookimage}
              selectedBook={selectedBook}
              handleModalClose={handleModalClose}
            ></SingleBook>
          )}
        </div>
      </div>
    </>
  );
};

export default Books;
