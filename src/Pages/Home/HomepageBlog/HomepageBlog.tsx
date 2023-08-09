import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const HomepageBlog = () => {
  return (
    <>
      <section className="w-9/12 mx-auto my-20">
        {/* section title  */}
        <div className="flex justify-between pb-10">
          <h1 className="font-bold text-gray-800 text-2xl">
            Most Recent Posts
          </h1>
          <button className="bg-blue-50 text-blue-500 px-5 py-2 hover:text-blue-600">
            View All Posts{" "}
            <MdOutlineKeyboardArrowRight className="inline-block font-bold" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="col-span-8">
            {/* card one  */}
            <div>
              <div className="relative overflow-hidden bg-cover h-[500px] bg-no-repeat">
                <img
                  className="rounded-t-sm h-full object-cover "
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </div>
              <div className="pt-5">
                <p className="text-[#757575] pb-3 font-semibold">
                  Language Learning Tips
                </p>
                <p className="text-gray-800 text-xl pb-3 font-semibold">
                  10 Effective Tips to Accelerate Your Language Learning Journey
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-200">
                  Discover 10 proven strategies to enhance your language
                  learning process and make the most of your study sessions
                </p>
              </div>
            </div>
          </div>
          {/* // TODO: blog two and three description will be added later if needed  */}
          <div className="col-span-4 flex flex-col gap-8">
            {/* card two  */}
            <div>
              <div className="relative overflow-hidden bg-cover h-[200px] bg-no-repeat">
                <img
                  className="rounded-t-sm w-full h-full object-cover"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </div>
              <div className="pt-5">
                <p className="text-[#757575] pb-3 font-semibold">
                  Cultural Insights Through Language
                </p>
                <p className="text-gray-800 text-xl pb-3 font-semibold">
                  Unveiling Cultural Treasures: Exploring Traditions Through
                  Language Learning
                </p>
                {/* <p className="text-base text-neutral-600 dark:text-neutral-200">
                  Discover 10 proven strategies to enhance your language
                  learning process.
                </p> */}
              </div>
            </div>

            {/* card three  */}
            <div>
              <div className="relative overflow-hidden bg-cover h-[200px] bg-no-repeat">
                <img
                  className="rounded-t-sm w-full h-full object-cover"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
                  alt=""
                />
              </div>
              <div className="pt-5">
                <p className="text-[#757575] pb-3 font-semibold">
                  Mastering Pronunciation
                </p>
                <p className="text-gray-800 text-xl pb-3 font-semibold">
                  Cracking the Code: A Guide to Mastering Pronunciation in a New
                  Language
                </p>
                {/* <p className="text-base text-neutral-600 dark:text-neutral-200">
                  Discover 10 proven strategies to enhance your language
                  learning process.
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomepageBlog;
