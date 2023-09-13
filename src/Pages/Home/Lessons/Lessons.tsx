import { Link } from "react-router-dom";

const Lessons = () => {
  return (
    <div className="my-28">
      <div className="md:flex items-center justify-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-gray-800">
            Why You'll Love Learning with{" "}
            <span className="text-[#95d3a2]">LangMaster</span>
          </h2>
          <p className="my-3 font-sans text-gray-500">
            Our courses provide effective and successful training in reading,
            listening, and speaking skills. Learn about our latest research!
          </p>
          <div data-aos="fade-in" className="shadow-2xl lg:flex items-center gap-4 px-5 justify-center py-5 lg:h-[200px] rounded-lg my-4">
            <iframe
              width="250"
              height="150"
              className="rounded-md
          "
              src="https://www.youtube.com/embed/csXPyyKX94Y?si=anRfkoEFShOFNxRA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <div>
              <p className="font-sans font-semibold">
                Watch this video to clear the confusion to learn from online
                website🥰
              </p>
              <p className="text-gray-500">
                Video from{" "}
                <a
                  className="underline text-blue-500"
                  target="_blank"
                  href="https://www.youtube.com/@collegeofartsletters"
                >
                  Michigan State University
                </a>
              </p>
            </div>
          </div>
          <Link to="/about-us">
            <button className="defaultBtn">Know More About us</button>
          </Link>
        </div>
        <div className="md:w-1/2">
          <div
            className="bg-[#b2f5c1a5]"
            style={{ borderRadius: "80% 70% 70% 80% " }}
          >
            <img
              className="h-[450px] lg:object-cover"
              src="https://i.ibb.co/GpgYBSQ/7753413-removebg-preview.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
