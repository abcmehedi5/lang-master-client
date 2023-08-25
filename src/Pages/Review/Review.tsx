import Swal from "sweetalert2";
import StarRatings from "react-star-ratings";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import moment from "moment";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Review: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [reviewText, setReviewText] = useState<string>("");
  const [rating, setRating] = useState<number>(0);

  const handleReviewSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    const currentDate = moment();
    const reviewDate = currentDate.format("MMMM D, YYYY");
    const name = user?.displayName;
    const email = user?.email;
    const image = user?.photoURL;
    const reviewData = {
      name,
      email,
      image,
      passion: "Front End Coder",
      rating,
      reviewDate,
      reviewText,
    };

    try {
      const res = await axiosSecure.patch(
        `/reviews/review/${user?.email}`,
        reviewData,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          icon: "success",
          title: "Great...",
          text: "Thanks for your review! Your review has been submitted.",
        });
      }
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  return (
    <div className="w-9/12 mx-auto">
      <div className="bg-gray-100 py-8 mt-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-4">Leave a Review</h2>
          <form onSubmit={handleReviewSubmit} className="mb-4">
            <div className="flex flex-col mb-4">
              <StarRatings
                rating={rating}
                starHoverColor="purple"
                starRatedColor="purple"
                changeRating={(newRating: number) => setRating(newRating)}
                numberOfStars={5}
                name="rating"
              />
              <textarea
                name="reviewText"
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                className="border rounded-lg px-4 py-2 mt-4 max-w-2xl"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="defaultBtn px-4 py-2 rounded-lg duration-200"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
