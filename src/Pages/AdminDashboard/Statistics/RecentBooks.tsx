import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import moment from "moment";

interface BoughtBooksData {
  _id: string;
  userName: string;
  email: string;
  bookId: string;
  bookName: string;
  writer: string;
  date: string; // Should be a valid date string
}
const RecentBooks = () => {
  const [boughtBooks, setBoughtBooks] = useState<
    BoughtBooksData[] | undefined
  >();
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get("/books/bought-books")
      .then((res) => setBoughtBooks(res.data.slice(0, 5)));
  }, [axiosSecure]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Recent Book Orders:</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Writer</th>
              <th>Buyer</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {/* Check if boughtBooks is defined before mapping */}
            {boughtBooks?.map((book, index) => (
              <tr key={book._id}>
                <th>{index + 1}</th>
                <td>{book?.bookName}</td>
                <td>{book?.writer}</td>
                <td>{book?.userName}</td>
                <td>{moment(book?.date).format("YYYY-MM-DD")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentBooks;
