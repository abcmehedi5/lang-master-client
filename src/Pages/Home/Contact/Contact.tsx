import { AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
  return (
    <div className="md:flex items-center justify-center my-20 w-[90%] mx-auto bg-[#0a4d68] rounded-md p-3 md:p-6 gap-20">
      {/* ---content--- */}
      <div className="text-white p-4 ">
        <h1 className="text-2xl font-semibold">Get In Toch</h1>
        <p className="my-4 text-lg text-gray-300">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum
          praesentium nobis consequatur, ab autem provident voluptas animi, sint
          modi debitis dolore, minus asperiores accusantium quia?
        </p>
        <div>
          <h4 className="text-xl flex items-center">
            <AiOutlinePhone /> &nbsp; Call US
          </h4>
          <p>+880123456789</p>
        </div>
        <div className="my-4">
          <h4 className="text-xl flex items-center">
            <AiTwotoneMail /> &nbsp; Email
          </h4>
          <p>exaple@gmail.com</p>
        </div>
        <div>
          <h4 className="text-xl flex items-center">
            <HiLocationMarker /> &nbsp; Location
          </h4>
          <p>12 rock stret, 21 aventg</p>
        </div>
      </div>
      {/* --- form section --- */}
      <div className="w-full">
        <div className=" shadow-2xl bg-base-100 rounded-md">
          <form className="card-body">
            <h1 className="text-2xl font-semibold">CONTACT US</h1>
            <div className="form-control">
              <input
                type="text"
                placeholder="Enter your Name"
                className="input rounded-none"
                style={{ borderBottom: "2px solid #0a4d68" }}
                required
              />
            </div>
            <div className="form-control my-4">
              <input
                type="email"
                placeholder="Enter a valid email address"
                className="input rounded-none"
                style={{ borderBottom: "2px solid #0a4d68" }}
                required
              />
            </div>
            <div className="form-control">
              <textarea
                name="message"
                placeholder="Type Message"
                className="input rounded-none"
                style={{ borderBottom: "2px solid #0a4d68" }}
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button className="defaultBtn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
