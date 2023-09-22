import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { RiDeleteBin6Line } from "react-icons/Ri";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import LazyLoader from "../../Components/LazyLoader/LazyLoader";

// Types for your data
interface PaymentData {
  _id: number;
  name: string;
  email: string;
  transactionId: string;
  date: string;
}

const AllPayments: React.FC = () => {
  const [data, setData] = useState<PaymentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosSecure.get<PaymentData[]>("/payment/payment");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //------------delete --------------------
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [itemToDeleteId, setItemToDeleteId] = useState<number | null>(null);

  const handleDelete = async (idToDelete: number) => {
    setDeleteConfirmationOpen(true);
    setItemToDeleteId(idToDelete);
  };

  const confirmDelete = async () => {
    if (itemToDeleteId !== null) {
      try {
        await axiosSecure.delete(`/payment/payment/${itemToDeleteId}`);
        setData((prevData) =>
          prevData.filter((item) => item._id !== itemToDeleteId)
        );
      } catch (error) {
        console.error("Error deleting data:", error);
      }
    }
    setDeleteConfirmationOpen(false);
  };
  //------------delete --------------------
  const columns = [
    { field: "name", headerName: "Name", width: 170 },
    { field: "email", headerName: "Email", width: 200 },
    { field: "transactionId", headerName: "Transaction ID", width: 200 },
    { field: "date", headerName: "Date", width: 190 },
    {
      field: "delete",
      headerName: "Delete",
      width: 75,
      sortable: false,
      renderCell: (params: any) => (
        <button onClick={() => handleDelete(params.row._id)}>
          <RiDeleteBin6Line className="text-center text-xl text-red-500" />
        </button>
      ),
    },
  ];

  return (
    <div>
      {loading ? (
        <LazyLoader></LazyLoader>
      ) : (
        <div className="px-4 mx-auto py-8 md:px-20 md:py-16">
          <Helmet>
            <title> All Payment | Admin dashboard | Lang Master </title>
          </Helmet>
          <SectionTitle
            titleLetter="All "
            titleWord="Payments History"
          ></SectionTitle>
          <div className="mt-10 border p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 ...">
            <div className="shadow-2xl bg-white">
              <div>
                <DataGrid
                  rows={data}
                  columns={columns}
                  // pageSize={5}
                  checkboxSelection
                  getRowId={(row) => row._id || row.transactionId || row.email}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                />
              </div>

              <div>
                <div>
                  <Dialog
                    open={deleteConfirmationOpen}
                    onClose={() => setDeleteConfirmationOpen(false)}
                  >
                    <DialogTitle>Confirm Deletion</DialogTitle>
                    <DialogContent>
                      <DialogContentText>
                        Are you sure you want to delete this item?
                      </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={() => setDeleteConfirmationOpen(false)}>
                        Cancel
                      </Button>
                      <Button onClick={confirmDelete}>delete</Button>
                    </DialogActions>
                  </Dialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllPayments;
