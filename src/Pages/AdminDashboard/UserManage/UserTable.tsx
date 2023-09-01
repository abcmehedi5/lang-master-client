import { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const UserTable: React.FC = () => {
 
  const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState<string>("");



  const handleSearch = () => {
    if (searchText !== "") {
      fetch(`http://localhost:5000/users/user/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
        })
        .catch((error) => {
          console.error("Error searching users:", error);
        });
    }
  };

  const handleDelete = (_id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setUsers(users.filter(user => user._id !== _id));
  
        fetch(`http://localhost:5000/users/user/${_id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    });
  };
  
  // admin created
  const handleMakeAdmin = (user: string) => {
    fetch(`http://localhost:5000/users/admin/${user._id}`, {
      method: 'PATCH'
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    })
  }

  useEffect(() => {
    fetch("http://localhost:5000/users/user")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <div className="form-control p-6">
        <div className="input-group">
          <input
            onChange={(e: any) => setSearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className="py-6 px-12">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>role</th>
                <th>Select</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user?._id} className="bg-sky-200">
                  <th>{index + 1}</th>
                  <td>{user?.name}</td>
                  <td>{user?.email}</td>
                  <td>{user?.role}</td>
                  <td>
                    <select onChange={() => handleMakeAdmin(user)} className="select select-bordered w-25 max-w-xs">
                      <option value="">Select</option>
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="btn btn-primary"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserTable;