import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

const AddBooks = () => {
  const [bookImageFile, setBookImageFile] = useState(null);
  const [bookImageUrl, setBookImageUrl] = useState("");
  const [formData, setFormData] = useState({
    bookname: "",
    downloadUrl: "",
    bookId: "",
    bookimage: "", // Added for image URL or file
    writer: "",
    price: "",
    rating: "",
    description: "",
  });

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageFileChange = (event: any) => {
    const file = event.target.files[0];
    setBookImageFile(file);
  };

  const handleBookAdd = async (event: any) => {
    event.preventDefault();

    try {
      let imageUrl = "";

      if (bookImageFile) {
        // If a file was selected, upload it to ImgBB
        const formData = new FormData();
        formData.append("image", bookImageFile);

        const imgbbResponse = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
            params: {
              key: "3175c3bd6870b807a81f5454a96c494d", // Replace with your ImgBB API key
            },
          }
        );

        imageUrl = imgbbResponse.data.data.url;
      } else if (bookImageUrl) {
        // If an image URL was provided, use it directly
        imageUrl = bookImageUrl;
      }

      const addBook = { ...formData, bookimage: imageUrl };

      console.log(addBook);

      // Send the addBook object with the image URL to your server using fetch or axios.
      // Example using fetch:
      fetch("http://localhost:5000/books/addBook", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(addBook),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data) {
            // Reset form and show success message
            setFormData({
              bookname: "",
              downloadUrl: "",
              bookId: "",
              bookimage: "", // Reset image field
              writer: "",
              price: "",
              rating: "",
              description: "",
            });
            setBookImageFile(null);
            setBookImageUrl("");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Great! Book is added",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  return (
    <div
      className="container mx-auto border-2 rounded-md shadow-md bg-rotate"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg?size=626&ext=jpg&ga=GA1.1.1531122545.1684612316&semt=ais)",
      }}
    >
      <div className=" lg:ml-60 mt-2">
        <h3 className="pt-4 text-3xl text-rose-400 font-semibold inline  border-b-4 border-rose-400">
          Add a Book
        </h3>
      </div>

      <div className="flex justify-center px-8 ">
        {/* ... Rest of your form layout */}
        <form onSubmit={handleBookAdd} className="px-8 pt-6 pb-8 mb-4 rounded">
          <div className="mb-4">
            <label className="block w-full mb-2 text-sm font-bold text-gray-700">
              Book Name
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="bookname"
              type="text"
              placeholder="Book Name"
              value={formData.bookname}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4">
            <label className="block w-full mb-2 text-sm font-bold text-gray-700">
              Download URL
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="downloadUrl"
              type="text"
              placeholder="Download URL"
              value={formData.downloadUrl}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-4 md:flex">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Book ID
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="bookId"
                type="text"
                placeholder="Book ID"
                value={formData.bookId}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Book Image
              </label>
              <input
                className="lg:w-[400px] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="bookimage"
                type="file"
                accept="image/*"
                onChange={handleImageFileChange}
              />
            </div>
          </div>

          <div className="mb-4 md:flex">
            <div className="mb-4 md:mr-2 md:mb-0">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Writer
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="writer"
                type="text"
                placeholder="Writer"
                value={formData.writer}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Price
              </label>
              <input
                className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="price"
                type="number"
                placeholder="Price"
                value={formData.price}
                onChange={handleInputChange}
              />
            </div>
            <div className="md:ml-2">
              <label className="block mb-2 text-sm font-bold text-gray-700">
                Rating
              </label>
              <input
                className="lg:w-[210px] px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                name="rating"
                type="number"
                placeholder="Rating"
                value={formData.rating}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Description
            </label>
            <input
              className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
              name="description"
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={handleInputChange}
            />
          </div>

          <div className="mb-6 text-center">
            <input
              className="w-full px-4 py-2 font-bold text-white bg-rose-400 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
              type="submit"
              value="Add Book"
            />
          </div>
        </form>
        {/* ... Rest of your form */}
      </div>
    </div>
  );
};

export default AddBooks;
