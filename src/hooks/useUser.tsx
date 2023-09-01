import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user }: any = useContext(AuthContext);
  const email = user?.email;
  const {
    data: singleUser,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleUser", email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/singleUser?email=${email}`);
      return res.data;
    },
  });
  return [singleUser, isLoading, refetch];
};



export default useUser;

// export const useAllUser = () => {
//   const [axiosSecure] = useAxiosSecure();
//   const { user } = useContext(AuthContext); // Ensure you're using the right property name
//   const email = user?.email;

//   const {
//     data: allUser,
//     isLoading,
//     refetch,
//   } = useQuery('allUser', async () => {
//     const res = await axiosSecure.get('/users/user');
//     return res.data;
//   });

//   return [allUser, isLoading, refetch];
// };