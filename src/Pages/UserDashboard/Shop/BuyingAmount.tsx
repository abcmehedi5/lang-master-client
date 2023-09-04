import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GATEWAY_PK}`);
const BuyingAmount = ({ totalAmountToBePaid, coinAmount, closeModal }: any) => {
  return (
    <div>
      <p>
        আপনি ${totalAmountToBePaid} টাকার বিনিময়ে {coinAmount} টি কয়েন পাবেন
      </p>
      {/* <h1>${totalAmountToBePaid} পে করুন</h1> */}
      <Elements stripe={stripePromise}>
        <CheckoutForm
          closeModal={closeModal}
          totalAmountToBePaid={totalAmountToBePaid}
          coinAmount={coinAmount}
        ></CheckoutForm>
      </Elements>
    </div>
  );
};

export default BuyingAmount;
