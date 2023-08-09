const Lessons = () => {
  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8">
            Interactive Lessons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Listening Exercises
              </h3>
              <p>
                Improve your listening skills with engaging audio exercises that
                cover various topics and accents.
              </p>
            </div>
            <div className="p-4 bg-white shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Speaking Practice</h3>
              <p>
                Practice speaking by recording your voice and comparing it to
                native speakers.
              </p>
            </div>
            {/* Add more lesson types here */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Lessons;
