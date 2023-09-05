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
        <p className="text-xl bg-base-200 text-center my-3 py-3 font-bold text-gray-500">{`You don't any have blog yet`}</p>
      ) : (
        <>
          {items.slice(0, showAll ? items.length : 1).map((item) => (
             <Link to={`/singleBlogCard/${item._id}`}>
             <div className="rounded-md bg-base-100 shadow-md my-3" key={item._id}>
              <figure>
                <img className="h-40 w-full object-cover rounded-tl-md rounded-tr-md" src={item.image} alt="Shoes" />
              </figure>
              <div className="p-2">
                <div className="badge badge-secondary">{item.name}</div>
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description.slice(0, 60)}</p>
                <div className="card-actions justify-end">
                 
                </div>
              </div>
            </div>
           </Link>
           
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
