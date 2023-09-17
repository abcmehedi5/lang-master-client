// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";
// import ReactPaginate from "react-paginate";
// import { MdDeleteSweep, MdUpdate } from "react-icons/md";

// const itemsPerPage = 10;

// interface Question {
//   id: number;
//   question: string;
//   correctAnswer: string;
// }

// interface Lesson {
//   lessonNumber: string;
//   lessonTitle: string;
//   points: string;
//   quiz: Question[];
// }

// interface FetchedData {
//   points: string;
//   progress: string;
//   topic: string;
//   totalLessons: string;
//   unit: string;
//   _id: string;
//   lessons: Lesson[];
// }

// const UpdateQuestion: React.FC = () => {
//   const [questions, setQuestions] = useState<Question[]>([]);
//   const [currentPage, setCurrentPage] = useState<number>(0);

//   // Handle page change
//   const handlePageChange = (selectedPage: { selected: number }) => {
//     setCurrentPage(selectedPage.selected);
//   };

//   const handleDelete = (id: number) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         setQuestions((prevQuestions) =>
//           prevQuestions.filter((question) => question.id !== id)
//         );

//         fetch(`https://lang-master-server-abcmehedi5.vercel.app/users/user/${id}`, {
//           method: "DELETE",
//         })
//           .then((res) => {
//             if (!res.ok) {
//               throw new Error("Network response was not ok");
//             }
//             return res.json();
//           })
//           .then((data) => {
//             console.log(data);
//             Swal.fire("Deleted!", "Your file has been deleted.", "success");
//           })
//           .catch((error) => {
//             console.error("Error deleting user:", error);
//           });
//       }
//     });
//   };

//   useEffect(() => {
//     fetch("https://lang-master-server-abcmehedi5.vercel.app/learning-questions/questions")
//       .then((res) => res.json())
//       .then((data: FetchedData[]) => {
//         const extractedQuestions: Question[] = [];
//         data.forEach((topic) => {
//           topic.lessons.forEach((lesson) => {
//             lesson.quiz.forEach((question) => {
//               extractedQuestions.push({
//                 id: extractedQuestions.length + 1,
//                 question: question.question,
//                 correctAnswer: question.correctAnswer,
//               });
//             });
//           });
//         });
//         setQuestions(extractedQuestions);
//       })
//       .catch((error) => console.error(error));
//   }, []);

//   // Calculate the offset and get the questions for the current page
//   const offset = currentPage * itemsPerPage;
//   const paginatedQuestions = questions.slice(offset, offset + itemsPerPage);

//   return (
//     <div className="border-2 mx-auto rounded-xl ">
//       <div className="overflow-x-auto p-14">
//         <table className="table">
//           <thead>
//             <tr className="bg-slate-700 text-white">
//               <th></th>
//               <th>Question</th>
//               <th>Correct Answer</th>
//               <th>Update</th>
//               <th>Delete</th>
//             </tr>
//           </thead>
//           <tbody>
//             {paginatedQuestions.map((question, index) => (
//               <tr key={question.id}>
//                 <th>{index + 1 + currentPage * itemsPerPage}</th>
//                 <td>{question.question}</td>
//                 <td>{question.correctAnswer}</td>
//                 <td>
//                   <Link to={`/updatemodal/${question.id}`}>
//                     <button className="text-2xl text-emerald-500 ">
//                       <MdUpdate />
//                     </button>
//                   </Link>
//                 </td>
//                 <td>
//                   <button
//                     onClick={() => handleDelete(question.id)}
//                     className="text-2xl text-red-500 "
//                   >
//                     <MdDeleteSweep />
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Pagination component */}
//       <ReactPaginate
//         previousLabel={"Previous"}
//         nextLabel={"Next"}
//         breakLabel={"..."}
//         breakClassName={"break-me"}
//         pageCount={Math.ceil(questions.length / itemsPerPage)}
//         marginPagesDisplayed={2}
//         pageRangeDisplayed={5}
//         onPageChange={handlePageChange}
//         containerClassName={"flex justify-center items-center my-4"}
//         activeClassName={"bg-blue-500 text-white "}
//         pageClassName={"text-blue-500 px-3"}
//       />
//     </div>
//   );
// };

// export default UpdateQuestion;

import { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";

interface Question {
  _id: string;
  question: string;
  correctAnswer: string;
  topic: string;
  unit: string;
  lessons: string;
}

const AllQuestion: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  console.log(questions);
  useEffect(() => {
    fetch("https://lang-master-server-abcmehedi5.vercel.app/learning-questions/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="border-2 mx-auto rounded-xl ">
      <div className="overflow-x-auto ">
        <table className="table">
          <thead>
            <tr className="bg-slate-700 text-white">
              <th>#</th>
              <th>Topic Name</th>
              <th>Unit Number</th>
              <th>Total lessons</th>
              <th>Lessons add</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question, index) => (
              <tr key={question._id}>
                <th>{index + 1}</th>
                <td>{question.topic}</td>
                <td>{question.unit}</td>
                <td>{question.lessons.length}</td>
                <td>
                  <Link to={"/admin-dashboard/add-lesson/" + question._id}>
                    <button className="btn btn-primary">Add Unit</button>
                  </Link>
                </td>
                <td>
                  <button className="text-2xl text-red-500 ">
                    <MdDeleteSweep />
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

export default AllQuestion;
