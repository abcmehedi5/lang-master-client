/* eslint-disable @typescript-eslint/no-explicit-any */
import useAllBooks from "../../hooks/useAllBooks";
import deleteIcon from '../../assets/img/4476891.png'
import Swal from "sweetalert2";

const AllBooks = () => {
    const [allBooks,refetch] =useAllBooks()
    console.log(allBooks)

    const handleDeleteBook = (id : any) => {
        console.log(id);
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
           
            fetch(`https://lang-master-server-abcmehedi5.vercel.app/books/deleteBook/${id}`,{
                method : 'DELETE'
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data)
                if (data.deletedCount > 0) {
                  Swal.fire("Deleted!", "Your file has been deleted.", "success");
                }
                refetch()
              });
          }
        });
      };



    return (
        <div className="w-full" style={{backgroundImage: 'url(https://img.freepik.com/free-vector/pastel-ombre-background-pink-purple_53876-120750.jpg?w=2000)'}}>

        <h2 className="text-center text-3xl font-serif p-4">All Book Here</h2>

 <div  className="flex  flex-col font-bold  p-6 shadow-md bg-[#linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef),linear-gradient(45deg,#efefef 25%,rgba(239,239,239,0) 25%,rgba(239,239,239,0) 75%,#efefef 75%,#efefef)]">
        <div className="overflow-x-auto">
          <div className="p-1.5 w-full inline-block align-middle">
            <div className="overflow-hidden border rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-100">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                    
                   bookId

                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                     Writer
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                    >
                     Book Name
                    </th>
                  
                    <th
                      scope="col"
                      className="px-20  text-xs font-bold text-right text-gray-500 uppercase "
                    >
                    Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {
                    allBooks.map((book : any)=> <tr>
                    <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                    {book.bookId}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{book.writer}</td>
                    <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                    {book.bookname}
                    </td>
                  
                    <td className="px-6 py-4  ">
                      <a className="" href="#">
                     <img onClick={()=> handleDeleteBook(book._id)} className="w-10 h-10 flex mx-auto" src={deleteIcon} alt="" />
                      </a>
                    </td>
                  </tr>

)
                  }

                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



        </div>
    );
};

export default AllBooks;