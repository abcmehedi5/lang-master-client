/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/rules-of-hooks */


import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { FaUserShield, FaUserAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUser from "../../../hooks/useUser";


interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  user : string
}

const UserTable: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchText, setSearchText] = useState<string>("");
  const [axiosSecure] = useAxiosSecure()
 const  [singleUser, isLoading, refetch] = useUser()
  


  // const  {data:user=[] , isLoading , refetch} = useQuery({
  //   queryKey:["user"],
  //   queryFn: async () =>{
  //     const res = axiosSecure.get("/users/user")
  //     return (await res).data
  //   }
  // })


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
  const handleMakeAdmin =async (user : User) => {
    console.log('btn  is click')
    const response = await axiosSecure.patch(`/admins/user/admin/${user?._id}`);
    const updatedUser = response.data;
   
      if(updatedUser.modifiedCount){
       refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
    }
  
  
  
    const handleMakeUser =async (user : User) => {
      // const { data: updatedUser = {}, isLoading, refetch } = useQuery({
      //   queryKey: ['user'],
      //   queryFn: async () => {
      //     try {
      //       const res = await axiosSecure.patch(`/users/user/${user?._id}`); // Replace userId with the specific user's ID
      //       const updatedUserData = res.data;
    
      //       if (updatedUserData.modifiedCount) {
      //         refetch();
      //         Swal.fire({
      //           position: 'top-end',
      //           icon: 'success',
      //           title: `${updatedUser.name} is a User Now!`,
      //           showConfirmButton: false,
      //           timer: 1500,
      //         });
      //       }
      //     } catch (error) {
      //       // Handle errors
      //       console.error('Error updating user:', error);
      //     }
      //   },
      // });
  
  
  
      console.log('btn  is click')
    const response = await axiosSecure.patch(`/makeUsers/user/makeUser/${user?._id}`);
    const updatedUser = response.data;
   
      if(updatedUser.modifiedCount){
       refetch()
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: `${user.name} is an User Now!`,
          showConfirmButton: false,
          timer: 1500
        })
      }
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
               
                <th>Role</th>
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
                 
                  <td>
                   {
                    user.role  === 'admin' ? <span onClick={()=>handleMakeUser(user)}><FaUserShield className="text-2xl text-red-500 hover:cursor-pointer"></FaUserShield></span> : <span onClick={()=> handleMakeAdmin(user)}> <FaUserAlt className="text-2xl text-red-500 hover:cursor-pointer" > </FaUserAlt></span>   
                   }
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