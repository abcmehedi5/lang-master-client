import Cover from "../Cover/Cover";
import HomepageBlog from "../HomepageBlog/HomepageBlog";
import Lessons from "../Lessons/Lessons";

const Home = () => {
  return (
    <div>
      <Cover></Cover>
      <Lessons />
      <HomepageBlog />
    </div>
  );
};

export default Home;
