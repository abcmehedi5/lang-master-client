import React, { useState } from "react";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import Comments from "./Comments/Comments";
import Share from "./Share/Share";
import Like from "./Like/Like";
import useBlogData from "../../hooks/useBlogData";
import "./BlogMainContain.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

// interface BlogMainContainProps {
//   items: {
//     _id: number;
//     name: string;
//     image: string;
//     title: string;
//     description: string;
//     category: string;
//   }[];
// }

const BlogMainContain = () => {
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [sharedData] = useState<string | null>(null);

  const { blog } = useBlogData();
  console.log(blog);

  const itemsPerPage = 2;
  const maxDescriptionWords = 10;

  // Calculate the number of slider pages
  const totalPages = Math.ceil(blog.length / itemsPerPage);

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return `<span class="${className} custom-pagination-bullet">${
        index + 1
      }</span>`;
    },
  };

  const truncateDescription = (description: string) => {
    const words = description.split(" ");
    if (words.length > maxDescriptionWords) {
      return words.slice(0, maxDescriptionWords).join(" ") + " ...";
    }
    return description;
  };

  return (
    <>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {[...Array(totalPages)].map((_, page) => (
          <SwiperSlide key={page}>
            <div>
              {blog
                .slice(page * itemsPerPage, (page + 1) * itemsPerPage)
                .map((item: any) => (
                  <div key={item._id} className="p-4 rounded-lg border my-4">
                    <div className="flex gap-3 justify-between my-3">
                     <div className="flex gap-3 items-center"> {item.authorImage ? (
                        <img
                          className="w-14 h-14 rounded-full"
                          src={item?.authorImage}
                          alt="author Image"
                        />
                      ) : (
                        <img
                          className="w-14 h-14 rounded-full"
                          src="https://i.ibb.co/nkydWsQ/download.png"
                        />
                      )}
                      <div>
                        {" "}
                        <h1 className="text-xl">{item?.name}</h1>
                        <p className="text-gray-400 text-sm">
                          {item?.uploadedtime}
                        </p>
                      </div></div>
                      <div className="text-3xl hover:bg-base-200 rounded-md text-gray-600 font-bold px-5 cursor-pointer">...</div>
                    </div>
                    <div className="card glass">
                      <figure>
                        <img
                          className="w-full object-cover"
                          src={item.image}
                          alt="car!"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p>{truncateDescription(item.description)}</p>
                        <Link to={`/singleBlogCard/${item._id}`}>
                          <span className="see-more underline text-sm text-blue-500">
                            See More
                          </span>
                        </Link>
                        <div className="card-actions justify-end">
                          <Link to={`/singleBlogCard/${item._id}`}>
                            <button className="btn bg-indigo-600 text-white">
                              Read More!
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="card-actions justify-between m-4 font-semibold">
                      {/* Like  */}
                      <Like />
                      {/* Comment */}
                      <button
                        onClick={() => setShowCommentInput(!showCommentInput)}
                        className="flex items-center"
                      >
                        <BiComment /> Comment
                      </button>

                      {/* Share */}
                      <button className="flex items-center">
                        <Share />
                        Share
                      </button>
                    </div>
                    {showCommentInput && <Comments />}
                    {sharedData && (
                      <div>
                        <p>Shared: {sharedData}</p>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BlogMainContain;
