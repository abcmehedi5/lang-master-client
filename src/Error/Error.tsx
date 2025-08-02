import Lottie from "lottie-react";
import error from "../../public/error.json";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center items-center">
        <Lottie
          animationData={error}
          loop={true}
          autoplay={true}
          width={600}
          height={600}
        />
      </div>
      <div className="flex justify-center">
        <Link className="text-white bg-black px-4 py-2 rounded" to="/">
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default Error;
