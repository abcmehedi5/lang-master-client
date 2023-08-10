import { MdOutlineKeyboardArrowRight } from "react-icons/md";
const HomepageBlog = () => {
  return (
    <>
      {/* // TODO: More will be added such that make it dynamic with link also button to read this blog */}
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
        {/* blog card starts  */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-8">
          <div className="col-span-8 mb-10">
            {/* card one  */}
            <div>
              <div className="relative overflow-hidden bg-cover md:h-[500px] bg-no-repeat">
                <img
                  className="rounded-t-sm md:h-full object-cover "
                  src="https://img.freepik.com/free-vector/hand-drawn-english-book-background_23-2149483336.jpg?w=1380&t=st=1691615234~exp=1691615834~hmac=37643c18fe8623691908dad633c8519d4abfadf1c82d56a23e39de52b1a67774"
                  alt=""
                />
              </div>
              <div className="pt-5">
                <p className="text-[#757575] pb-3 font-semibold">
                  Language Learning Tips
                </p>
                <p className="text-gray-800 text-xl pb-3 font-semibold hover:underline hover:cursor-pointer">
                  10 Effective Tips to Accelerate Your Language Learning Journey
                </p>
                <p className="text-base text-neutral-600 dark:text-neutral-500">
                  Discover 10 proven strategies to enhance your language
                  learning process and make the most of your study sessions
                </p>
              </div>
            </div>
          </div>
          {/* // TODO: blog two and three description will be added later if needed  */}
          <div className="col-span-4 md:flex flex-col gap-8">
            {/* card two  */}
            <div className="max-sm:mb-10">
              <div className="relative overflow-hidden bg-cover md:h-[200px] bg-no-repeat">
                <img
                  className="rounded-t-sm w-full md:h-full object-cover"
                  src="https://img.freepik.com/free-vector/kids-online-lessons_52683-36818.jpg?w=1380&t=st=1691615413~exp=1691616013~hmac=345423322d585a9c80c95612c9784994351207d8f9a21859282b25e7420029ab"
                  alt=""
                />
              </div>
              <div className="pt-5">
                <p className="text-[#757575] pb-3 font-semibold">
                  Cultural Insights Through Language
                </p>
                <p className="text-gray-800 text-xl pb-3 font-semibold hover:underline hover:cursor-pointer">
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
                  src="https://img.freepik.com/free-vector/student-with-laptop-studying-online-course_74855-5293.jpg?w=1380&t=st=1691615340~exp=1691615940~hmac=31082f36ee8bebb40d03764165268bd03d751e39b2e69abbf46cd15d8e6e6ac4"
                  alt=""
                />
              </div>
              <div className="pt-5">
                <p className="text-[#757575] pb-3 font-semibold">
                  Mastering Pronunciation
                </p>
                <p className="text-gray-800 text-xl pb-3 font-semibold hover:underline hover:cursor-pointer">
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
