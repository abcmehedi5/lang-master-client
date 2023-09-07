
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { RiDeleteBin6Line } from 'react-icons/Ri';

// Types for your data
interface PaymentData {
    _id: number;
    name: string;
    email: string;
    transactionId: string;
    date: string;
}

// Types for your columns
interface PaymentColumn extends GridColDef {
    field: keyof PaymentData;
    headerName: string;
    width: number;
}

const AllPayments: React.FC = () => {
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
                'http://localhost:5000/payment/payment'
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
                await axios.delete(`http://localhost:5000/payment/payment/${itemToDeleteId}`);
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
        { field: 'name', headerName: 'Name', width: 170 },
        { field: 'email', headerName: 'Email', width: 170 },
        { field: 'transactionId', headerName: 'Transaction ID', width: 200 },
        { field: 'date', headerName: 'Date', width: 190 },
        {
            field: 'delete', headerName: 'Delete', width: 75, sortable: false,
            renderCell: (params) => (
                <button onClick={() => handleDelete(params.row._id)}><RiDeleteBin6Line className="text-center text-xl text-red-500" /></button>
            ),
        }
    ];

    return (
        <div className="w-10/12 mx-auto mt-10 border p-8 rounded-2xl bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 ...">
            <h2 className='text-center font-semibold text-3xl text-gradient'>All Payment Data </h2>
            <div className="shadow-xl mt-8 bg-white">
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={data}
                            columns={columns}
                            pageSize={5}
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
                                    <Button onClick={confirmDelete}>delete</Button>
                                </DialogActions>
                            </Dialog>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllPayments;