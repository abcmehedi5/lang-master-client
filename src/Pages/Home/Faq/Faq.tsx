import { Link } from "react-router-dom";
import faq from "../../../assets/img/two.jpg";
const Faq = () => {
  return (
    <div className="md:flex items-center justify-center my-20 w-9/12 mx-auto">
      {/* -----img side----- */}
      <div className="md:w-1/2 p-4">
        <h1 className="text-5xl font-bold">Frequently asked question</h1>
        <p className="max-w-md my-4">
          Quick Answers to Common Queries. Get instant solutions to frequently
          asked questions. Find helpful information on a variety of topics to
          enhance your experience
        </p>
        <Link to="/faq">
          <button className="defaultBtn">Learn More</button>
        </Link>
      </div>
      {/* -----img side----- */}
      <div className="md:w-1/2">
        <img className="w-full h-full" src={faq} alt="faq-img" />
      </div>
    </div>
  );
};

export default Faq;