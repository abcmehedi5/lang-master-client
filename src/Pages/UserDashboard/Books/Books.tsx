import { useEffect, useState } from "react";
import SingleBook from "./SingleBook";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useLocation } from "react-router-dom";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

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
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const [books, setBooks] = useState<Book[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchInputChange = (e: any) => {
    setSearchQuery(e.target.value);
  };

  const handleEditButtonClick = (book: Book) => {
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

  useEffect(() => {
    Aos.init();
  }, []);

  const showAllBooks = location.pathname === "/user-dashboard/books";

  return (
    <>
      {books.length <= 0 ? (
        <LazyLoader></LazyLoader>
      ) : (
        <div className="py-12 mt-8">
          <div className="flex flex-col items-center">
            <SectionTitle
              titleLetter="Language  "
              titleWord="Library"
            ></SectionTitle>
            {/* search bar  */}
            <div className="mt-4 md:flex p-4 md:space-x-6 bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-500">
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
                <Link to="/user-dashboard/books">
                  <div className="bg-[#95d3a2] p-4 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
                    <span>Explore More Books</span>
                  </div>
                </Link>
              )}
            </div>
          </div>



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
          )}
        </div>
      )}
    </>
  );
};

export default Books;
