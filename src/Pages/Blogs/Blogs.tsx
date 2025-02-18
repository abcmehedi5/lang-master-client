import BlogMainContain from "./BlogMainContain";
import BlogRightSidebar from "./BlogRightSidebar";
import useBlogData from "../../hooks/useBlogData";
import BlogPost from "./BlogPost";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import SubHeader from "../../Components/SubHeader/SubHeader";
import SearchBlog from "./SearchBlog";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  const [search, setSearch] = useState("");

  const { blog } = useBlogData();
  console.log(blog);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  // my all blogs---------------
  const { user }: any = useContext(AuthContext);
  const myBlogs = blog.filter((item: any) => item.email === user?.email);

  // sorted filterdata ---------------
  const sortedBlog = [...blog].sort(
    (a: any, b: any) =>
      new Date(b.uploadedtime).getTime() - new Date(a.uploadedtime).getTime()
  );

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const filterblog = sortedBlog.filter(
    (item) =>
      item?.title.toLowerCase().includes(search.toLowerCase()) ||
      item?.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Blogs | Lang Master </title>
      </Helmet>
      <SubHeader title="Blog"></SubHeader>
      <div className="w-11/12 mx-auto">
        <div className="flex md:flex-row gap-6 flex-col-reverse items-center justify-between">
          <BlogPost></BlogPost>
          <SearchBlog handleSearch={handleSearch}></SearchBlog>
        </div>
        <div className="md:flex gap-6 mt-5">
          {filterblog.length <= 0 ? (
            <p className="text-2xl text-gray-600 text-center my-5 w-full uppercase">
              "no data found"
            </p>
          ) : (
            <div
              className={`${myBlogs.length > 0 ? "mx-auto w-[95%]" : "w-full"}`}
            >
              <BlogMainContain filterblog={filterblog} />
            </div>
          )}

          <div
            className="md:w-[30%] mx-auto top-10 h-full overflow-auto sticky"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1 className="text-center text-3xl font-semibold  rounded-md py-2 bg-base-200">
              My Blogs
            </h1>
            <BlogRightSidebar items={myBlogs} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
