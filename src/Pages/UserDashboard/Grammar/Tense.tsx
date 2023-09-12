import { AiFillCheckCircle } from "react-icons/ai";

const Tense = () => {
  return (
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
          সময়কাল নির্দেশ করার জন্যে tense এর বিভিন্ন form ব্যবহার করা হয়। Tense
          এর মোট ১২ টি form রয়েছে। সকল ইংরেজি বাক্য এই ১২ টি form এর যেকোন একটি
          দিয়েই গঠন করা হয়।
        </p>
        <p className="desc">
          <strong>Tense</strong>, in English grammar, refers to the time of an
          action or event. It tells when the work is done. It identifies whether
          the work is done in the present, the past or the future.
        </p>
      </div>

      {/* tense types  */}

      <div>
        <h2 className="title">Tense এর প্রকারভেদ:</h2>
        <p className="desc">There are three types of Tenses:</p>
        <div className="mt-4">
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Present Tense (বর্তমান কাল)
          </p>
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Past Tense (অতীত কাল)
          </p>
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Future Tense (ভবিষ্যৎ কাল)
          </p>
        </div>

        {/* present  */}
        <div>
          <h1 className="type-title">Present Tense (বর্তমান কাল)</h1>
          <h1 className="title">Present Tense এর প্রকারভেদ</h1>
          <div className="mt-4">
            <p className="types">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Present Indefinite Tense
            </p>
            <p className="types">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Present Continuous Tense
            </p>
            <p className="types">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Present Perfect Tense
            </p>
            <p className="types">
              {" "}
              <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
              Present Perfect Continuous Tense
            </p>
          </div>
          <div>
            <h1 className="type-title">Present Indefinite Tense কাকে বলে?</h1>
            <p className="desc">
              বর্তমান কালে কোন কাজ করা হয়ে থাকে, অথবা অভ্যাসগতভাবে করা হয়, অথবা
              চির সত্য কোন কাজ বোঝালে তাকে{" "}
              <strong>Present Indefinite Tense</strong> ব্যবহার করা হয়।
            </p>
            <p className="desc2">
              It describes an action that is true, regular or normal. It uses
              the main verb or base form of the verb or the root verb.
            </p>
            <p className="desc2">
              <strong>বাংলায় চেনার উপায়:</strong> Verb এর শেষে অ, আ, এ, ই, এন,
              ও,এস,আয়,আন থাকবে।
            </p>
            <p className="ex">Example</p>
            <ul>
              <li>I go to School - আমি স্কুলে যাই।</li>
              <li>He goes to school - সে স্কুলে যায়।</li>
              <li>They play cricket - তারা ক্রিকেট খেলে।</li>
            </ul>
            <p className="desc2 underline">
              <strong>Structure of the sentence:</strong> Base/root form of the
              verb is used as the main verb.
            </p>
            <p className="desc2 underline">
              <strong>Positive Sentence:</strong>
            </p>
            <p className="desc2">
              <strong>Subject + main verb + complement</strong>
            </p>
            <p className="desc2 p-3 bg-blue-100">
              <strong>Note:</strong> In a sentence, if the subject is a third
              person singular number (he, she, it, or a singular noun), then
              ‘s’, ‘es’, ‘ies’ is added with the main verb in the sentence. But,
              if the subject is plural, there will be no addition of ‘s’, ‘es’,
              or ‘ies’.
            </p>
            <p className="ex">Example:</p>
            <ul>
              <li>I go to the market. (using the root form ‘go’)</li>
              <li>
                He goes to the market. (root form of the verb is ‘go’ but ‘he’
                is a third person singular number that’s why an extra ‘es’ is
                added with the verb)
              </li>
              <li>
                Hasina wants a cup of tea. (Hasina is third person singular
                number)
              </li>
              <li>
                The boys play cricket. (‘the boys’ = a third person plural
                number, that’s why there is no ‘s’ with the verb)
              </li>
            </ul>
            {/* negative  */}
            <p className="desc2 underline">
              <strong>Negative Sentence:</strong>
            </p>
            <p className="desc2">
              <strong>Subject + Do not/Does not + main verb + object</strong>
            </p>
            <p className="desc2 p-3 bg-blue-100">
              <strong>Note:</strong> If the subject is ‘he/she/it or a singular
              noun’ then ‘Does not’ will be used to make it negative. If the
              subject of a sentence is ‘I/you/we/they’ or a plural noun, then
              ‘Do not’ will be used to make it negative.
            </p>
            <p className="ex">Example:</p>
            <ul>
              <li>
                <strong>Positive:</strong> I eat rice. <br />{" "}
                <strong>Negative:</strong> I do not eat rice.
              </li>
              <li>
                <strong>Positive:</strong> He goes to School. <br />{" "}
                <strong>Negative:</strong> He does not go to School.
              </li>
              <li>
                <strong>Positive:</strong> He walks in the evening. <br />{" "}
                <strong>Negative:</strong> He does not walk in the evening.
              </li>
            </ul>
            <p className="desc2"></p>
            <p className="desc2"></p>
            <p className="desc2"></p>
            <p className="desc2"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tense;
