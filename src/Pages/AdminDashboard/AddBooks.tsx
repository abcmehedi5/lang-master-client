import Swal from "sweetalert2";

const AddBooks = () => {
  const handleBookAdd = (event: any) => {
 
//  here add book form submit
    event.preventDefault();
    const form = event.target;
    const bookName = form.bookname.value;
    const  downloadUrl = form.downloadUrl.value 
    const  bookId = form.bookId.value 
    const  bookimage = form.bookimage.value 
    const writer = form.writer.value 
    const price = form.price.value 
    const  rating = form.rating.value 
    const  description = form.description.value 

    const addBook = {
        bookName,downloadUrl,bookId,bookimage,writer,price,rating,description,
        
    }

console.log(addBook)

    fetch('http://localhost:5000/books/addBook',{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify(addBook)

    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
       if(data){
        form.reset()
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Great!Book is added',
            showConfirmButton: false,
            timer: 1500
          })
       }
    })
     
   
  };

  return (
    <body className="font-mono">
      <div className="container mx-auto">
        <div className="flex justify-center px-6">
          {/* <!-- Row --> */}
          <div className="w-full  flex">
            <div className="w-full border-2  bg-white  rounded-2xl shadow-md ">
              <div className=" lg:ml-60 mt-2">
                <h3 className="pt-4 text-3xl text-rose-400 font-semibold inline  border-b-4 border-rose-400">
                  Add a Book
                </h3>
              </div>
              <form
                onSubmit={handleBookAdd}
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded "
              >
                <div className="mb-4">
                  <label
                    className="block w-full mb-2 text-sm font-bold text-gray-700"
                  
                  >
                    Book Name
                  </label>
                  <input
                    className="lg:w-[600px]  sm:w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="bookname"
                    type="text"
                    placeholder="Book Name"
                  />
                </div>

                <div className="mb-4">
                  <label className="block w-full mb-2 text-sm font-bold text-gray-700">
                    DownloadUrl
                  </label>
                  <input
                    className="lg:w-[600px]  sm:w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    name="downloadUrl"
                    type="text"
                    placeholder="downloadUrl"
                  />
                </div>
                <div className="mb-4 md:flex ">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      BookId
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="bookId"
                      type="text"
                      placeholder="BookId"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                    
                    >
                      Book Image
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="bookimage"
                      
                                       
                      type="text"
                      placeholder="Image"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                    
                    >
                      Writer
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="writer"
                      type="text"
                      placeholder="Writer"
                    />
                  </div>
                </div>
                <div className="mb-4 md:flex ">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700">
                      Price
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="price"
                      type="number"
                      placeholder="price"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                    
                    >
                      Rating
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="rating"
                      type="number"
                      placeholder="rating"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label
                      className="block mb-2 text-sm font-bold text-gray-700"
                      
                    >
                      Description
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      name="description"
                      type="text"
                      placeholder="Description"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <input
                    className="w-full px-4 py-2 font-bold text-white bg-rose-400 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                    type="submit"
                    value="Add Book"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default AddBooks;
