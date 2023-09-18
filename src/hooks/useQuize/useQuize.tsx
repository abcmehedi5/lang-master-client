import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const useQuize = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allQuizeData = [],
    refetch,
    isLoading,
  } = useQuery(["quiz"], async () => {
    const res = await axiosSecure.get("/quizs/quiz");
    return res.data;
  });

  return [allQuizeData, refetch, isLoading];
};

export default useQuize;
