// CartModal.tsx
import React from "react";

interface Book {
  id: number;
  bookname: string;
  bookimage: string;
  writer: string;
  price: number;
  rating: number;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedBook: Book | null;
  onSubmit: (book: Book) => void;
}

const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, selectedBook, onSubmit }) => {
  const handleSubmit = () => {
    if (selectedBook) {
      onSubmit(selectedBook);
    }
  };

  if (!isOpen || !selectedBook) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-70"></div>
      <div className="bg-white p-6 rounded-lg shadow-md relative md:w-1/2">
        <h2 className="text-lg font-semibold mb-4">Add to Cart</h2>
        <div className="space-y-4">
          <h3 className="text-gray-900">{selectedBook.bookname}</h3>
          <p className="text-xs text-gray-500">${selectedBook.price}</p>
          {/* ... (other book details) */}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 bg-yellow-400 text-black rounded"
            onClick={handleSubmit}
          >
            Add Confirm
          </button>
          <button className="px-4 py-2 ml-4 border rounded" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
