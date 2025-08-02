import { ChangeEvent, useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useLocation } from "react-router-dom";
import LazyLoader from "../../../Components/LazyLoader/LazyLoader";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import WhiteButton from "../../../Components/Buttons/WhiteBtn";

type TBook = {
  _id: number;
  bookname: string;
  bookimage: string;
  writer: string;
  price: number;
  rating: number;
  description: string;
  status: string;
};

const BookSection = () => {
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState<TBook[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<TBook | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleEditButtonClick = (book: TBook) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedBook(null); // Clear the selected book
    setIsModalOpen(false);
  };

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

  const filteredBooks = books.filter((book) => {
    return (
      book.bookname?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
      book.writer?.toLowerCase().includes(searchQuery?.toLowerCase())
    );
  });

  const showAllBooks = location.pathname === "/user-dashboard/books";

  return (
    <>
      {books.length <= 0 ? (
        <LazyLoader></LazyLoader>
      ) : (
        <div className="mt-20">
          <div className="flex flex-col items-center">
            <SectionTitle
              titleLetter="Language"
              titleWord="Library"
            ></SectionTitle>
            {/* search bar  */}
            <div className="flex flex-col md:flex-row max-md:items-center p-4 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
              <div className="flex md:mb-0 mb-2 bg-gray-100 p-4 md:w-72 space-x-4 rounded-lg">
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
                  placeholder="Book name or writer name"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                />
              </div>
              {!showAllBooks && (
                <Link to="/user-dashboard/books-buy">
                  <WhiteButton className="bg-gradient-to-r from-[#95d3a2] to-[#359fac] text-white">
                    Explore More Books
                  </WhiteButton>
                </Link>
              )}
            </div>
          </div>

          {filteredBooks.length === 0 ? (
            <div className="text-center my-10 text-4xl text-gray-500 font-semibold">
              <p>No data found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4  mt-8">
              {filteredBooks
                .slice(0, showAllBooks ? filteredBooks.length : 8)
                .map((book: TBook) => (
                  <div
                    key={book._id}
                    onClick={(e) => {
                      e.preventDefault();
                      handleEditButtonClick(book);
                    }}
                    className="group relative w-full cursor-pointer overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-lg shadow-sm transition-all duration-300 hover:shadow-xl"
                  >
                    <div className="w-full">
                      <img
                        src={book.bookimage}
                        alt="Books"
                        className="h-64 w-full rounded-2xl object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-1"
                      />
                    </div>

                    {/* Overlay with mobile-visible default */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 text-white opacity-100 backdrop-blur-md transition-opacity duration-300 md:opacity-0 md:group-hover:opacity-100">
                      <span className="absolute left-0 top-0 rounded-br-xl bg-yellow-400 px-3 py-1.5 text-xs font-semibold text-black shadow">
                        {book.status || "New"}
                      </span>

                      <span className="absolute right-0 top-0 p-3 text-lg transition-transform hover:scale-110">
                        ❤️
                      </span>

                      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                        <h3 className="text-xl font-semibold tracking-wide">
                          {book.bookname}
                        </h3>
                        <h4 className="mt-1 text-sm text-gray-200">
                          by {book.writer}
                        </h4>
                        <p className="mt-2 text-sm">
                          <b>Price:</b>{" "}
                          <span className="font-bold text-green-400">
                            {book.price} Coin
                          </span>
                        </p>
                        <button className="mt-4 rounded-full bg-green-500 px-4 py-1.5 text-sm font-medium text-white shadow hover:bg-green-600 transition-all duration-200">
                          View Details
                        </button>
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
          )}
        </div>
      )}
    </>
  );
};

export default BookSection;
