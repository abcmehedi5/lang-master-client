import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Faq from "../Faq/Faq";
import HomepageBlog from "../HomepageBlog/HomepageBlog";
import LearnLanguage from "../LearnLanguage/LearnLanguage";
import Lessons from "../Lessons/Lessons";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Lessons></Lessons>
      <LearnLanguage></LearnLanguage>
      <HomepageBlog></HomepageBlog>
      <Faq></Faq>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
