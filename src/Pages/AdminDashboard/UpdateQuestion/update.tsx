// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";

// interface Question {
//   id: number;
//   question: string;
//   correctAnswer: string;
// }

// const Update: React.FC = () => {
//   const { id } = useParams<{ id: string }>();
//   console.log(id);
//   const [question, setQuestion] = useState<Question | null>(null);

//   useEffect(() => {
//     fetch(`http://localhost:5000/learning-questions/questions`)
//       .then((res) => res.json())
//       .then((data: Question) => {
//         setQuestion(data);
//       })
//       .catch((error) => console.error(error));
//   }, [id]);

//   return (
//     <div>
//       <h2>Update Question</h2>
//       {question ? (
//         <div>
//           <p>{question.question}</p>
//           <p>{question.correctAnswer}</p>
//           <p>Correct Answer: {question.correctAnswer}</p>
//           <Link to={`/admin-dashboard/update/${id}`}>
//             <button className="btn btn-primary btn-sm mx-auto">Update</button>
//           </Link>
//           {/* Implement your delete logic here */}
//         </div>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default Update;
