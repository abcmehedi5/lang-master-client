import "./Testimonial.css";
import Aos from "aos";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

interface Review {
  _id: string;
  name: string;
  rating: number;
  details: string;
  reviewText: string;
  image: string;
  passion: string;
  reviewDate: string;
}

const Testimonial = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: reviews = [] } = useQuery<Review[]>({
    queryKey: ["review"],
    queryFn: async () => {
      const res = await axiosSecure.get("/reviews/review");
      return res.data;
    },
  });

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <section className="mt-20">
      <SectionTitle titleLetter="Te" titleWord="stimonials"></SectionTitle>
      <div
        className="mt-10 py-10 px-10 overflow-hidden bg-[#ffe8cf86] relative rounded-2xl"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        <span className="animate-updown md:h-40 md:w-40 rounded-full bg-rose-200 absolute top-0 left-0 opacity-20"></span>
        <span className="animate-updown md:h-40 md:w-40 rounded-full bg-blue-200 absolute top-10 left-20 opacity-20"></span>
        <span className="animate-updown md:h-40 md:w-40 rounded-full bg-yellow-200 absolute -bottom-10 -left-2 opacity-20"></span>
        <span className="animate-updown md:h-40 md:w-40 rounded-full bg-red-200 absolute bottom-1 right-2 opacity-20"></span>
        <div className="md:flex items-center justify-between gap-10">
          <div className="md:w-[40%]">
            <h3 className="text-3xl font-bold text-gray-800">
              See our happy Learners
            </h3>
            <p className="text-gray-500 my-3">
              Our happy clients' success stories are a testament to the quality
              of our services. Their achievements inspire us to continue
              delivering excellence. We're grateful for their trust and look
              forward to more shared victories.
            </p>
            <h4 className="text-xl capitalize font-semibold text-gray-700 mb-6">
              review {reviews?.length}0 +
            </h4>
          </div>
          <div className="review md:w-[60%] h-[65vh] overflow-hidden ">
            <div>
              {reviews.map((review) => (
                <div key={review?._id}>
                  <div className="bg-base-300 mb-3 px-5 py-2 rounded-2xl">
                    <div className="flex gap-3 items-center">
                      <img
                        className="w-20 h-20 object-cover rounded-full"
                        src={review.image}
                        alt=""
                      />
                      <div>
                        <h3 className="text-xl font-bold">{review?.name}</h3>
                        <p className="text-gray-400">{review?.passion}</p>
                      </div>
                    </div>
                    <p className="font-mono my-1">{review?.reviewText}</p>
                    <div className="flex items-center justify-between">
                      {/* <p>
                        <Rating
                          placeholderRating={review?.rating}
                          readonly
                          emptySymbol={<FaRegStar />}
                          placeholderSymbol={
                            <FaStar className="text-yellow-500" />
                          }
                          fullSymbol={<FaStar />}
                        />
                        {review?.rating}
                      </p> */}
                      <p className="text-gray-400 text-sm">
                        {review?.reviewDate}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
