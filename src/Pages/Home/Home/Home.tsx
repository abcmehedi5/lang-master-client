import Contact from "../Contact/Contact";
import Cover from "../Cover/Cover";
import Faq from "../Faq/Faq";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;
