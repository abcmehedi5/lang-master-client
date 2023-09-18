import { Helmet } from "react-helmet-async";
import Books from "../../UserDashboard/Books/Books";
import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Faq from "../Faq/Faq";
import HomepageBlog from "../HomepageBlog/HomepageBlog";
import LearnLanguage from "../LearnLanguage/LearnLanguage";
import Lessons from "../Lessons/Lessons";
import Overview from "../Overview/Overview";
import Support from "../Support/Support";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title> Lang Master </title>
      </Helmet>
      <Cover></Cover>
      <div className="md:w-10/12 mx-auto w-11/12">
        <Lessons></Lessons>
      </div>
      <Overview></Overview>
      <div className="md:w-10/12 mx-auto w-11/12">
        <LearnLanguage></LearnLanguage>
        <HomepageBlog></HomepageBlog>
        <Books></Books>
        <Faq></Faq>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Support></Support>
      </div>
    </div>
  );
};

export default Home;
