import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../useAxiosSecure";

const usePaymentData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    data: allPaymentData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["allPaymentData"],
    queryFn: async () => {
      const res = await axiosSecure.get("/payment/payment");
      return res.data;
    },
  });
  return [allPaymentData, refetch, isLoading];
};

export default usePaymentData;
