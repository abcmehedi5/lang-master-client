import React, { useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

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

const Books: React.FC = () => {
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

  const handleModalSubmit = () => {
    // Handle submitting changes or adding to cart
    if (selectedBook) {
      console.log("Saving changes:", selectedBook);
      // You can add more logic here to handle saving changes or adding to cart
    }
    setIsModalOpen(false);
  };

  useEffect(() => {
    fetch("/books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-14">
      {books.map((book) => (
        <div
          key={book.id}
          className="group relative block overflow-hidden cursor-pointer"
        >
          <img
            src={book.bookimage}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="relative border border-gray-100 bg-white p-6">
          <span
            className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"
          >
            {book.status}
          </span>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {book.bookname}
            </h3>
            <h3 className="mt-4 font-medium">Writter: {book.writer}</h3>
            <div className="flex items-center">
              <p>
                <Rating
                  placeholderRating={book.rating}
                  readonly
                  emptySymbol={<FaRegStar />}
                  placeholderSymbol={<FaStar className="text-yellow-500" />}
                  fullSymbol={<FaStar />}
                />{" "}
                {book.rating}
              </p>
            </div>
            <p className="mt-1.5 text-sm text-gray-700"><b>Price:</b> ${book.price}</p>
            <form className="mt-4">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleEditButtonClick(book);
                }}
                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      ))}
      {isModalOpen && selectedBook && (
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
                    <h3
                      className="text-gray-900 group-hover:underline group-hover:underline-offset-4 font-bold text-xl"
                    >
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
                  onClick={handleModalSubmit}
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
      )}
    </div>
  );
};

export default Books;
