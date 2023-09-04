import { useState } from "react";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import Comments from "./Comments/Comments";
import Share from "./Share/Share";
import Like from "./Like/Like";

import "./BlogMainContain.css";
import { AiFillHeart } from "react-icons/ai";

const BlogMainContain = ({filterblog}) => {
  // const [showCommentInput, setShowCommentInput] = useState(false);
  // const [sharedData]: any = useState(null);

  return (




    <>
      <div className="mb-7 grid md:grid-cols-2 gap-5">
        {filterblog.map((item: any) => (
          
          <Link to={`/singleBlogCard/${item?._id}`}>
            <div
              key={item._id}
              className="rounded-md pt-3 pl-3 h-48 relative overflow-hidden"
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
              <div
                className="rounded-md"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), black)", // Gradient overlay
                }}
              ></div>

              <div className="text-white absolute flex flex-col gap-1">
                <p className="text-sm">{item?.uploadedtime}</p>
                <h3 className="text-xl font-bold">Title: {item?.title}</h3>
                <p>{item?.description.slice(0, 60)} ...</p>
                
                  <div className="flex gap-1 items-center ">
                    <img
                      src={item?.authorImage}
                      alt="author image"
                      className="h-11 w-11 rounded-full"
                    />
                    <p className="text-xl">{item?.name.split(" ")[0]}</p>
                  </div>
                
              </div>

              {/* like comment and share */}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogMainContain;
