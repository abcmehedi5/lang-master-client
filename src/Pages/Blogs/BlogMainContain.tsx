import React from "react";
import { Link } from "react-router-dom";

interface BlogItem {
  _id: string;
  image: string;
  uploadedtime: string;
  title: string;
  description: string;
  authorImage: string;
  name: string;
}

interface BlogMainContainProps {
  filterblog: BlogItem[];
}

const BlogMainContain: React.FC<BlogMainContainProps> = ({ filterblog }) => {
  return (
    <>
      <div className="mb-7 grid md:grid-cols-2 gap-5">
        {filterblog.map((item) => (
          <Link to={`/singleBlogCard/${item._id}`} key={item._id}>
            <div
              // data-aos="flip-down"
              data-aos="fade-up"
              // data-aos-easing="linear"
              data-aos-duration="1000"
              className="rounded-md pt-3 pl-3 h-52 relative overflow-hidden"
              style={{
                boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "100% 100%",
                backgroundRepeat: "no-repeat",
                objectFit: "cover",
              }}
            >
              {/* Overlay div */}
              <div className="rounded-md absolute inset-0 bg-black/30"></div>

              <div className="text-white absolute inset-0 flex flex-col gap-1 p-4 space-y-3">
                <p className="text-sm">{item.uploadedtime}</p>
                <h3 className="text-xl font-bold capitalize">
                  Title: {item.title}
                </h3>
                <p>
                  {item.description
                    ? `${item.description.slice(0, 60)} ...`
                    : "No description available"}
                </p>

                <div className="flex gap-3 items-center ">
                  <img
                    src={item.authorImage}
                    alt="author image"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <p className="text-xl">
                    {item.name ? `${item.name.split(" ")[0]}` : "No Name"}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogMainContain;
