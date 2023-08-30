import { useState } from "react";
import BuyingAmount from "./BuyingAmount";
const CoinBuy = () => {
  const [coinAmount, setCoinAmount] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleCoinAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCoinAmount(Number(event.target.value));
  };

  const totalAmountToBePaid = (coinAmount * 0.1).toFixed(2);
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-24 w-9/12 mx-auto mt-16">
      {/* left side  */}
      <div className="col-span-4">
        <div>
          <h1 className="text-3xl font-bold">কয়েন কিনুন</h1>
          <hr className="mt-4 w-[50%]" />
        </div>

        <div className="my-5">
          <label>
            <span className="block mb-3">কত কয়েন কিনতে চান তা লিখুনঃ</span>
            <input
              type="number"
              placeholder="এখানে লিখুন"
              onChange={handleCoinAmountChange}
              className="input input-bordered input-info w-full max-w-xs"
              required
            />
            <button
              onClick={openModal}
              className="defaultBtn px-4 py-8 block mt-4"
              disabled={!coinAmount}
            >
              Buy now
            </button>
          </label>
          <>
            {isModalOpen && (
              <div className="fixed inset-0 z-40 flex items-center justify-center">
                <div className="modal modal-open">
                  <div className="modal-box">
                    <div className="modal-body p-6">
                      <BuyingAmount
                        coinAmount={coinAmount}
                        totalAmountToBePaid={totalAmountToBePaid}
                        closeModal={closeModal}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        </div>
      </div>

      {/* RIght side  */}
      <div className="col-span-8">
        <h1>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
          temporibus, eos minima doloremque eius molestiae.
        </h1>
      </div>
    </div>
  );
};

export default CoinBuy;
