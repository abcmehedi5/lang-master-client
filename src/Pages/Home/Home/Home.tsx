import Books from "../../UserDashboard/Books/Books";
import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Faq from "../Faq/Faq";
import HomepageBlog from "../HomepageBlog/HomepageBlog";
import LearnLanguage from "../LearnLanguage/LearnLanguage";
import Lessons from "../Lessons/Lessons";
import Support from "../Support/Support";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <div className="md:w-10/12 mx-auto w-11/12">
      <Lessons></Lessons>
      <LearnLanguage></LearnLanguage>
      </div>
      <div className="md:w-10/12 mx-auto w-11/12">
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
