import { useState } from "react";
import BuyingAmount from "./BuyingAmount";
import Lottie from "lottie-react-web";
import payCoin from "../../../../public/payCoin.json"
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
    <div className="grid grid-cols-1 md:grid-cols-12 gap-2 w-11/12 mx-auto mt-16 border m-4 p-4 rounded-lg shadow-lg border-amber-400">
      {/* left side  */}
      <div className="col-span-4 ">
        <div>
          <h1 className="text-3xl font-bold text-amber-500">কয়েন কিনুন</h1>
          <hr className="mt-4 w-[50%]" />
        </div>
        <div className="my-5">
          <label>
            <span className="block mb-3">কত কয়েন কিনতে চান তা লিখুনঃ</span>
            <input
              type="number"
              placeholder="এখানে লিখুন"
              onChange={handleCoinAmountChange}
              className="input input-bordered input-primary w-full max-w-xs"
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
          <div className="pt-14">
            <h3 className="font-semibold text-base">কয়েন দিয়ে কি করতে পারবে?</h3>
            <p className="max-w-xl font-thin text-slate-700">
              কয়েন ব্যবহার করে একজন ইউজার আমাদের পিডিএফ বই অথবা প্রয়োজনীয় ডকুমেন্ট
              কিনতে পারবে।  সেইসাথে নতুন ইউনিট আনলক করার ক্ষেত্রেও কয়েন কাজে
              আসবে।
            </p>
          </div>
        </div>
      </div>

      {/* RIght side  */}
      <div className="col-span-8">
        {/* <h1 className="font-bold text-xl">কয়েন দিয়ে কি করতে পারবে?</h1> */}
        {/* <p className="max-w-xl">
          কয়েন ব্যবহার করে একজন ইউজার আমাদের পিডিএফ বই অথবা প্রয়োজনীয় ডকুমেন্ট
          কিনতে পারবে। <br /> সেইসাথে নতুন ইউনিট আনলক করার ক্ষেত্রেও কয়েন কাজে
          আসবে।
        </p> */}
        <Lottie
          options={{
            animationData: payCoin,
            loop: true,
            autoplay: true,
          }}
          height={500}
        />
      </div>

    </div>
  );
};

export default CoinBuy;
