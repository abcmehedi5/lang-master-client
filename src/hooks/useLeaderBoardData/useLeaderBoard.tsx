import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";
const useLeaderBoard = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allLeaderBoardData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allLeaderBoardData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/leaderboard");
      return res.data;
    },
  });

  return [allLeaderBoardData, refetch, isLoading];
};

export default useLeaderBoard;
