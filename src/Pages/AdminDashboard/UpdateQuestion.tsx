import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

interface Question {
  id: number;
  question: string;
  correctAnswer: string;
}

interface Lesson {
  lessonNumber: string;
  lessonTitle: string;
  points: string;
  quiz: Question[];
}

interface FetchedData {
  points: string;
  progress: string;
  topic: string;
  totalLessons: string;
  unit: string;
  _id: string;
  lessons: Lesson[];
}

const UpdateQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleDelete = (id: number) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setQuestions(questions.filter(question => question.id !== id));

        fetch(`http://localhost:5000/users/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) {
              throw new Error("Network response was not ok");
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
          });
      }
    });
  };

  useEffect(() => {
    fetch("http://localhost:5000/learning-questions/questions")
      .then((res) => res.json())
      .then((data: FetchedData[]) => {
        const extractedQuestions: Question[] = [];
        data.forEach((topic) => {
          topic.lessons.forEach((lesson) => {
            lesson.quiz.forEach((question) => {
              extractedQuestions.push({
                id: extractedQuestions.length + 1,
                question: question.question,
                correctAnswer: question.correctAnswer,
              });
            });
          });
        });
        setQuestions(extractedQuestions);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto p-14">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Question</th>
              <th>Correct Answer</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={question.id}>
                <th>{index + 1}</th>
                <td>{question.question}</td>
                <td>{question.correctAnswer}</td>
                <td>
                  <button className="btn btn-primary btn-sm">Update</button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(question.id)}
                    className="btn bg-red-500 hover:bg-red-600 text-white btn-sm"
                  >
                    Delete
                  </button>
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
