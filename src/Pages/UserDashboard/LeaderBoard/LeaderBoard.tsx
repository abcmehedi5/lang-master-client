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
    <div className="overflow-x-auto md:w-11/12 mx-auto">
      <div>
        {/* head */}
        <div className="bg-[#000] text-center py-3 grid grid-cols-3 text-white mb-4 px-5">
          {/* <p></p> */}
          <p>Name</p>
          <p>Email</p>
          <p>Score</p>
          {/* <p></p> */}
        </div>
        <div className="overflow-x-auto">
          {usersPoint
            .sort((a, b) => b.points - a.points)
            .map((userPoint, index) => (
              <div key={index} className="grid text-center grid-cols-3 w-full mb-4 bg-[#088395] py-2 px-5 items-center text-white">
                {/* <p>{index + 1}</p> */}
                <div>
                  <p className="flex items-center space-x-3">
                  <p>{index + 1}</p>
                  <span style={{height:'40px', width:'1px', backgroundColor:'#e9f8fa'}}></span>
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
                <p>
                  {userPoint?.useremail}
                </p>
                <p>{userPoint?.points}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeaderBoard;
