import React, { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

type Book = {
  id: number;
  bookname: string;
  bookimage: string;
  writer: string;
  price: number;
  rating: number;
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
    setIsModalOpen(false);
  };

  const handleModalSubmit = (book: Book) => {
    // Handle adding the selected book to the cart
    console.log("Adding to cart:", book);
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
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {book.bookname}
            </h3>
            <h3 className="mt-4 font-medium">{book.writer}</h3>
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
            <p className="mt-1.5 text-sm text-gray-700">${book.price}</p>
            <form className="mt-4">
              <button
                onClick={() => handleEditButtonClick(book)}
                className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105"
              >
                Add to Cart
              </button>
            </form>
          </div>
        </div>
      ))}
      {isModalOpen && selectedBook && (


          <div className="">
            <img
              src={selectedBook.bookimage}
              alt=""
              className="h-[350px] w-full object-cover sm:h-[450px]"
            />

            <div className="mt-3 flex justify-between text-sm">
              <div>
                <h3
                  className="text-gray-900 group-hover:underline group-hover:underline-offset-4"
                >
                  {selectedBook.bookname}
                </h3>

                <p className="mt-1.5 max-w-[45ch] text-xs text-gray-500">
                {selectedBook.descriptions}
                </p>
              </div>

              <p className="text-gray-900">{selectedBook.price}</p>
            </div>
          </div>
      )}
    </div>
  );
};

export default Books;
