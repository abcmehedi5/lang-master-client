/* eslint-disable @typescript-eslint/no-unused-vars */
import { useQuery } from "@tanstack/react-query";

const useAllBooks = () => {
    const {
        data: allBooks = [],
        refetch,
        isLoading,
      } = useQuery(["allBooks"], async () => {
        const res = await fetch("https://lang-master-server-abcmehedi5.vercel.app/books/book");
        const data = await res.json();
        return data;
      });
    
      return [allBooks, refetch, isLoading];
};

export default useAllBooks;