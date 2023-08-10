import wave from "../../../../public/wave5.svg";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <img src={wave} alt="bg" />
      <div className="bg-[#0b4e69] flex items-center justify-between py-2 px-5">
        <div>
          <h2 className="btn btn-ghost normal-case text-xl text-white">
            Lang-Master
          </h2>
        </div>
        {/* -- icons--- */}
        <div className="flex items-center gap-3">
          <a>
            <BiLogoFacebook className="text-4xl rounded-full p-2 text-white bg-[#4268b2]" />
          </a>
          <a>
            <BsTwitter className="text-4xl rounded-full p-2 text-white bg-[#1f9fef]" />
          </a>
          <a>
            <BsInstagram className="text-4xl rounded-full p-2 text-white bg-[#db316d]" />
          </a>
          <a>
            <FaLinkedinIn className="text-4xl rounded-full p-2 text-white bg-[#0375b3]" />
          </a>
          <a>         
        
            <AiFillYoutube className="text-4xl rounded-full p-2 text-white bg-[#f90304]" />
          </a>
        </div>
      </div>
      <hr className="border-t-2 border-[#05bfdb]"/>
      <div className="footer justify-between  p-10 bg-[#0b4e69] text-white">
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
        <div>
          <span className="footer-title">Newsletter</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered w-full pr-16 text-black"
              />
              <button className="btn btn-primary absolute top-0 right-0 rounded-l-none ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-t-2 border-[#05bfdb]"/>
      <div className="flex items-center justify-between bg-[#0b4e69] py-4 px-8 text-white">
        <div className="flex">
          <p>copyrite &copy;2021</p>
          &nbsp;
          <p className="font-semibold">All rights reserved</p>
        </div>
        <div className="flex">
          <p>Privacy Policy</p>
          &nbsp; &nbsp;
          <p>Terms and Condition</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
