import BlogMainContain from "./BlogMainContain";
import BlogRightSidebar from "./BlogRightSidebar";
import useBlogData from "../../hooks/useBlogData";
import BlogLeftSidebar from "./BlogLeftSidebar";

const Blogs = () => {
  const [blog] = useBlogData();
  const business = blog.filter(
    (item: { category: string }) => item.category === "business"
  );
  const technology = blog.filter(
    (item: { category: string }) => item.category === "technology"
  );
  const healthcare = blog.filter(
    (item: { category: string }) => item.category === "healthcare"
  );
  const design = blog.filter(
    (item: { category: string }) => item.category === "design"
  );
  

  return (
    <>

      <div className="flex lg:flex-row gap-4 container px-4 my-6">
        <div className="basis-1/6">
          <BlogLeftSidebar items={healthcare} />
          <BlogLeftSidebar items={design} />
        </div>
        <div className="basis-2/3">
          <BlogMainContain items={business} />
        </div>
        <div className="basis-1/4">
          <BlogRightSidebar items={technology} />
        </div>
      </div>
    </>
  );
};

export default Blogs;
