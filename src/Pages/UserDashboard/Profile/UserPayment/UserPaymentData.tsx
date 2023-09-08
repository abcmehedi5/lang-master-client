import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

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

interface PaymentData {
  name: string;
  email: string;
  transactionId: string;
  date: string;
}

const UserPaymentData: React.FC = () => {
  const { user }: any = useContext(AuthContext);
  const [paymentData, setPaymentData] = useState<PaymentData[]>([]);
  const [error, setError] = useState<string | null>(null);
  console.log(error);

  useEffect(() => {
    const url = `http://localhost:5000/payment/paymentUser?email=${user?.email}`;
    axios
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
  }, [user?.email]);

  const columns = [
    { id: "name", label: "Name" },
    { id: "email", label: "Email" },
    { id: "transactionId", label: "Transaction ID" },
    { id: "date", label: "Date" },
  ];

  return (
    <div className="w-9/12 mx-auto shadow-xl rounded-2xl border-2 mt-10">
      <div className="py-20  bg-rose-50">
        <h2 className="text-center font-medium text-2xl text-gradient">
          {user?.email}
        </h2>
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
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
  );
};

export default UserPaymentData;
