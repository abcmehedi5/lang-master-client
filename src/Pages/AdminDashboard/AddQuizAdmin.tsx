import React, { useState } from "react";

const AddQuizAdmin: React.FC = () => {
  const [question, setQuestion] = useState<string>("");
  const [options, setOptions] = useState<string[]>(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quize={
        question: question,
        options: options,
        correctAnswer: correctAnswer
    }
    // Log form input values to console
    console.log(quize);
  };

  return (
    <div className="p-4 lg:w-11/12">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h1 className="text-2xl font-semibold">Add Question</h1>
        <div>
          <label className="block text-sm font-medium">Question:</label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            placeholder="What's your question?"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Options:</label>
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
              placeholder={`option ${index + 1}`}             
             className="w-full border rounded-md p-2 mt-2 input input-bordered"
              required
            />
          ))}
         </div>
        </div>
        <div>
          <label className="block text-sm font-medium">Correct Answer:</label>
          <input
            type="text"
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
            className="w-full border rounded-md p-2 mt-2 input input-bordered"
            placeholder="correct answer"
            required
          />
        </div>
        <button
          type="submit"
          className="btn bg-[#088395] hover:bg-[#21bbd3] text-white w-full px-4 py-2 rounded-md font-semibold"
        >
          Done
        </button>
      </form>
    </div>
  );
};

export default AddQuizAdmin;
