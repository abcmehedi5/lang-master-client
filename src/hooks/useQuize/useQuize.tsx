// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../useAxiosSecure";
// const useQuize = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const {
//     data: allQuizeData = [],
//     refetch,
//     isLoading,
//   } = useQuery({
//     queryKey: ["allQuizeData"],
//     queryFn: async () => {
//       const res = await axiosSecure.get("/quizzess");
//       return res.data;
//     },
//   });

//   return {allQuizeData, refetch, isLoading};
// };

// export default useQuize;

import { useQuery } from "@tanstack/react-query";

const useQuize = () => {
  const {
    data: allQuizeData = [],
    refetch,
    isLoading,
  } = useQuery(["allQuizeData"], async () => {
    const res = await fetch("http://localhost:5000/quizs/quiz");
    const data = await res.json();
    return data;
  });

  return { allQuizeData, refetch, isLoading };
};

export default useQuize;
