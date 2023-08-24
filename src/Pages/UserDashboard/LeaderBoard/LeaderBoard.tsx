import { Helmet } from "react-helmet-async";
import { BiCrown } from "react-icons/bi";

const LeaderBoard = () => {
  const usersPoint = [
    {
      username: "Mahin Khan",
      useremail: "user1@example.com",
      userimg: "https://i.ibb.co/WVmdSf0/download-2.jpg",
      points: 150,
    },
    {
      username: "Mehedi hasan",
      useremail: "user2@example.com",
      userimg: "https://i.ibb.co/cxP39Bj/download-1.jpg",
      points: 200,
    },
    {
      username: "Arjuman Jhimi",
      useremail: "user3@example.com",
      userimg: "https://i.ibb.co/v1bY63z/download.jpg",
      points: 75,
    },
    {
      username: "Arjuman Jhimii",
      useremail: "user3@example.com",
      userimg: "https://i.ibb.co/v1bY63z/download.jpg",
      points: 75,
    },
  ];

  return (
    <div className="w-9/12 mx-auto">
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
              .sort((a, b) => b.points - a.points)
              .map((userPoint, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 text-center w-full mb-4 py-2 px-5 items-center text-lg`}
                >
                  <div>
                    <p className="flex items-center space-x-5 font-semibold text-2xl">
                      {index < 3 ? (
                        // Use icons for the top three positions
                        index === 0 ? (
                          <BiCrown />
                        ) : index === 1 ? (
                          <BiCrown />
                        ) : (
                          <BiCrown />
                        )
                      ) : (
                        // Display the index number for the rest
                        <p className="pl-[9px]">{index + 1}</p>
                      )}
                      <p className="avatar">
                        <div className="border rounded-lg w-12 h-12">
                          <img
                            src={userPoint?.userimg}
                            alt="Avatar Tailwind CSS Component"
                            className="rounded-lg"
                          />
                        </div>
                      </p>
                      <div>
                        <p className="font-semibold px-3 text-xl">
                          {userPoint?.username}
                        </p>
                      </div>
                    </p>
                  </div>
                  <div className="flex-grow flex justify-end">
                    <p className="text-[#757575] left-div">
                      {userPoint?.points} Points
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="md:w-[400px] w-full h-full mx-auto border-2 px-3 py-4 md:mr-10 rounded-lg">
          <h5 className="text-gray-500 text-xl">লিডারবোর্ড কী?</h5>
          <p className="text-2xl">
            লেসন প্র্যাকটিস করুন। পয়েন্ট জিতুন। প্রতিযোগিতায় মেতে উঠুন।
          </p>
          <p className="text-xl text-gray-700">
            লেসন প্র্যাকটিস করে পয়েন্ট জিতুন, এবং মেতে উঠুন সাপ্তাহিক
            লিডারবোর্ডের প্রতিযোগিতায়
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
