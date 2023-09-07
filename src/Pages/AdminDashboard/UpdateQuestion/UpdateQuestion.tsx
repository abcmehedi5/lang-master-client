import { useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
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
  // const { id } = useParams<{ id: string }>();
  // console.log(id);

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
        <h2 className="font-bold text-2xl text-cyan-500 text-center mb-5">
          Update or Delete Questions:
        </h2>
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Question</th>
              <th>Correct Answer</th>
              {/* <th>Update</th> */}
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className="border-2">
            {questions.map((question, index) => (
              <tr key={question.id} className="border-2">
                <th className="border-2">{index + 1}</th>
                <td className="border-2">{question.question}</td>
                <td className="border-2">{question.correctAnswer}</td>
                {/* <td className="border-2 text-center">
                <Link to={`/admin-dashboard/update/${question.id}`}>
                  <button className="btn btn-primary btn-sm mx-auto">Update</button>
                </Link>
                </td> */}
                <td className="border-2 text-center">
                  <button
                    onClick={() => handleDelete(question.id)}
                    className="btn bg-red-500 hover:bg-red-600 text-white btn-sm mx-auto"
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
