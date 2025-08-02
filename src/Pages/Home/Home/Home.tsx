import { Helmet } from "react-helmet-async";
import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Faq from "../Faq/Faq";
import HomepageBlog from "../HomepageBlog/HomepageBlog";
import LearnLanguage from "../LearnLanguage/LearnLanguage";
import Lessons from "../Lessons/Lessons";
import Overview from "../Overview/Overview";
import Support from "../Support/Support";
import Testimonial from "../Testimonial/Testimonial";
import BookSection from "../BookSection/BookSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Lang Master </title>
      </Helmet>
      <Cover></Cover>
      {/* <div className="md:w-10/12 mx-auto w-11/12"> */}
      <Overview></Overview>
      <Lessons></Lessons>
      {/* </div> */}
      <div className="container">
        <LearnLanguage></LearnLanguage>
        <HomepageBlog></HomepageBlog>
        <BookSection></BookSection>
        <Faq></Faq>
        <Testimonial></Testimonial>
        <Contact></Contact>
        <Support></Support>
      </div>
    </div>
  );
};

export default Home;
