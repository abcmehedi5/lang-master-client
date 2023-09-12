import { Helmet } from "react-helmet-async";
import grammarLottie from "../../../../public/grammarLottie.json";
import Lottie from "lottie-react-web";
import "./Grammar.css";
import Sentence from "./Sentence";
import Tense from "./Tense";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

function Grammar() {
  return (
    <>
      <Helmet>
        <title>Grammar | Lang Master</title>
      </Helmet>
      <Lottie
        options={{
          animationData: grammarLottie,
          loop: true,
          autoplay: true,
        }}
        height={150}
      />

      <div className="w-9/12 mx-auto">
        <SectionTitle titleLetter="Gr" titleWord="ammar"></SectionTitle>
        <div className="card max-w-screen-xl">
          <h1>ইংরেজি ব্যাকরণ (English Grammar)</h1>
          <p>
            বর্তমান পৃথিবীতে ইংরেজি ভাষা শিক্ষার গুরত্ব অনেকটা সূর্যের মত ধ্রুব
            । ইংরেজি বুঝে শেখার জন্যে ইংরেজি ব্যাকরণ (English Grammar) এর কোন
            বিকল্প নেই। আর এ লক্ষ্যকে সামনে রেখে আমরা আপনাদের জন্য নিয়ে এসেছি
            ইংরেজি ব্যাকরণের যথেষ্ট বাস্তবিক উদাহরণসহ সহজতম ব্যাখ্যা।{" "}
          </p>
          <p className="text-blue-400 font-medium mb-4">
            যে বিষয়ে শিখতে চান সে বিষয়ের উপর ক্লিক করুন!
          </p>

          <details className="sentence">
            <summary className="font-bold">Sentence</summary>
            <div className="pl-5">
              <Sentence></Sentence>
            </div>
          </details>

          <details className="info">
            <summary>Tense</summary>
            <ul className="pl-5">
              <Tense></Tense>
            </ul>
          </details>

          <details className="alert">
            <summary>Parts Of Speech</summary>
            <ul className="pl-5">
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
              <li>hello</li>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
}

export default Grammar;
