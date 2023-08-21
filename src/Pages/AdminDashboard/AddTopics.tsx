import { useState } from "react";
import { Helmet } from "react-helmet-async";

const AddTopics: React.FC = () => {
    const [lession, setLession] = useState<string>("");
    const [point, setPoint] = useState<string>(""); 
    const [percent, setPercent] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   
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
          <div className="w-full md:w-1/2">
              <label className="block text-sm font-medium mb-2">
                আপনার কাজের অগ্রগতি কতটুকু?
              </label>
              <input
                className="appearance-none block w-full border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
                value={percent}
                onChange={(e) => setPercent(e.target.value)}
                placeholder="আপনার কাজের অগ্রগতি কত পার্সেন্ট?"
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
