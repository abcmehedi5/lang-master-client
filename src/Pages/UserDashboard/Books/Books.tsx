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

  useEffect(() => {
    fetch("/books.json") // Make sure the path is correct
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 p-14">
      {books.map((book) => (
        <a
          key={book.id}
          href="#"
          className="group relative block overflow-hidden"
        >
          <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
            <span className="sr-only">Wishlist</span>
            {/* ... (wishlist icon SVG) */}
          </button>
          <img
            src={book.bookimage}
            alt=""
            className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
          />
          <div className="relative border border-gray-100 bg-white p-6">
            <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium">
              New
            </span>
            <h3 className="mt-4 text-lg font-medium text-gray-900">
              {book.bookname}
            </h3>
            <h3 className="mt-4 font-medium">
              {book.writer}
            </h3>
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
              <button className="block w-full rounded bg-yellow-400 p-4 text-sm font-medium transition hover:scale-105">
                Add to Cart
              </button>
            </form>
          </div>
        </a>
      ))}
    </div>
  );
};

export default Books;
