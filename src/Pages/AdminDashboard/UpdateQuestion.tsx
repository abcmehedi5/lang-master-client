import { useEffect, useState } from "react";



const UpdateQuestion = () => {
    const [reviews, setReviews] = useState<Review[]>([]);

    useEffect(() => {
        fetch("http://localhost:5000/learning-questions/questions")
          .then((res) => res.json())
          .then((data) => setReviews(data))
          .catch((error) => console.error(error));
      }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Question</th>
                        <th>Correct Answer</th>
                        <th>Update</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                 <td></td>
                        <td>Quality Control Specialist</td>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
             <td></td>
                        <td>Desktop Support Technician</td>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
           <td></td>
                        <td>Tax Accountant</td>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UpdateQuestion;