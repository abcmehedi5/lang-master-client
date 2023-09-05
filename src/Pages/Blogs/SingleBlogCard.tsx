import { AiTwotoneMail } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import Like from "./Like/Like";
import useBlogData from "../../hooks/useBlogData";
import { useState } from "react";
import Share from "./Share/Share";

const SingleBlogCard = () => {
  const data: any = useLoaderData();
  const { blog } = useBlogData();
  console.log(data.likedUsers)

  const ownBlog = blog.filter(own => own.email === data.email && own._id !== data._id
  );
  const [sharedData]: any = useState(null);

  return (
    <div
      className="md:flex w-10/12 py-4 my-8 mx-auto gap-6"
    >
      <div className="md:w-[70%] md:sticky top-0 h-full">
        <img
          className="w-full h-[550px] object-cover rounded-lg"
          src={data?.image}
          alt="post image"
        />
        <p className="text-gray-400 my-3">{data?.uploadedtime}</p>
        <h1 className="text-3xl mb-2 font-semibold capitalize">
          {data?.title}
        </h1>
        <p className="text-xl text-gray-600">{data?.description}</p>

        {/* -------------------------------------------------- */}
        <hr className="my-4" />
        {/* like, comment, share */}
        <div className="card-actions justify-between m-4 font-semibold text-2xl">
          {/* Like  */}
          <Like postId={data._id} like={data.like} likedUsers = {data.likedUsers} />
          {/* Share */}
          <button className="flex gap-2">
            <Share />
            <span>Share</span>
          </button>
        </div>

        {/* {showCommentInput && <Comments />}  */}
        {sharedData && (
          <div>
            <p>Shared: {sharedData}</p>
          </div>
        )}

        <hr className="my-4" />
      </div>

      <div className="md:w-[30%] mx-auto text-center">
        <h2 className="capitalize text-3xl font-semibold">publisher</h2>
        <hr className="my-4" />
        <div className="flex gap-1">
          <img
            className="w-[100px] mx-auto h-[100px] object-cover"
            src={data?.authorImage}
            alt=""
          />
          <div className="text-start">
            <h2 className="text-2xl my-3 font-semibold">{data?.name}</h2>
            <p className="flex gap-1 text-lg">
              <AiTwotoneMail className="text-3xl" /> : {data?.email}
            </p>
          </div>
        </div>
        <hr className="my-4" />
        {/* ----------------------- */}
        <h4 className="text-2xl mb-2 font-semibold">More Content</h4>
        {ownBlog.map(blog => (
          <div key={blog._id}>
            <Link to={`/singleBlogCard/${blog?._id}`}>
              <div className="flex gap-2 mb-3 bg-base-200 hover:bg-base-300 cursor-pointer">
                <img
                  className="w-20 h-20 object-cover"
                  src={blog?.image}
                  alt="blog"
                />
                <div className="text-start">
                  <h3 className="font-semibold text-xl">{blog?.title}</h3>
                  <p>{blog?.description.slice(0, 30)}...</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleBlogCard;
