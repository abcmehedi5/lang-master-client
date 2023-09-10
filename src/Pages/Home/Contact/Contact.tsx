// import { AiOutlinePhone, AiTwotoneMail } from "react-icons/ai";
// import { HiLocationMarker } from "react-icons/hi";
import paperplane from "../../../../public/paperplane2.json";
// import contact from "../../../../public/contact.json";
import cloud from "../../../../public/cloud.json";
// import cloud2 from "../../../../public/cloud2.json";
import contact from '../../../../public/contact.jpg'
import Lottie from "lottie-react-web";

const Contact = () => {
  return (
    <div className="my-16">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Contact Us
      </h2>
      <div className="md:flex items-center justify-center md:h-[400px] relative">
        <div
          className="w-full absolute top-0 left-0 h-full"
          style={{ zIndex: 10 }}
        >
          <Lottie
            options={{
              animationData: paperplane,
              loop: true,
              autoplay: true,
            }}
          />
        </div>
        {/* ---content--- */}
        <div className=" md:w-1/2 h-[440px] relative bg-[#e6fefe]">
        
          <img className="h-full w-full object-cover" src={contact} alt="" />

          <span style={{borderRadius: '24px 24px 2px'}} className="bg-[#aad6ff] absolute animate-updown top-10 left-10 p-3 text-gray-400">Email <br /> abcde@gmail.com</span>
          <span style={{borderRadius: '24px 24px 24px 2px'}} className="bg-[#f3dfc1] absolute animate-updown top-32 right-8 py-2 px-3 text-gray-400">contact: <br /> +880123456</span>
          <span style={{borderRadius: '24px 24px 2px'}} className="bg-[#a8e3da] absolute animate-updown bottom-32 left-20 py-2 px-3 text-gray-400">visit us <br />Dhaka Bonani</span>
          <div className="w-full absolute top-0 left-0">
           
          </div>
          <div className="w-full absolute top-0 left-0">
            {/* <Lottie
              options={{
                animationData: cloud,
                loop: true,
                autoplay: true,
              }}
            /> */}
          </div>
          {/* <div className="w-full absolute top-0 left-0 opacity-10">
            <Lottie
              options={{
                animationData: cloud2,
                loop: true,
                autoplay: true,
              }}
            />
          </div> */}
        </div>
        {/* --- form section --- */}
        <div className="md:w-1/2 h-[450px]">
          <div className="rounded-md">
            <form
              className="card-body relative"
              style={{ zIndex: 10 }}
              action="https://getform.io/f/8df9c731-aceb-4ca8-bde5-927f97ba1b59"
              method="POST"
            >
              <h1 className="text-2xl mb-2 font-semibold">
                Send Us Message Anytime
              </h1>
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input rounded-full bg-[#e6fefe] pl-7"
                  // style={{ borderBottom: "2px solid #0a4d68" }}
                  required
                />
              </div>
              <div className="form-control my-2">
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="input rounded-full bg-[#e6fefe] pl-7"
                  // style={{ borderBottom: "2px solid #0a4d68" }}
                  required
                />
              </div>
              <div className="form-control">
                <textarea
                  name="message"
                  placeholder="Type Message"
                  className="input rounded-full resize-none h-[100px] pt-3 pl-7 bg-[#e6fefe]"
                  // style={{ borderBottom: "2px solid #0a4d68" }}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="defaultBtn">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
