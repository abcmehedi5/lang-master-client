import paperplane from "../../../../public/paperplane2.json";
import contact from "../../../../public/contact.jpg";
import Lottie from "lottie-react-web";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useEffect } from "react";
import Aos from "aos";

const Contact = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="my-20">
      <SectionTitle titleLetter="Connect " titleWord="With Us"></SectionTitle>
      <div className="md:flex items-center justify-center md:h-[400px] relative mt-14">
        <div
          className="w-full absolute top-0 left-0 h-full"
          style={{ zIndex: 10 }}
          data-aos="fade-zoom-in"
          data-aos-duration="1000"
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
        <div
          className=" md:w-1/2 h-[440px] relative bg-[#e6fefe]"
          data-aos="fade-zoom-in"
          data-aos-duration="1200"
        >
          <img className="h-full w-full object-cover" src={contact} alt="" />

          <span
            style={{ borderRadius: "24px 24px 2px", lineHeight: "17px" }}
            className="bg-[#93cbff] font-mono absolute animate-updown top-10 left-10 p-3 border text-gray-500"
          >
            Email <br /> abcde@gmail.com
          </span>
          <span
            style={{ borderRadius: "24px 24px 24px 2px", lineHeight: "17px" }}
            className="bg-[#ffe4ba] absolute font-mono animate-updown top-32 right-8 py-2 px-3 border text-gray-500"
          >
            contact
            <br />
            +880123456
          </span>
          <span
            style={{ borderRadius: "24px 24px 2px", lineHeight: "17px" }}
            className="bg-[#a6fff2] absolute font-mono animate-updown bottom-32 left-20 py-2 px-3 border text-gray-500"
          >
            visit us <br />
            Dhaka Bonani
          </span>
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
              <h1 className="text-2xl text-center mb-2 font-semibold">
                Send Us Message Anytime
              </h1>
              <div className="form-control rounded-full border-2 p-1">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="input rounded-full bg-[#e6fefe] pl-7"
                  // style={{ borderBottom: "2px solid #0a4d68" }}
                  required
                />
              </div>
              <div className="form-control my-2 rounded-full border-2 p-1">
                <input
                  type="email"
                  placeholder="Enter a valid email address"
                  className="input rounded-full bg-[#e6fefe] pl-7"
                  // style={{ borderBottom: "2px solid #0a4d68" }}
                  required
                />
              </div>
              <div className="form-control rounded-full border-2 p-1">
                <textarea
                  name="message"
                  placeholder="Type Message"
                  className="input rounded-full resize-none h-[100px] pt-3 pl-7 bg-[#e6fefe]"
                  // style={{ borderBottom: "2px solid #0a4d68" }}
                ></textarea>
              </div>

              <div className="form-control mt-6">
                <button className="defaultBtn">Send Messege</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
