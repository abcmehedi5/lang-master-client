import BlogMainContain from "./BlogMainContain";
import BlogRightSidebar from "./BlogRightSidebar";
import useBlogData from "../../hooks/useBlogData";
// import BlogLeftSidebar from "./BlogLeftSidebar";
import BlogPost from "./BlogPost";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Blogs = () => {
  const { blog } = useBlogData();
  const { user } = useContext(AuthContext)
  // const business = blog.filter(
  //   (item: { category: string }) => item.category === "business"
  // );
  const myBlogs = blog.filter(item => item.email === user?.email)
  // const healthcare = blog.filter(
  //   (item: { category: string }) => item.category === "healthcare"
  // );
  // const design = blog.filter(
  //   (item: { category: string }) => item.category === "design"
  // );

  return (
    <>
      <div className="md:flex gap-4 px-10 my-3 w-full">
        {/* <div className="basis-1/6">
          <BlogLeftSidebar items={healthcare} />
          <BlogLeftSidebar items={design} />
        </div> */}
        <div className="w-[70%] sticky top-0 h-full">
          <BlogPost></BlogPost>
          <BlogMainContain />
        </div>
        <div className="w-[30%] mx-auto">
          <h1 className="text-center text-4xl font-semibold mt-6 rounded-xl py-5 bg-base-300">My Blogs</h1>
          <BlogRightSidebar items={myBlogs} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
