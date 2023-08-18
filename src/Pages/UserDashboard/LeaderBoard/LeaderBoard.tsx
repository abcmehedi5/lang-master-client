import { Helmet } from "react-helmet-async";

const LeaderBoard = () => {
  const usersPoint = [
    {
      username: "user1",
      useremail: "user1@example.com",
      userimg: "https://i.ibb.co/WVmdSf0/download-2.jpg",
      points: 150,
    },
    {
      username: "user2",
      useremail: "user2@example.com",
      userimg: "https://i.ibb.co/cxP39Bj/download-1.jpg",
      points: 200,
    },
    {
      username: "user3",
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
          <div className="">
            {usersPoint
              .sort((a, b) => b.points - a.points)
              .map((userPoint, index) => (
                <div
                  key={index}
                  className="grid text-center grid-cols-2 w-full mb-4 bg-[#088395] py-2 px-5 items-center text-white"
                >
                  {/* <p>{index + 1}</p> */}
                  <div>
                    <p className="flex items-center space-x-3">
                      <p>{index + 1}</p>
                      <span
                        style={{
                          height: "40px",
                          width: "1px",
                          backgroundColor: "#e9f8fa",
                        }}
                      ></span>
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
                        <div className="font-bold">{userPoint?.username}</div>
                      </div>
                    </p>
                  </div>
                  {/* <p>
                  {userPoint?.useremail}
                </p> */}
                  <p>{userPoint?.points}</p>
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
