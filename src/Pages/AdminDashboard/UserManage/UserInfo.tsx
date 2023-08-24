import { FaCalculator, FaTrophy } from 'react-icons/fa';
import quiz from '../../../assets/img/quiz.png'
import score from '../../../assets/img/score.png'
const UserInfo = () => {
    return (
        <div className="flex gap-4 w-full p-4">
            <div className="bg-white rounded-sm p-4 flex-1 border shadow-md border-gray-200 flex items-center">
                <div className="flex items-center gap-4  rounded-full ">
                    <img src={quiz} alt="" className='w-8 h-8' />
                    <span className="text-red-500 font-serif">Total Quiz</span>
                </div>
                
         </div>
         
         
         
     
     {/* this is total score part */}
     
            <div className="bg-white rounded-sm p-4 flex-1 shadow-md border border-gray-200 flex items-center">
            <div className="flex items-center gap-4  rounded-full ">
                   <FaTrophy className='w-8 h-8 text-yellow-400'></FaTrophy>
                    <span className="text-red-500 font-serif">Total Score</span>
                </div>
                
        </div>
         
         
    {/* this is Average score part */}
         
         
     <div className="bg-white rounded-sm p-4 flex-1 shadow-md border border-gray-200 flex items-center">
        
     <div className="flex items-center gap-4  rounded-full ">
                   <FaCalculator className='w-8 h-8 text-sky-400'></FaCalculator>
                    <span className="text-red-500 font-serif">Average Score</span>
                  </div>
   </div>
           
           
           
           
           
            <div className="bg-white rounded-sm p-4 flex-1 shadow-md border border-gray-200 flex items-center">
            <div className="flex items-center gap-4  rounded-full ">
                    <img src={score} alt="" className='w-12 h-12' />
                    <span className="text-red-500 font-serif">Position</span>
                </div>
                
          </div>
     
     
     
     
        </div>
    );
};

export default UserInfo;