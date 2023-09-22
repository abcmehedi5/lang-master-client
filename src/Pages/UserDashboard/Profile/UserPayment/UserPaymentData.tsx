import React, { useState, useEffect, useContext } from "react";

import { AuthContext } from "../../../../Providers/AuthProvider";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

interface PaymentData {
  name: string;
  email: string;
  transactionId: string;
  date: string;
}

const UserPaymentData: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  const [axiosSecure] = useAxiosSecure();
  const [paymentData, setPaymentData] = useState<PaymentData[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const url = `/payment/paymentUser?email=${user?.email}`;
    axiosSecure
      .get<PaymentData[]>(url)
      .then((response) => {
        if (response.status === 200) {
          setPaymentData(response.data);
          setError(null);
        } else {
          setError("Error retrieving data.");
          setPaymentData([]);
        }
      })
      .catch(() => {
        setError("Error occurred during the request.");
        setPaymentData([]);
      });
  }, [user?.email, axiosSecure]);

  const columns = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "transactionId", label: "Transaction ID" },
    { id: "date", label: "Date" },
  ];

  return (
    < div className="mt-10">
      <SectionTitle titleLetter="My" titleWord="Payment" ></SectionTitle>
      <div className="w-9/12 mx-auto shadow-xl rounded-2xl border-2">
        <div>
          <TableContainer component={Paper}>
            <Table>
              <TableHead className="bg-slate-50 ">
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{column.label}</TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {paymentData.map((row) => (
                  <TableRow key={row.transactionId}>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.email}</TableCell>
                    <TableCell>{row.transactionId}</TableCell>
                    <TableCell>{row.date}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>

  );
};

export default UserPaymentData;
