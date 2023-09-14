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

// import { lazy, Suspense } from 'react';
// import Loading from '../../../Components/Loading';

// const LazyBooks = lazy(() => import('../../UserDashboard/Books/Books'));
// const LazyContact = lazy(() => import('../Contact/Contact'));
// const LazyCover = lazy(() => import('../Cover/Cover'));
// const LazyFaq = lazy(() => import('../Faq/Faq'));
// const LazyHomepageBlog = lazy(() => import('../HomepageBlog/HomepageBlog'));
// const LazyLearnLanguage = lazy(() => import('../LearnLanguage/LearnLanguage'));
// const LazyLessons = lazy(() => import('../Lessons/Lessons'));
// const LazySupport = lazy(() => import('../Support/Support'));
// const LazyTestimonial = lazy(() => import('../Testimonial/Testimonial'));

// const Home = () => {
//   return (
//     <div>
//       <Suspense fallback={<Loading></Loading>}>
//         <LazyCover />
//         <div className="md:w-10/12 mx-auto w-11/12">
//           <LazyLessons />
//           <LazyLearnLanguage />
//           <LazyHomepageBlog />
//           <LazyBooks />
//           <LazyFaq />
//           <LazyTestimonial />
//           <LazyContact />
//           <LazySupport />
//         </div>
//       </Suspense>
//     </div>
//   );
// };

// export default Home;
