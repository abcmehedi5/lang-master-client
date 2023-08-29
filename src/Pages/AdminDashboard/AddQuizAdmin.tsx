
import { Helmet } from "react-helmet-async";
import AddCategoryQuiz from "./AddCategoryQuiz";

const AddQuizAdmin: React.FC = () => {
 
  return (
    <>
      <Helmet>
        <title> Add Quiz | Lang Master </title>
      </Helmet>
      <div className="p-4 lg:w-11/12">
        <AddCategoryQuiz/>
      </div>
    </>
  );
};

export default AddQuizAdmin;
