import computerImg from "./../../../assets/img/interactiveLesson.svg";
const Lessons = () => {
  return (
    <div className="w-9/12 mx-auto my-20">
      <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
        Why You'll Love Learning with LangMaster
      </h2>
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">
              Effective and Result Oriented
            </h2>
            <p className="text-gray-600">
              Our courses provide effective and successful training in reading,
              listening, and speaking skills. Learn about our latest research!
            </p>
          </div>
          <div className="p-4 mt-4">
            <h2 className="text-2xl font-semibold mb-4">Learn Like Yourself</h2>
            <p className="text-gray-600">
              Every lesson, created by combining the best of artificial
              intelligence and linguistics, will assist you in learning a new
              language at the right pace and speed.
            </p>
          </div>
        </div>
        <div className="col-span-1 p-4">
          <div className="flex justify-center items-center h-full">
            <img src={computerImg} alt="" />
          </div>
        </div>
        <div className="col-span-1">
          <div className="p-4">
            <h2 className="text-2xl font-semibold mb-4">Keep Interest Alive</h2>
            <p className="text-gray-600">
              Making language learning practice enjoyable and easy with features
              like challenges and fun exercises is our way of making the path of
              learning a new language smoother for you.
            </p>
          </div>
          <div className="p-4 mt-4">
            <h2 className="text-2xl font-semibold mb-4">Enjoy Your Time</h2>
            <p className="text-gray-600">
              To learn well, you have to learn with a serious face, no kidding!
              With engaging exercises and characters full of humor, combine them
              to make your expertise even more enjoyable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lessons;
