import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Chart = () => {
const data = [
    {
      "name": "Alice",
      "totalScore": 438,
      "averageScore": 87.6
    },
    {
      "name": "Bob",
      "totalScore": 377,
      "averageScore": 75.4
    },
    {
      "name": "Charlie",
      "totalScore": 450,
      "averageScore": 90
    },
    {
      "name": "Alice",
      "totalScore": 438,
      "averageScore": 87.6
    },
    {
      "name": "Bob",
      "totalScore": 377,
      "averageScore": 75.4
    },
    {
      "name": "Charlie",
      "totalScore": 450,
      "averageScore": 90
    },
    {
      "name": "Alice",
      "totalScore": 438,
      "averageScore": 87.6
    },
    {
      "name": "Bob",
      "totalScore": 377,
      "averageScore": 75.4
    }
  ]





    return (
       <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex">
         <div className="w-full mt-3 flex-1 text-xs">
         <ResponsiveContainer width='100%' height='100%' >
        <BarChart width={500} height={300} data={data}
        margin={{
            top: 20,
            right: 10,
            left: 10,
            bottom: 0,
          }}>

            <CartesianGrid strokeDasharray='3 3 0 0' vertical={false} ></CartesianGrid>
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalScore" fill="#8884d8" />
          <Bar dataKey="averageScore" fill="#82ca9d" />
        </BarChart>

         </ResponsiveContainer>
        </div>
       </div>
    );
};

export default Chart;