import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
interface Book {
  _id: string;
  userName: string;
  email: string;
  bookId: string;
  bookName: string;
  writer: string;
}

const BoughtBooks = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  console.log(allBooks);

  useEffect(() => {
    axiosSecure(`/books/bought-book?email=${user?.email}`).then((res) =>
      setAllBooks(res.data)
    );
  }, [axiosSecure, user]);
  return (
    <div className="my-10 mt-10 w-9/12 mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 text-center mb-10">
        Your Book Collection
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Writer</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {allBooks.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book?.bookName}</td>
                <td>{book?.writer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoughtBooks;
