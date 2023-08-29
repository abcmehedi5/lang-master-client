import React, { useState } from "react";
import { Link } from "react-router-dom";

interface BlogRightSidebarProps {
  items: {
    _id: number;
    name: string;
    image: string;
    title: string;
    description: string;
  }[];
}

const BlogRightSidebar: React.FC<BlogRightSidebarProps> = ({ items }) => {
  const [showAll, setShowAll] = useState<boolean>(false);

  return (
    <div>
      {items.length == 0 ? (
        <p className="text-2xl text-center my-3 font-bold text-gray-500">{`You don't any have blog yet`}</p>
      ) : (
        <>
          {items.slice(0, showAll ? items.length : 1).map((item) => (
            <div className="card bg-base-100 shadow-xl my-3" key={item._id}>
              <figure>
                <img src={item.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {item.title}
                  <div className="badge badge-secondary">{item.name}</div>
                </h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <Link to={`/singleBlogCard/${item._id}`}>
                    <button className="btn btn-primary">Read More!</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {items.length == 0 ? (
        ""
      ) : (
        <p
          className="text-xl underline text-center cursor-pointer"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show less" : "Show more"}
        </p>
      )}
    </div>
  );
};

export default BlogRightSidebar;
