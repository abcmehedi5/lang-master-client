import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { RiDeleteBin6Line } from 'react-icons/ri';

// Types for your data
interface PaymentData {
  _id: number;
  bookimage: string;
  bookname: string;
  bookId: string;
  writer: string;
  price: number;
  rating: number;
  status: string;
  description: string;
}

// Types for your columns
interface PaymentColumn extends GridColDef {
  field: keyof PaymentData;
  headerName: string;
  width: number;
  valueGetter?: (params: any) => any;
}

const AllBuyBook: React.FC = () => {
  const [data, setData] = useState<PaymentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData()
      .then((fetchedData) => {
        setData(fetchedData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get<PaymentData[]>(
        'http://localhost:5000/books/book'
      );
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  }

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
        await axios.delete(`http://localhost:5000/books/book/${itemToDeleteId}`);
        // Remove the deleted item from the state
        setData((prevData) => prevData.filter((item) => item._id !== itemToDeleteId));
      } catch (error) {
        console.error('Error deleting data:', error);
      }
    }
    setDeleteConfirmationOpen(false);
  };
  //------------delete --------------------

  const columns: PaymentColumn[] = [
    { field: 'bookimage', headerName: 'Image', width: 70, renderCell: (params) => <img src={params.value} alt=" Book" className="rounded-full" /> },
    { field: 'bookname', headerName: 'Book Name', width: 200 },
    { field: 'bookId', headerName: 'bookId', width: 120 },
    { field: 'writer', headerName: 'Writer', width: 150 },
    { field: 'price', headerName: 'price', width: 75 },
    { field: 'rating', headerName: 'rating', width: 75 },
    { field: 'status', headerName: 'status', width: 75 },
    {
      field: 'delete',
      headerName: '',
      width: 75,
      sortable: false,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.row._id)}>
          <RiDeleteBin6Line className="text-center text-xl text-red-500" />
        </button>
      ),
    }
  ];

  return (
    <div className="w-10/12 mx-auto mt-10 border p-8 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 ...">
      <h2 className='text-center font-semibold text-3xl text-gradient'>All Buy Book</h2>
      <div className="shadow-xl mt-8 bg-white">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={5}
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
            <p>Loading another section...</p>
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
                  <Button onClick={() => setDeleteConfirmationOpen(false)}>Cancel</Button>
                  <Button onClick={confirmDelete}>Delete</Button>
                </DialogActions>
              </Dialog>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllBuyBook;
