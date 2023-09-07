import { useEffect } from "react";
import useUser from "../../hooks/useUser";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Certificate = () => {
  const [singleUser] = useUser();
  const [axiosSecure] = useAxiosSecure();
  console.log(singleUser);
  useEffect(() => {
    axiosSecure
      .get(`http://localhost:5000/learning-questions/certificate`, {
        params: singleUser, // Send singleUser as query parameters
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [singleUser]);
  return (
    <div>
      <h1>certificate {singleUser?.email}</h1>
    </div>
  );
};
export default Certificate;
