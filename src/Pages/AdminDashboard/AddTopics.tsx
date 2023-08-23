import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddTopics: React.FC = () => {
    const [lession, setLession] = useState<string>("");
    const [point, setPoint] = useState<string>(""); 
    const [percent, setPercent] = useState<string>("");
    const [question, setQuestion] = useState<string>("");
    const [options, setOptions] = useState<string[]>(["", "", "", ""]);
    const [correctAnswer, setCorrectAnswer] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quize = {
      lession: lession,
      point: point,
      percent: percent,
      question: question,
      options: options,
      correctAnswer: correctAnswer,
    };
    // Log form input values to console
    console.log(quize);
   
  };

  return (
    <>
      <Helmet>
        <title> Add Topics | Lang Master </title>
      </Helmet>
      <div className="p-4 py-8 lg:w-11/12">
        <form onSubmit={handleSubmit} className="space-y-4">
          <h1 className="text-2xl font-semibold">টপিকগুলো এড করুনঃ </h1>
          <div>
            <label className="block text-sm font-medium">আপনার টপিকের নামঃ</label>
            <input
              type="text"
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              placeholder="আপনার টপিকের নাম কী?"
              required
            />
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block text-sm font-medium mb-2">
              আপনার পাঠগুলো এড করুনঃ 
            </label>
            <input
              className="appearance-none block w-full border  border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              value={lession}
              onChange={(e) => setLession(e.target.value)}
              placeholder="আপনার পাঠ কী?"
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block text-sm font-medium mb-2">
              আপনার পয়েন্টস এড করুনঃ
            </label>
            <input
              className="appearance-none block w-full border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="text"
              value={point}
              onChange={(e) => setPoint(e.target.value)}
              placeholder="আপনার পয়েন্ট কত?"
              required
            />
          </div>
          </div>

            <div>
            <label className="block text-sm font-medium">আপনার কুইজের প্রশ্নটি লিখুনঃ</label>
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              placeholder="আপনার প্রশ্ন কী?"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium">অপশন সিলেক্ট করুনঃ</label>
            <div className="grid grid-cols-2 gap-2 mt-2">
              {options.map((option, index) => (
                <input
                  key={index}
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const updatedOptions = [...options];
                    updatedOptions[index] = e.target.value;
                    setOptions(updatedOptions);
                  }}
                  placeholder={`অপশন ${index + 1}`}
                  className="w-full border rounded-md p-2 mt-2 input input-bordered"
                  required
                />
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">সঠিক উত্তর দিনঃ</label>
            <input
              type="text"
              value={correctAnswer}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              className="w-full border rounded-md p-2 mt-2 input input-bordered"
              placeholder="সঠিক উত্তরঃ"
              required
            />
          </div>
          <button
            type="submit" 
            className="btn bg-[#088395] hover:bg-[#21bbd3] text-white w-full px-4 py-2 rounded-md font-semibold"
          >
            সম্পন্ন
          </button>
        </form>
      </div>
    </>
  );
};

export default AddTopics;
