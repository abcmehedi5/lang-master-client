import { Link } from "react-router-dom";
import useQuize from "../../../hooks/useQuize/useQuize";

const QuizLevel = () => {

    const {allQuizeData} = useQuize()
    console.log(allQuizeData)

    return (
        <div
           className="flex items-center flex-col justify-center h-full">
            {/* <h1 className="text-4xl font-bold p-4 mb-3 text-center uppercase rounded-t-lg text-[[#222]]">Start Quiz</h1> */}
            <div className="bg-[#a2dce5] rounded-lg md:w-[60%]"  style={{"boxShadow": "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px"}}>
                <h1 className="text-3xl font-semibold p-4 text-center uppercase rounded-t-lg bg-[#222] text-white">Choose your Level</h1>
                <div className="px-9 py-10 space-y-4">
                    {allQuizeData.map((quizedata) =>  
                     <Link to={`/user-dashboard/mainquiz/${quizedata._id}`}>
                     <button key={quizedata._id} style={{"boxShadow": "rgba(0, 0, 0, 0.24) 0px 3px 8px"}} className="bg-base-100 text-2xl px-6 py-4 capitalize font-semibold mb-5 w-full  hover:text-white border-none cursor-pointer hover:bg-[#088395] rounded-md"><p>{quizedata?.Level} Quize</p></button>
                   </Link>
                    
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizLevel;