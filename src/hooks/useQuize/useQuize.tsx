// import { useQuery } from "@tanstack/react-query";
// // import useAxiosSecure from "../useAxiosSecure";
// const useQuize = () => {
// //   const [axiosSecure] = useAxiosSecure();
//   const {
//     data: allQuizeData = [],
//     refetch,
//     isLoading,
//   } = useQuery({
//     queryKey: ["allQuizeData"],
//     queryFn: async () => {
//       const res = fetch('/public/quizzess.json');
//     //   const res = await axiosSecure.get("/learning-questions/questions");
//       return res.data;
//     },
//   });

//   return [allQuizeData, refetch, isLoading];
// };

// export default useQuize;


import { useQuery } from "@tanstack/react-query";

const useQuize = () => {
  const {
    data: allQuizeData = [],
    refetch,
    isLoading,
  } = useQuery(["allQuizeData"], async () => {
    const res = await fetch('../../../public/quizzess.json');
    const data = await res.json();
    return data;
  });

  return {allQuizeData, refetch, isLoading};
};

export default useQuize;
