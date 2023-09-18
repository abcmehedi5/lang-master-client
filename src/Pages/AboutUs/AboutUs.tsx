import img2 from "../../assets/about-us-image/proud-young-lady-sitting-table-holding-document-showing-her-strength-office 1 (1).png";
import img3 from "../../assets/about-us-image/playing-fool-spacious-terrace 1.png";
import akash from "../../assets/about-us-image/team/akash.jpg";
import jhimi from "../../assets/about-us-image/team/jhimi.jpg";
import mehedi from "../../assets/about-us-image/team/mehedi.jpg";
import mostakim from "../../assets/about-us-image/team/mostakim.jpg";
import nazmul from "../../assets/about-us-image/team/nazmul.jpg";
import arjuman from "../../assets/about-us-image/team/arjuman.jpg";
import { useEffect } from "react";
import SubHeader from "../../Components/SubHeader/SubHeader";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const AboutUs = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <Helmet>
        <title>About us | Lang Master </title>
      </Helmet>
      <SubHeader title={"About us"}></SubHeader>

      <div className="w-11/12 md:w-10/12 mx-auto">
        <div className="text-center mt-4">
          <h3 className="text-3xl font-semibold mb-3">
            Meet our team of experts in developing and building a flawless
            website.
          </h3>
          <p className="text-gray-500 text-sm font-medium">
            Our team is composed of dedicated professionals with a wealth of
            experience in creating exceptional websites. Each member brings a
            unique set of skills and expertise, ensuring that every aspect of
            your project is handled with precision and care. From design to
            development, we work tirelessly to bring your vision to life. With a
            keen eye for detail and a passion for innovation, we strive to
            deliver nothing short of excellence. Partner with us, and let's turn
            your ideas into an extraordinary online presence.
          </p>
        </div>
        {/* about us card section */}
        <div className="my-10 grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-7">
          <div
            className="text-center bg-[#ffeed3] py-10 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              className="rounded-full mx-auto w-[100px]"
              src={mehedi}
              alt=""
            />
            <h4 className="text-md font-bold mt-3">Md: Mehedi Hassan</h4>
            <p className="text-sm font-serif px-14">
              Worked as a Full stack web developer in this project
            </p>
          </div>
          <div
            className="text-center bg-[#c9dbcdae] py-10 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              className="rounded-full mx-auto w-[100px] h-[100px]"
              src={nazmul}
              alt=""
            />
            <h4 className="text-md font-bold mt-3">Md: Nazmul Hossain</h4>
            <p className="text-sm font-serif px-14">
              Worked as a Full stack web developer in this project
            </p>
          </div>

          <div
            className="text-center  bg-[#f5d2bc8b] py-10 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              className="rounded-full mx-auto w-[100px]"
              src={jhimi}
              alt=""
            />
            <h4 className="text-md font-bold mt-3">Ummay Khulsum Jhimi</h4>
            <p className="text-sm font-serif px-14">
              Worked as a Full stack web developer in this project
            </p>
          </div>

          <div
            className="text-center  bg-[#f2eeeb] py-10 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              className="rounded-full mx-auto w-[100px]"
              src={mostakim}
              alt=""
            />
            <h4 className="text-md font-bold mt-3">Md. Mostakim Ahamed</h4>
            <p className="text-sm font-serif px-14">
              Worked as a Full stack web developer in this project
            </p>
          </div>

          <div
            className="text-center  bg-[#e6caa385] py-10 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              className="rounded-full mx-auto w-[100px]"
              src={akash}
              alt=""
            />
            <h4 className="text-md font-bold mt-3">Akas Datta</h4>
            <p className="text-sm font-serif px-14">
              Worked as a Full stack web developer in this project
            </p>
          </div>

          <div
            className="text-center bg-[#cee6f27d] py-10 rounded-md"
            style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
          >
            <img
              className="rounded-full mx-auto w-[100px]"
              src={arjuman}
              alt=""
            />
            <h4 className="text-md font-bold mt-3">Most. Arjuman Jesmin</h4>
            <p className="text-sm fsefont-serif px-14mono">
              Worked as a MERN stack developer in this project
            </p>
          </div>
        </div>

        <div className="md:flex items-center gap-5">
          <div className="lg:w-[40%] md:mb-0 mb-8">
            <div className="relative w-full md:-mt-8">
              <Link to="/user-dashboard/grammar">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1200"
                  className="md:w-[400px] hidden md:block hover:z-50 rounded-lg border-4 absolute left-0 -top-28"
                  src="https://i.ibb.co/D8wNrb7/Screenshot-7696.png"
                  alt=""
                />
              </Link>
              <Link to="/blog">
                <img
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  className="md:w-[400px] hover:z-50 hidden md:block rounded-lg border-4 absolute top-28"
                  src="https://i.ibb.co/H4L7mKs/Screenshot-7667.png"
                  alt=""
                />
              </Link>
              <Link to="/">
                <img
                  data-aos="zoom-in"
                  data-aos-duration="1200"
                  className="md:w-[400px] w-full  rounded-lg border-4 md:absolute top-0 lg:right-20 hover:scale-150"
                  src="https://i.ibb.co/JrxvB4V/Screenshot-76566.png"
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="lg:w-[60%] md:mt-20">
            <h2 className="text-3xl">Let's talk about the Lang-Master</h2>
            <hr className="my-2" />
            <div className="text-gray-600 text-justify">
              <p>
                Langmaster is a dynamic and innovative online platform dedicated
                to revolutionizing the way individuals learn English. With an
                array of engaging unites designed to challenge and educate users
                at every level, Langmaster offers a comprehensive learning
                experience tailored to individual needs. As users progress
                through the meticulously crafted curriculum, they not only gain
                proficiency in the English language but also unlock a sense of
                achievement. Upon successfully completing all unites, Langmaster
                awards a prestigious certificate, a testament to the dedication
                and effort invested in mastering this global language. Join us
                on this transformative journey towards English language
                proficiency, and let Langmaster be your trusted companion in the
                pursuit of linguistic excellence.
              </p>
              <p className="my-1">
                There are some more exciting features of Lang-Master. Here we
                have a blog page where users can post blogs; this is a different
                way to gather knowledge. We can like and share our blog on
                different platforms like Facebook, WhatsApp, and LinkedIn. We
                have a translator to translate English to any other language.
                One of the most exciting features is we can buy books by earning
                coins after finishing every lock unites. And manymore.☺
              </p>
              <p>
                Otherwise, we have a support system if any user needs it. They
                can contact us for any help anytime.
              </p>
            </div>
          </div>
        </div>

        {/* Strength */}

        <div className="lg:flex items-center justify-between gap-8 my-10 md:my-32">
          <div>
            <p className="text-justify text-gray-600">
              <strong>Strength</strong>: <br />
              Langmaster's strength lies in its innovative approach to English
              language learning. With a diverse team of skilled developers,
              including Md. Mehedi Hassan, Md. Nazmul Hossain, Ummay Khulsum
              Jhimi, Md. Mostakim Ahamed, Akas Datta, and Most. Arjuman Jesmin,
              the platform has been expertly crafted to provide users with a
              seamless and comprehensive learning experience. Each team member
              brings a unique set of skills and expertise, ensuring that every
              aspect of the project is handled with precision and care. This
              collective effort results in a platform that not only challenges
              and educates users at every level but also grants a tangible sense
              of achievement upon completion. The incorporation of features like
              a blog page, social media sharing, and a built-in translator
              further enriches the user experience. Additionally, the ability to
              earn coins for book purchases adds a motivational element to the
              learning process. With a dedicated support system in place,
              Langmaster ensures that users can seek assistance whenever needed.
              This combination of technological innovation and a committed team
              sets Langmaster apart, making it a powerful tool for English
              language proficiency.
            </p>
          </div>
          <img
            className="md:w-[455px] md:h-[360px] mt-5 rounded-md w-full"
            src={img2}
            alt=""
          />
        </div>

        {/* mission */}

        <div className="bg-[#cee6f27d] p-5 rounded">
          <div className="lg:flex flex-row items-center justify-between gap-8">
            <img className="w-[470px] h-[360px] rounded-md" src={img3} />
            <div>
              <p className="text-justify w-full mt-3 text-gray-600">
                <strong>Mission:</strong> <br /> Our mission at Langmaster is to
                empower individuals worldwide with the skills and confidence to
                master the English language. We are committed to providing a
                dynamic and innovative platform that revolutionizes the learning
                experience. Through a meticulously crafted curriculum and
                engaging learning units, we aim to challenge and educate users
                at every level. Our goal is not only to help users gain
                proficiency in English but also to instill a sense of
                accomplishment and confidence in their language abilities. We
                believe that language learning should be accessible to all, and
                we strive to create an inclusive and supportive community of
                learners. By offering a prestigious certificate upon completion
                of all units, we recognize and celebrate the dedication and
                effort invested by our users. Join us on this transformative
                journey towards English language proficiency, and let Langmaster
                be your trusted companion in the pursuit of linguistic
                excellence.
              </p>
            </div>
          </div>
        </div>

        {/* cover for about us */}

        {/* <div className="mt-10">
          <img
            className="w-full md:h-[320px] rounded-md h-full"
            src={img4}
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
};

export default AboutUs;
