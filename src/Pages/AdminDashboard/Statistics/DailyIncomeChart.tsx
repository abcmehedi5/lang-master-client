import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface PaymentData {
  _id: string;
  amount: number;
  name: string;
  email: string;
  transactionId: string;
  date: string;
}

interface DailyIncomeChartProps {
  paymentData: PaymentData[];
}

const DailyIncomeChart: React.FC<DailyIncomeChartProps> = ({ paymentData }) => {
  // Data processing logic to aggregate income by day
  const dailyIncomeData = paymentData.reduce((result, payment) => {
    const date = new Date(payment.date).toLocaleDateString();
    if (!result[date]) {
      result[date] = 0;
    }
    result[date] += payment.amount;
    return result;
  }, {} as Record<string, number>);

  const chartData = Object.keys(dailyIncomeData).map((date) => ({
    date,
    income: dailyIncomeData[date],
  }));

  return (
    <LineChart
      width={600}
      height={300}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="income"
        stroke="rgb(75, 192, 192)"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
};

export default DailyIncomeChart;
