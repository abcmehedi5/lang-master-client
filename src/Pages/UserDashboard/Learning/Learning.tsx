import { useEffect, useState } from "react";
import cardBg from "./../../../assets/learningCardBg2.svg";
interface ProgressData {
  progress: number;
}
const Learning = () => {
  //   const [progress, setProgress] = useState<number>(0);
  //   console.log(progress);
  //   useEffect(() => {
  //     fetch("learning.json")
  //       .then((response) => response.json())
  //       .then((data: ProgressData[]) => {
  //         console.log(data);
  //         setProgress(data[0].progress);
  //       })
  //       .catch((error) => {
  //         console.error("Error loading JSON:", error);
  //       });
  //   }, []);

  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    fetch("/learn.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data: ProgressData[]) => {
        console.log("Fetched data:", data);
        if (data.length > 0) {
          setProgress(data[0].progress);
        }
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
      });
  }, []);

  console.log("Progress:", progress);

  return (
    <>
      <div className="px-4 py-8 md:px-20 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div
          className="w-full rounded-md p-6 text-gray-300"
          style={{
            backgroundImage: `url(${cardBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h1 className="text-2xl font-bold mb-2">ইউনিট - ১</h1>
          <h4 className="text-xl font-semibold">নিজের পরিচয় দিন</h4>
          <div className="flex gap-8 text-base my-2">
            <p>পাঠ: ১০</p>
            <p>পয়েন্টস: ১০০</p>
          </div>
          {/* progress bar  */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold">আপনার অগ্রগতি:</h3>
            <div className="mt-1">
              <div className="relative">
                <div className="h-6 bg-gray-200 w-full rounded-full">
                  <p
                    style={{ width: `${progress}%` }}
                    className="h-full bg-teal-500 text-white text-center rounded-full"
                  >
                    {progress}%
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button className="defaultBtn">শুরু করুন</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Learning;
