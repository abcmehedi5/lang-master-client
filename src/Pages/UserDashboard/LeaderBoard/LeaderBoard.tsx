import { FC } from "react";
import { Helmet } from "react-helmet-async";
import { BiCrown } from "react-icons/bi";
import useLeaderBoard from "../../../hooks/useLeaderBoardData/useLeaderBoard";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

interface UserPoint {
  name: string;
  useremail: string;
  userimg: string;
  score: number;
}

const LeaderBoard: FC = () => {
  const { allLeaderBoardData: usersPoint } = useLeaderBoard();
  return (
    <div className="px-4 py-8 md:px-20 md:py-16">
      <Helmet>
        <title> Leader-board | Lang Master </title>
      </Helmet>
      <div className="md:grid grid-cols-12 gap-10">
        <div className="text-center col-span-8">
          <div className="space-y-2 mb-2">
            <SectionTitle titleLetter="লিডার " titleWord="বোর্ড"></SectionTitle>
            <p className="text-xl text-gray-700 block md:hidden">
              লেসন প্র্যাকটিস করে পয়েন্ট জিতুন, এবং মেতে উঠুন লিডারবোর্ডের
              প্রতিযোগিতায়
            </p>
          </div>
          <hr className="my-5 border" />
          <div className="mt-10">
            {usersPoint
              .sort((a: UserPoint, b: UserPoint) => b.score - a.score)
              .map((userPoint: any, index: number) => (
                <div
                  key={index}
                  style={{
                    boxShadow:
                      "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                    borderRadius: "10px",
                  }}
                  className={`grid grid-cols-2 text-center w-full mb-5 py-2 px-5 rounded-sm items-center text-lg ${
                    index < 3 ? "bg-[#91D1A3]" : "bg-[#DDF4FF]"
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
        <div
          className="col-span-4 border-2 px-3 py-4 rounded-lg h-fit space-y-3 hidden md:block"
          style={{ marginTop: "60px" }}
        >
          <h5 className="text-gray-500 text-xl">লিডারবোর্ড কী?</h5>
          <p className="text-2xl">
            লেসন প্র্যাকটিস করুন। পয়েন্ট জিতুন। প্রতিযোগিতায় মেতে উঠুন।
          </p>
          <p className="text-xl text-gray-700">
            লেসন প্র্যাকটিস করে পয়েন্ট জিতুন, এবং মেতে উঠুন লিডারবোর্ডের
            প্রতিযোগিতায়
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
