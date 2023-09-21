import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useSingleBlogData = (id: string | undefined) => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: singleBlog = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["singleBlog", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/blogs/blog/${id}`);
      return res.data;
    },
  });
  return { singleBlog, loading, refetch };
};

export default useSingleBlogData;
