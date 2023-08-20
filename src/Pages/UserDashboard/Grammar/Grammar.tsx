import * as React from "react"; // Import React
import useGrammar from "../../../hooks/useGrammar";
import GrammarCategory from "./GrammarCategory";
import { Helmet } from "react-helmet-async";
import grammarLottie from "../../../../public/grammarLottie.json"
import Lottie from "lottie-react-web";

const Grammar: React.FC = () => {
  const [grammar] = useGrammar();
  const tense = grammar.filter(
    (item: { category: string }) => item.category === "tense"
  );
  const parts_of_speech = grammar.filter(
    (item: { category: string }) => item.category === "parts_of_speech"
  );
  const genders = grammar.filter(
    (item: { category: string }) => item.category === "genders"
  );

  return (
    <>
      <Lottie
        options={{
          animationData: grammarLottie,
          loop: true,
          autoplay: true,
        }}
        height={150}
      />

      <div className="w-9/12 mx-auto">
        <Helmet>
          <title> Grammar | Lang Master </title>
        </Helmet>
        <GrammarCategory items={tense} title={"tense"} />
        <GrammarCategory items={parts_of_speech} title={"parts_of_speech"} />
        <GrammarCategory items={genders} title={"genders"} />
      </div>
    </>
  );
};

export default Grammar;
