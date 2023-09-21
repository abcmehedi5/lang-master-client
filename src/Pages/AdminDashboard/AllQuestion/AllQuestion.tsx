

import { MdDeleteSweep } from "react-icons/md";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import LazyLoader from "../../../Components/LazyLoader/LazyLoader";

interface Question {
  _id: string;
  question: string;
  correctAnswer: string;
  topic: string;
  unit: string;
  lessons: string;
}

const AllQuestion: React.FC = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: questions = [] , isLoading } = useQuery<Question[]>({
    queryKey: ["questions"],
    queryFn: async () => {
      const res = await axiosSecure.get("/learning-questions/questions");
      return res.data;
    },
  });


  if (isLoading) {
    return <LazyLoader></LazyLoader>
  }
  return (
    <div className=" px-4  py-8 md:px-20 md:py-16">
      <Helmet>
        <title> AllUnits | Admin dashboard | Lang Master </title>
      </Helmet>
      <SectionTitle titleLetter="All " titleWord="Units" ></SectionTitle>
      <div className=" mx-auto rounded-xl">
        <div className="overflow-x-auto mt-10">
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
    </div>
  );
};

export default AllQuestion;
