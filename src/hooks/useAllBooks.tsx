/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";

const useAllBooks = () => {
    const {
        data: allBooks = [],
        refetch,
        isLoading,
      } = useQuery(["allBooks"], async () => {
        const res = await fetch("http://localhost:5000/books/book");
        const data = await res.json();
        return data;
      });
    
      return [allBooks, refetch, isLoading];
};

export default useAllBooks;