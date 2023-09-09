import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { SiFuturelearn } from "react-icons/si";
import { FcLineChart, FcAreaChart } from "react-icons/fc";
import { AiFillDollarCircle } from "react-icons/ai";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import usePaymentData from "../../../hooks/usePaymentData/usePaymentData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DailyIncomeChart from "./DailyIncomeChart";
import RecentBooks from "./RecentBooks";

const Statistics = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allUsers, setAllUsers] = useState([]);
  const [allLearnData] = useLearnData();
  const [allPaymentData] = usePaymentData();
  console.log(allLearnData.length);

  // getting all users
  useEffect(() => {
    axiosSecure
      .get("/users/user")
      .then((res) => setAllUsers(res.data))
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [axiosSecure]);

  // calculating total amount
  const totalAmount = allPaymentData.reduce(
    (accumulator: number, currentPayment: any) => {
      return accumulator + currentPayment.amount;
    },
    0
  );
  return (
    <div className="w-9/12 mx-auto">
      <div className="my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-16 text-center">
          <div className="grid lg:grid-cols-3 lg:gap-x-12">
            {/* users  */}
            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <FiUsers className="text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Total Users</h3>
                  <h5 className=" mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    {allUsers.length}
                  </h5>
                  <div className="flex justify-center">
                    <FcLineChart className="text-6xl" />
                  </div>
                </div>
              </div>
            </div>
            {/* units  */}
            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <SiFuturelearn className="text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Total Unit</h3>
                  <h5 className=" mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    {allLearnData.length}
                  </h5>
                  <div className="flex justify-center">
                    <FcAreaChart className="text-6xl" />
                  </div>
                </div>
              </div>
            </div>
            {/* incomes */}
            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] ">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <MdOutlineIncompleteCircle className="text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex flex-col items-center">
                    <h3 className="mb-4 text-lg font-medium">Total Income</h3>
                    <h5 className=" mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                      ${totalAmount}
                    </h5>
                    <div className="flex justify-center">
                      <AiFillDollarCircle className="text-6xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Income section graph  */}
        <section className="w-9/12 mx-auto">
          <h1 className="text-center text-3xl font-bold mb-12">Income Graph</h1>
          <DailyIncomeChart paymentData={allPaymentData}></DailyIncomeChart>
        </section>
        {/* Recent book orders */}
        <section className="mt-10">
          <RecentBooks></RecentBooks>
        </section>
      </div>
    </div>
  );
};

export default Statistics;
