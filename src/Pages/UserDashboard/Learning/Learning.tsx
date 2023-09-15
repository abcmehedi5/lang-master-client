// import { useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import SingleUnitCard from "./SingleUnitCard";
import { Helmet } from "react-helmet-async";
import { useContext, useEffect, useState } from "react";
import LazyLoader from "../../../Components/LazyLoader/LazyLoader";
const Learning = () => {
  const [allLearnData, refetch, isLoading] = useLearnData();
  refetch();
  const [axiosSecure] = useAxiosSecure();
  const { user }: any = useContext(AuthContext);
  const [singleUser, setSingleUser]: any = useState({});

  useEffect(() => {
    axiosSecure.get(`/users/singleUser?email=${user?.email}`).then((result) => {
      setSingleUser(result.data);
    });
  }, [user.email, axiosSecure]);

  return (
    <>
      <Helmet>
        <title> Learning | Lang Master </title>
      </Helmet>

      {isLoading ? (
        <LazyLoader></LazyLoader>
      ) : (
        <div className="px-4 py-8 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allLearnData.map((singleUnit: any) => (
            <SingleUnitCard
              key={singleUnit._id}
              singleUnit={singleUnit}
              singleUser={singleUser}
            ></SingleUnitCard>
          ))}
        </div>
      )}
    </>
  );
};

export default Learning;
