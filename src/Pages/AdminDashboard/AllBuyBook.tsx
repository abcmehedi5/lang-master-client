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

// Types for your data
interface PaymentData {
  _id: number;
  userName: string;
  email: string;
  bookId: string;
  bookName: string;
  writer: string;
  date: string;
}

const AllBuyBook: React.FC = () => {
  const [data, setData] = useState<PaymentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [axiosSecure] = useAxiosSecure();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axiosSecure.get<PaymentData[]>(
        "/books/bought-books"
      );
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
        await axiosSecure.delete(`/books/bought-books/${itemToDeleteId}`);
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
    { field: "userName", headerName: "UserName", width: 150 },
    { field: "email", headerName: "Email", width: 170 },
    { field: "bookId", headerName: "BookId", width: 100 },
    { field: "bookName", headerName: "BookName", width: 120 },
    { field: "writer", headerName: "Writer", width: 120 },
    { field: "date", headerName: "date", width: 120 },
    {
      field: "delete",
      headerName: "",
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
    <div className="px-4 py-8 md:px-20 md:py-16">
      <Helmet>
        <title> All Bought Books | Admin dashboard | Lang Master </title>
      </Helmet>
      <SectionTitle titleLetter="All Bought " titleWord="Books"></SectionTitle>

      <div className="border mt-10 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 ...">
        <div className="shadow-2xl bg-white">
          {loading ? (
            <p className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50">
              Loading Bought Books...
            </p>
          ) : (
            <div style={{ height: 400, width: "100%" }}>
              <DataGrid
                rows={data}
                columns={columns}
                checkboxSelection={false} // Remove checkbox selection
                getRowId={(row) => row._id || row._id || row.bookId}
                initialState={{
                  pagination: {
                    paginationModel: { page: 0, pageSize: 5 },
                  },
                }}
                pageSizeOptions={[5, 10]}
              />
            </div>
          )}
          <div>
            {loading ? (
              <p></p>
            ) : (
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
                    <Button onClick={confirmDelete}>Delete</Button>
                  </DialogActions>
                </Dialog>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBuyBook;
