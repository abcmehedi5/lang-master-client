import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubHeader from "../../Components/SubHeader/SubHeader";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import learn from "../../../public/learnLanguage/LearnFive.json";
import learno from "../../../public/learnLanguage/learnTwo.json";
import lear from "../../../public/learnLanguage/learnFour.json";
import Lottie from "lottie-react";

const Introduction = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <SubHeader title={"our introduction"}></SubHeader>
      <div className="w-11/12 md:w-9/12 mx-auto">
        <Tabs>
          <TabList className="text-center border-b-2">
            <Tab>Mission</Tab>
            <Tab>Teaching Process</Tab>
            <Tab>Contact</Tab>
            <Link to="/about-us">
              <Tab>Team</Tab>
            </Link>
          </TabList>

          <TabPanel>
            <div>
              <div className="md:flex items-center justify-center">
                <div className="md:w-1/2">
                  <Lottie
                    
                      animationData= {learn}
                      loop= {true}
                      autoplay= {true}
                    
                  />
                </div>
                <div className="md:w-1/2">
                  <h3 className="text-xl font-bold">Learn as you wish</h3>
                  <p className="text-gray-600">
                    Everyone's learning style is different. For the first time
                    in history, by analyzing the learning strategies of millions
                    of people together, we can create the world's most powerful
                    education system and tailor it to the needs of each
                    student.Our ultimate goal is to enable every student with
                    the help of technology to experience language learning with
                    their own tutor.
                  </p>
                </div>
              </div>
              <hr className="border md:my-0 my-3" />

              <div className="flex md:flex-row flex-col-reverse items-center justify-center">
                <div className="md:w-3/4">
                  <h3 className="text-xl font-bold">Let learning be joyful.</h3>
                  <p className="text-gray-600">
                    Maintaining interest in online language learning is a
                    difficult task. So, we've made the experience of using
                    Lang-Master so fun that everyone is more interested in
                    learning new skills than playing games.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Lottie
                    
                      animationData= {learno}
                      loop= {true}
                      autoplay= {true}
                    
                    height={250}
                  />
                </div>
              </div>
              <hr className="border md:my-0 my-3" />
              <div>
                <h3 className="text-xl font-bold mt-4">
                  Equal opportunity for all.
                </h3>
                <p className="my-3 text-gray-600">
                  About 1.2 billion people in the world are learning some
                  language. Most of them aim to make future prospects brighter.
                  Unfortunately, just as learning a new language is expensive,
                  the opportunity is also rare for many.
                </p>
                <p className="text-gray-600">
                  Our intention behind creating Lang-Master was to ensure equal
                  opportunities for everyone. Creating free language learning
                  opportunities – There will be no hidden fees or undisclosed
                  prices, or content that is differentiated based on price.
                  There will only be opportunities to learn the language at no
                  cost.
                </p>
                <p className="my-3 text-gray-600">
                  From the richest people in the world to many Hollywood stars
                  use Lang-Master. It is also used in government schools in
                  various developing countries. We believe that true equality
                  can only be achieved when there is no need to spend extra to
                  ensure better education.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div>
              <div>
                <h3 className="text-xl font-bold mt-4">Our teaching method.</h3>
                <p className="my-2 text-gray-600">
                  We believe anyone can learn a language with Lang-Master.
                  Lessons broken down into small chunks are almost as fun as
                  playing. This is what we want: Reading is easy when it's fun.
                </p>
                <p className="text-gray-600">
                  But Lang-Master is more than just a game. It is formulated
                  based on methods that help build long-term memory.
                  Lang-Master's curriculum is also designed according to
                  international standards. So, let's see how to learn languages
                  on Lang-Master!
                </p>
              </div>
              <hr className="border my-3" />
              <div className="md:flex items-center justify-center">
                <div className="">
                  <Lottie
                    
                      animationData= {lear}
                      loop= {true}
                      autoplay= {true}
                    
                    height={350}
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold">
                    Communication in the real world
                  </h3>
                  <p className="text-gray-600 my-2">
                    The ultimate goal of language is communication. Lang-Master
                    follows a functional approach to language teaching – that
                    is, the focus is on what the learner wants to do with the
                    language.
                  </p>
                  <p className="text-gray-600">
                    Lessons are modeled on real-life tasks such as ordering food
                    at a restaurant. Students learn the vocabulary and grammar
                    needed for this everyday communication by practicing
                    reading, writing, listening and speaking in a variety of
                    ways.
                  </p>
                </div>
              </div>
              <hr className="border md:my-0 my-3" />
              <div className="text-center">
                <div className="flex items-center justify-center my-1 text-sm">
                  <p>Have any questions?</p>
                  <p>contact with us</p>
                </div>
                <Link to="/user-dashboard/learning">
                  <button className="py-1 text-sm px-2 rounded-lg bg-blue-500 text-white">
                    start learning
                  </button>
                </Link>
              </div>
            </div>
          </TabPanel>
          <TabPanel className="text-center mt-6">
            <div
              className="flex items-center text-sm text-gray-600
            font-semibold justify-center"
            >
              <p>Do you have any questions?</p>
              <Link to="/faq" className="underline text-blue-500">
                Please see here
              </Link>
            </div>
            <div
              className="flex items-center text-sm text-gray-600
            font-semibold justify-center gap-2 my-2"
            >
              <p>Do you want to contact with us for anything?Send us email</p>
              <p className="underline text-blue-500">abcd@gmail.com</p>
            </div>
            <div
              className="flex items-center text-sm text-gray-600
            font-semibold justify-center"
            >
              <p>Want to learn english?</p>
              <Link
                to="/user-dashboard/learning"
                className="underline text-blue-500"
              >
                Please see here
              </Link>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
};

export default Introduction;
