import img1 from "../../assets/about-us-image/young-executive-with-black-briefcase (1).png";
import img2 from "../../assets/about-us-image/proud-young-lady-sitting-table-holding-document-showing-her-strength-office 1 (1).png";
import img3 from "../../assets/about-us-image/playing-fool-spacious-terrace 1.png";
import img4 from "../../assets/about-us-image/multiracial-group-people-waiting-job-interview-grey-background 1 (1).png";
import img5 from "../../assets/about-us-image/man.png";
const AboutUs = () => {
  return (
    <div className="container mx-auto mt-10">
      <div className="lg:flex flex-row items-center gap-8 m-4">
        <img
          className="  md:w-[469px] md:h-[550px] w-full mx-auto"
          src={img1}
          alt=""
        />
        <div>
          <h2 className="text-3xl uppercase font-bold bg-slate-200 p-3 rounded mb-3 ">
            About us
          </h2>
          <hr className="mb-4" />
          <p className="text-justify">
            Lang master is: Connecting tech professionals and recruiters through
            AI and community support. Join our growing platform to enhance your
            job search, engage with a vibrant community, and unlock your
            potential in the tech industry. Let's thrive together. <br />
            Dev For Hire is a rapidly-growing community and AI-based job portal
            that is dedicated to helping tech job seekers and recruiters connect
            with each other. Our platform is designed to make the job search
            process more efficient and effective by leveraging the power of AI
            and community support. <br />
            As a company that has recently launched, we are proud to have a
            large and active community of tech professionals, job seekers, and
            fresh graduate students. Our community is the backbone of our
            platform, where members can engage with each other, share their
            experiences, and ask for advice. We believe in the power of
            community support and strive to make our members feel heard and
            valued.
            <br />
            Our primary goal is to create a platform that supports the growth
            and development of tech professionals, businesses, startups, and
            fresh graduate students alike. Our AI algorithms analyze job
            postings and resumes to identify the best matches, saving time and
            increasing the likelihood of a successful job search. We provide job
            search tools, resume and cover letter assistance, and interview
            coaching to job seekers, including fresh graduate students.
            <br />
            In addition to our job portal, we also offer a variety of services
            to help individuals, businesses, and startups in the tech industry
            grow. We offer bootcamps, webinars, and other resources for learning
            and career development. Our blog features articles on the latest
            trends and news in the tech industry, as well as advice and insights
            from industry experts.
            <br />
            Our target audience includes tech job seekers and recruiters who are
            looking for a more efficient and effective way to connect with each
            other, as well as fresh graduate students who are looking to
            kickstart their careers in the tech industry. We believe in the
            power of collaboration, community, and innovation. Whether you're a
            job seeker, employer, or startup in the tech industry, we are here
            to support you in achieving your goals. Join our community today and
            let's grow together!
          </p>
        </div>
      </div>

      {/* Strength */}

      <div className="lg:flex flex-row items-center justify-between gap-8 mt-16 m-4">
        <div>
          <p className="text-justify md:w-[560px] md:h-[240px] w-full">
            <strong>Strength</strong>: <br />
            Our strength lies in the combination of AI technology and a vibrant
            community. By leveraging AI algorithms, we are able to provide
            efficient and accurate job matches, saving time for both job seekers
            and recruiters. Our active community of tech professionals, job
            seekers, and fresh graduate students is the backbone of our
            platform, providing support, engagement, and valuable insights. This
            combination of technology and community sets us apart and allows us
            to create a unique and effective job search experience.
          </p>
        </div>
        <img
          className=" md:w-[455px] md:h-[360px] rounded-md w-full mx-3"
          src={img2}
          alt=""
        />
      </div>

      {/* mission */}

      <div className="bg-cyan-50 p-3 mt-16 rounded">
        <div className="lg:flex flex-row items-center justify-between gap-8  m-4">
          <img className=" w-[470px] h-[360px] rounded-md" src={img3} alt="" />
          <div>
            <p className="text-justify md:w-[560px] md:h-[240px] w-full mt-3">
              <strong>Mission:</strong> <br /> Our mission is to empower and
              connect tech job seekers, recruiters, and fresh graduate students
              through an AI-based job portal and a thriving community. We strive
              to make the job search process more efficient and effective by
              utilizing advanced AI algorithms to analyze job postings and
              resumes, ensuring the best matches for both parties. We are
              dedicated to supporting the growth and development of individuals,
              businesses, startups, and the overall tech industry. We aim to
              provide comprehensive resources, learning opportunities, and a
              supportive community to help our members achieve their career
              goals.
            </p>
          </div>
        </div>
      </div>

      {/* cover for about us */}

      <div className="mt-10">
        <img
          className="w-full md:h-[320px] rounded-md h-full"
          src={img4}
          alt=""
        />
      </div>

      {/* about us card section */}
      <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-4 mx-3">
        <div className="text-center shadow-2xl   bg-white-300 p-3 rounded-md">
          <img className="rounded-full mx-auto w-[100px]" src={img5} alt="" />
          <h4 className="text-md font-bold mt-3">Md: Mehedi Hassan</h4>
          <p className="text-sm">Full stack web developer</p>
        </div>
        <div className="text-center shadow-2xl   bg-white-300 p-3 rounded-md">
          <img className="rounded-full mx-auto  w-[100px]" src={img5} alt="" />
          <h4 className="text-md font-bold mt-3">Md: Mehedi Hassan</h4>
          <p className="text-sm">Full stack web developer</p>
        </div>

        <div className="text-center shadow-2xl   bg-white-300 p-3 rounded-md">
          <img className="rounded-full mx-auto w-[100px]" src={img5} alt="" />
          <h4 className="text-md font-bold mt-3">Md: Mehedi Hassan</h4>
          <p className="text-sm">Full stack web developer</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
