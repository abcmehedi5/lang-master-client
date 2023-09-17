import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBlogData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: blog = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await axiosSecure.get('/blogs/blog');
      return res.data;
    },
  });

  return { blog, loading, refetch };
};

export default useBlogData;
