import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { BiCrown } from "react-icons/bi";
import useLeaderBoard from "../../../hooks/useLeaderBoardData/useLeaderBoard";

interface UserPoint {
  name: string;
  useremail: string;
  userimg: string;
  score: number;
}

const LeaderBoard: FC = () => {
  const { allLeaderBoardData: usersPoint } = useLeaderBoard();
  return (
    <div className="md:w-9/12 mx-auto px-4 md:px-0">
      <Helmet>
        <title> Leader-board | Lang Master </title>
      </Helmet>
      <div className="w-full mx-auto md:flex mt-14">
        <div className="w-full md:mx-10 text-center">
          <div className="space-y-2 mb-2">
            <h1 className="text-3xl font-semibold">লিডারবোর্ড আনলক করুন!</h1>
            <p className="text-xl text-gray-600 font-semibold">
              প্রতিযোগিতায় অংশ নিতে হলে আপনাকে আরও 7টি লেসন শেষ করতে হবে
            </p>
          </div>
          <hr className="my-5 border" />
          <div>
            {usersPoint
              .sort((a: UserPoint, b: UserPoint) => b.score - a.score)
              .map((userPoint: any, index: number) => (
                <div
                  key={index}
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  }}
                  className={`grid grid-cols-2 text-center w-full mb-5 py-2 px-5 items-center text-lg ${
                    index < 3 ? "bg-[#eabb75]" : "bg-base-300"
                  }`}
                >
                  <div>
                    <p className="flex items-center space-x-5 font-semibold text-2xl">
                      {index < 3 ? (
                        // Use icons for the top three positions
                        <BiCrown />
                      ) : (
                        // Display the index number for the rest
                        <p className="pl-[9px]">{index + 1}</p>
                      )}
                      <p className="avatar">
                        <div className="border rounded-lg w-12 h-12">
                          <img
                            src={userPoint?.image}
                            alt="Avatar Tailwind CSS Component"
                            className="rounded-lg"
                          />
                        </div>
                      </p>
                      <div>
                        <p className="font-semibold px-3 text-xl">
                          {userPoint?.name}
                        </p>
                      </div>
                    </p>
                  </div>
                  <div className="flex-grow flex justify-end">
                    <p className="text-[#757575] left-div">
                      {userPoint?.score} Points
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        {/* <div className="md:w-[400px] w-full h-full mx-auto border-2 px-3 py-4 md:mr-10 rounded-lg">
          <h5 className="text-gray-500 text-xl">লিডারবোর্ড কী?</h5>
          <p className="text-2xl">
            লেসন প্র্যাকটিস করুন। পয়েন্ট জিতুন। প্রতিযোগিতায় মেতে উঠুন।
          </p>
          <p className="text-xl text-gray-700">
            লেসন প্র্যাকটিস করে পয়েন্ট জিতুন, এবং মেতে উঠুন সাপ্তাহিক
            লিডারবোর্ডের প্রতিযোগিতায়
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default LeaderBoard;
