import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
const useLearnData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allLearnData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allLearnData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/learning-questions/questions");
      return res.data;
    },
  });

  return [allLearnData, refetch, isLoading];
};

export default useLearnData;
