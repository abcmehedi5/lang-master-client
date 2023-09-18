import wave from "../../../../public/wave (3).svg";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillYoutube, AiOutlineClose } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";
import Review from "../../Review/Review";
import { Link } from "react-router-dom";

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <footer>
      <img src={wave} alt="bg" />
      {/* <div className="bg-[#156279] grid grid-cols-1 md:grid-cols-2 py-2 px-5"> */}
      {/* <div>
          <img
            className="object-cover w-32"
            src="https://i.ibb.co/bgbkbc2/logo.png"
            alt=""
          />
        </div> */}
      {/* -- icons--- */}
      {/* </div> */}

      <hr className="border-t-2 border-white" />
      <div className="footer justify-between md:px-20 lg:px-44 p-10 bg-[#156279] text-white">
        <div>
          <span className="footer-title">Subscribe Our Newsletter</span>
          <div className="form-control w-full sm:w-80">
            <label className="label">
              <span className="label-text text-white">
                Enter your email address
              </span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-black sm:text-sm"
              />
              <button className="btn btn-outline border-2 border-gray-800 absolute top-0 right-0 rounded-l-none sm:text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <Link className="link link-hover" to={"/user-dashboard/learning"}>
            <p>Learning</p>
          </Link>
          <Link className="link link-hover" to={"/user-dashboard/grammar"}>
            <p>Grammar</p>
          </Link>
          <Link className="link link-hover" to={"/user-dashboard/book-buy"}>
            <p>Book Buy</p>
          </Link>
          <Link className="link link-hover" to={"/user-dashboard/shop"}>
            <p>Coin Buy</p>
          </Link>
        </div>
        <div>
          <span className="footer-title">Platform</span>
          <Link className="link link-hover" to={"/user-dashboard/profile"}>
            <p>Profile</p>
          </Link>
          <Link className="link link-hover" to={"/about-us"}>
            <p>About Us</p>
          </Link>
          <Link className="link link-hover" to={"/contact"}>
            <p>Contact</p>
          </Link>
          {/* Open the modal */}
          <a className="link link-hover" onClick={openModal}>
            Feedback
          </a>

          {/* The DaisyUI modal */}
          <>
            {isModalOpen && (
              <div className="fixed inset-0 z-40 flex items-center justify-center">
                <div className="modal modal-open">
                  <div className="modal-box">
                    <div className="modal-action flex justify-center">
                      <button
                        onClick={closeModal}
                        className="w-12 h-12 bg-red-300 rounded-full flex justify-center items-center"
                      >
                        <AiOutlineClose className="text-xl" />
                      </button>
                    </div>
                    <div className="modal-body p-6">
                      <Review />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
        <div>
          <span className="footer-title">Others</span>
          <Link className="link link-hover" to={"introduction"}>
            Introduction
          </Link>
          <Link className="link link-hover" to={"/faq"}>
            <p>FAQ</p>
          </Link>
          <Link className="link link-hover" to={"/privacy-policy"}>
            <p>Privacy Policy</p>
          </Link>
          {/* &nbsp; &nbsp; */}
          <Link className="link link-hover" to={"/terms-and-condition"}>
            <p>Terms and Condition</p>
          </Link>
        </div>
      </div>
      <hr className="border-t-2 border-white" />
      {/* under hr line  */}
      <div className="bg-[#0b4e69] pt-6 px-8 mx-auto text-gray-100">
        {/* social  */}
        <div className="flex items-center justify-center gap-3">
          {" "}
          {/* Added 'md:justify-start' */}
          <a className="hover:cursor-pointer">
            <BiLogoFacebook className="text-4xl rounded-full p-2 text-white bg-[#4268b2]" />
          </a>
          <a className="hover:cursor-pointer">
            <BsTwitter className="text-4xl rounded-full p-2 text-white bg-[#1f9fef]" />
          </a>
          <a className="hover:cursor-pointer">
            <BsInstagram className="text-4xl rounded-full p-2 text-white bg-[#db316d]" />
          </a>
          <a className="hover:cursor-pointer">
            <FaLinkedinIn className="text-4xl rounded-full p-2 text-white bg-[#0375b3]" />
          </a>
          <a className="hover:cursor-pointer">
            <AiFillYoutube className="text-4xl rounded-full p-2 text-white bg-[#f90304]" />
          </a>
        </div>
        <div className="flex justify-center mt-6 pb-4">
          <p>Copyright &copy;2023</p>
          &nbsp;
          <p className="text-gray-200">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
