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
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead className="bg-[#088395] text-white">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Score</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersPoint
            .sort((a, b) => b.points - a.points)
            .map((userPoint, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={userPoint?.userimg}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{userPoint?.username}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {userPoint?.useremail}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    Desktop Support Technician
                  </span>
                </td>
                <td>{userPoint?.points}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeaderBoard;
