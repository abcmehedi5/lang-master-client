
import Lottie from "lottie-react-web";
import error from "../../public/error.json"
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
     
      <div className="flex justify-center min-h-screen items-center">

        <Lottie
          options={{
            animationData: error,
            loop: true,
            autoplay: true,
          }}
          width={600}
          height={600}
        />
      </div>
      <div className="mx-40 my-6">
      <Link className="text-white bg-black px-4 py-2 rounded" to="/">Home</Link>
      </div>
      
    </>
  );
};

export default Error;