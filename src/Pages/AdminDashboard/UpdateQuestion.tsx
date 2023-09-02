import React, { useEffect, useState } from "react";

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
}

const UpdateQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/learning-questions/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error(error));
      
  }, []);

  
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question:any, index) => (
              <tr key={question.id}>
                <th>{index + 1}</th>
                <td>{question.topic}</td>
                <td>{question.correctAnswer}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Update</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateQuestion;
