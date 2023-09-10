import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";

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
  const [reviews, setReviews] = useState<Review[]>([]);
  const [showAllClients, setShowAllClients] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/reviews/review")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error(error));
  }, []);

    // Slice first six data
    const displayReviews = showAllClients ? reviews : (reviews ? reviews.slice(0, 6) : []);

    const handleViewMore = () => {
      setShowAllClients(true);
    }

  return (
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="">
        <div className="flex flex-col items-center">
          <div className="text-center">
            <p className="text-lg font-medium text-gray-600 font-pj">
              All student and guardians have said how good Rareblocks
            </p>
            <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">
              Our happy students say about us
            </h2>
          </div>
          {!showAllClients && (
          <div className="mt-8 text-center md:mt-16 md:order-3">
            <a
              href="#"
              title=""
              className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"
              onClick={handleViewMore} >
              Check all reviews
            </a>
          </div>
            )}

          <div className="relative mt-10 md:mt-24 md:order-2">
            <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
              <div
                className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter"
                style={{
                  background:
                    "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
                }}
              ></div>
            </div>

            <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-10 md:grid-cols-2 lg:grid-cols-3">
              {displayReviews.map((review) => (
                <div
                  key={review._id}
                  className="flex flex-col overflow-hidden shadow-xl rounded-md"
                >
                  <div className="flex flex-col justify-between flex-1 p-6 bg-white lg:py-8 lg:px-7">
                    <div className="flex-1">
                      <div className="flex items-end">
                          <div className="flex items-center">
                              <p>
                                  {/* @ts-expect-error Server Component */}
                                  <Rating
                                      placeholderRating={review.rating}
                                      readonly
                                      emptySymbol={<FaRegStar />}
                                      placeholderSymbol={<FaStar className="text-yellow-500" />}
                                      fullSymbol={<FaStar />}
                                  />{" "}
                                  {review.rating}
                              </p>
                              <div>
                                  <h2 style={{ marginLeft: "1rem" }}>{review.reviewDate}</h2>
                              </div>
                          </div>
                      </div>

                      <div className="text-black mt-6 text-5xl">
                        <p className="text-lg">{review.reviewText}</p>
                      </div>
                      <div className="flex items-center mt-8">
                        <img
                          className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                          src={review.image}
                          alt=""
                        />
                        <div className="ml-4">
                          <p className="text-base font-bold text-gray-900 font-pj">
                            {review.name}
                          </p>
                          <p className="mt-0.5 text-sm font-pj text-gray-600">
                            {review.passion}
                          </p>
                        </div>
                      </div>
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
