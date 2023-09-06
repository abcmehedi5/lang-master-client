import { useEffect, useState } from "react";
import { FiUsers } from "react-icons/fi";
import useLearnData from "../../../hooks/useLearnData/useLearnData";
import usePaymentData from "../../../hooks/usePaymentData/usePaymentData";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Statistics = () => {
  const [axiosSecure] = useAxiosSecure();
  const [allUsers, setAllUsers] = useState([]);
  const [allLearnData] = useLearnData();
  const [allPaymentData] = usePaymentData();
  console.log(allLearnData.length);

  // getting all users
  useEffect(() => {
    axiosSecure
      .get("http://localhost:5000/users/user")
      .then((res) => setAllUsers(res.data))
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [axiosSecure]);
  return (
    <div className="w-9/12 mx-auto">
      <div className="container my-24 mx-auto md:px-6">
        {/* Section: Design Block */}
        <section className="mb-32 text-center">
          <div className="grid lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                      />
                    </svg> */}
                    <FiUsers className="text-4xl" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Total Users</h3>
                  <h5 className=" mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    {allUsers.length}
                  </h5>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-16 lg:mb-0">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Total Unit</h3>
                  <h5 className=" mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    {allLearnData.length}
                  </h5>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius
                  </p>
                </div>
              </div>
            </div>

            <div className="">
              <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                <div className="flex justify-center">
                  <div className="-mt-8 inline-block rounded-full bg-primary-100 p-4 text-primary shadow-md">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="h-7 w-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-4 text-lg font-medium">Total Income</h3>
                  <h5 className=" mb-4 text-2xl font-bold text-primary dark:text-primary-400">
                    $100
                  </h5>
                  <p className="text-neutral-500 dark:text-neutral-300">
                    Laudantium totam quas cumque pariatur at doloremque hic quos
                    quia eius
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Recent book orders */}
        <section>
          <h1 className="text-2xl font-bold">Recent Book Orders:</h1>
        </section>
      </div>
    </div>
  );
};

export default Statistics;
