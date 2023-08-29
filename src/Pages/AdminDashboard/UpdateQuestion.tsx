
const UpdateQuestion = () => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                   
                        <th>Favorite Color</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                 
                        <td>Quality Control Specialist</td>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </tr>
                    {/* row 2 */}
                    <tr>
                        <th>2</th>
             
                        <td>Desktop Support Technician</td>
                        <button className="btn btn-primary btn-sm">Update</button>
                    </tr>
                    {/* row 3 */}
                    <tr>
                        <th>3</th>
           
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