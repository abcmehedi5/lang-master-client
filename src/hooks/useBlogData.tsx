import { useQuery } from "@tanstack/react-query";

const useBlogData = () => {
  const {
    data: blog = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["blog"],
    queryFn: async () => {
      const res = await fetch("https://lang-master-server-abcmehedi5.vercel.app/blogs/blog");
      return res.json();
    },
  });

  return { blog, loading, refetch };
};

export default useBlogData;
