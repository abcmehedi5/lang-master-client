import { AiFillCheckCircle } from "react-icons/ai";
import PresentTense from "./PresentTense";
import PastTense from "./PastTense";
import FutureTense from "./FutureTense";

const Tense = () => {
  return (
    <>
      <div className="grammar">
        {/* tense  */}
        <div>
          <h2 className="title">Tense বা কাল কাকে বলে?</h2>
          <p className="desc">
            কোন কাজ সম্পাদনের নির্দিষ্ট অথবা অনির্দিষ্ট সময়/সময়কালকে{" "}
            <strong>Tense</strong> বলা হয়।
          </p>
          <p className="desc2">
            ইংরেজি sentence গঠনের জন্য tense এর গুরুত্ব অসীম। ইংরেজিতে বিভিন্ন
            সময়কাল নির্দেশ করার জন্যে tense এর বিভিন্ন form ব্যবহার করা হয়।
            Tense এর মোট ১২ টি form রয়েছে। সকল ইংরেজি বাক্য এই ১২ টি form এর
            যেকোন একটি দিয়েই গঠন করা হয়।
          </p>
          <p className="desc">
            <strong>Tense</strong>, in English grammar, refers to the time of an
            action or event. It tells when the work is done. It identifies
            whether the work is done in the present, the past or the future.
          </p>
        </div>

        {/* tense types  */}

        <div>
          <h2 className="title">Tense এর প্রকারভেদ:</h2>
          <p className="desc">There are three types of Tenses:</p>
          <div className="mt-4">
            <a className="types" href="#present">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Present Tense (বর্তমান কাল)
            </a>
            <a className="types" href="#past">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Past Tense (অতীত কাল)
            </a>
            <a className="types" href="#future">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Future Tense (ভবিষ্যৎ কাল)
            </a>
          </div>

          <PresentTense></PresentTense>
          <PastTense></PastTense>
          <FutureTense></FutureTense>
        </div>
      </div>
    </>
  );
};

export default Tense;
