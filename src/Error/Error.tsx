
import Lottie from "lottie-react-web";
import error from "../../public/error.json"
const Error = () => {
    return (
        
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
    );
};

export default Error;