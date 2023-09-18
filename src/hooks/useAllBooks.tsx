/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allBooks = [],
    refetch,
    isLoading,
  } = useQuery(["book"], async () => {
    const res = await axiosSecure.get("/books/book");
    return res.data;
  });

  return [allBooks, refetch, isLoading];
};

export default useAllBooks;
