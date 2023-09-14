import { AiFillCheckCircle } from "react-icons/ai";

const PresentTense = () => {
  return (
    <div id="present">
      {/* present  */}
      <div className="grammar">
        <h1 className="type-title">Present Tense (বর্তমান কাল)</h1>
        <h1 className="title">Present Tense এর প্রকারভেদ</h1>
        <div className="mt-4">
          <a className="types" href="#present-indefinite">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Present Indefinite Tense
          </a>
          <a className="types" href="#present-continuous">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Present Continuous Tense
          </a>
          <a className="types" href="#present-perfect">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Present Perfect Tense
          </a>
          <a className="types" href="#present-perfect-continuous">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Present Perfect Continuous Tense
          </a>
        </div>

        {/* Indefinite */}
        <div id="present-indefinite">
          <h1 className="type-title">Present Indefinite Tense কাকে বলে?</h1>
          <p className="desc">
            বর্তমান কালে কোন কাজ করা হয়ে থাকে, অথবা অভ্যাসগতভাবে করা হয়, অথবা
            চির সত্য কোন কাজ বোঝালে তাকে{" "}
            <strong>Present Indefinite Tense</strong> ব্যবহার করা হয়।
          </p>
          <p className="desc2">
            It describes an action that is true, regular or normal. It uses the
            main verb or base form of the verb or the root verb.
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
          <p className="note">
            <strong>Note:</strong> In a sentence, if the subject is a third
            person singular number (he, she, it, or a singular noun), then ‘s’,
            ‘es’, ‘ies’ is added with the main verb in the sentence. But, if the
            subject is plural, there will be no addition of ‘s’, ‘es’, or ‘ies’.
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>I go to the market. (using the root form ‘go’)</li>
            <li>
              He goes to the market. (root form of the verb is ‘go’ but ‘he’ is
              a third person singular number that’s why an extra ‘es’ is added
              with the verb)
            </li>
            <li>
              Hasina wants a cup of tea. (Hasina is third person singular
              number)
            </li>
            <li>
              The boys play cricket. (‘the boys’ = a third person plural number,
              that’s why there is no ‘s’ with the verb)
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
            subject of a sentence is ‘I/you/we/they’ or a plural noun, then ‘Do
            not’ will be used to make it negative.
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
        </div>

        {/* Continuous  */}
        <div id="present-continuous">
          <h1 className="type-title">Present Continuous Tense কাকে বলে?</h1>
          <p className="desc">
            বর্তমানকালে বা অদূর/নিকট ভবিষ্যতে কোন কাজ চলছে/চলবে বোঝালে{" "}
            <strong>Present Continuous Tense</strong> ব্যবহার করা হয়।
          </p>
          <p className="desc2">
            The <strong>present continuous tense</strong> designates an action
            that is being continued or going to be continued in the near future.
          </p>
          <p className="desc2">
            <strong>বাংলায় চেনার উপায়:</strong> Verb এর শেষে তেছ, তেছি , তেছেন,
            তেছে, চ্ছ, চ্ছি, চ্ছে, চ্ছেন, ছেন, ছি ইত্যাদি থাকে।
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>I am going to school - আমি স্কুলে যাচ্ছি।</li>
            <li>He is going to market - সে বাজারে যাচ্ছে।</li>
            <li>They are playing football - তারা ফুটবল খেলছে।</li>
            <li>
              The bus is leaving at 4.00 pm – বাসটি চারটায় ছাড়বে। (নিকট ভবিষ্যত)
            </li>
          </ul>
          <p className="desc2 underline">
            <strong>Structure of the sentence:</strong> Verb এর present form এর
            সাথে ing যোগ করতে হয়।
          </p>
          <p className="desc2 underline">
            <strong>Positive Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>Subject + am/is/are + main verb + ing + object</strong>
          </p>
          <p className="desc2 p-3 bg-blue-100">
            <strong>Note:</strong> ‘I’ এর পর am বসে, He/she/it এর পর is বসে। এবং
            subjectযদি third person singular number হয় তাহলেও subject এর পর is
            বসে। We/you/they এবং plural subject এর পর are বসে।
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>I am eating rice.</li>
            <li>He is running to and fro.</li>
            <li>They are going to school.</li>
            <li>They are going to attend a party tonight. (নিকট ভবিষ্যত)</li>
          </ul>
          {/* negative  */}
          <p className="desc2 underline">
            <strong>Negative Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>
              Subject + am/is/are + not + Main verb + ing + object
            </strong>
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>He is not drinking milk.</li>
            <li>I’m not going to open a bank account.</li>
            <li>They are not going to play football.</li>
          </ul>
          <p className="desc2">
            অর্থাৎ, am/is/are এর পর একটি not যোগ করে দিলেই negative sentence হয়ে
            যায়।
          </p>
        </div>

        {/* perfect  */}
        <div id="present-perfect">
          <h1 className="type-title">Present Perfect Tense কাকে বলে?</h1>
          <p className="desc">
            কোন কাজ শেষ হয়ে গেছে অথচ তার ফল এখনও বিদ্যমান আছে, এরকম বোঝালে{" "}
            <strong>Present Continuous Tense</strong> ব্যবহৃত হয়।
          </p>
          <p className="desc2">
            It describes the work which has been done, but the effect exists
            till now.
          </p>
          <p className="desc2">
            <strong>বাংলায় চেনার উপায়:</strong> Verb এর শেষে য়াছে, এছে, য়াছ,
            য়াছি, এছি, য়াছেন, য়াছে, য়েছ, ইয়াছি, ইয়াছ, ইয়াছে, ইয়েছ,
            ইয়াছেন ইত্যাদি বসে। এছাড়া করি নাই, করিনি, খাই নাই, খাইনি, ইত্যাদি
            বোঝালে <strong>Present Perfect Tense</strong> হয়।
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>He has done the work - সে কাজটি করিয়াছে / করেছে।</li>
            <li>I have gone to the market - আমি বাজারে গিয়াছি/গিয়েছি।</li>
            <li>They have eaten mangoes – তারা আমগুলো খেয়েছে।</li>
            <li>I have not eaten banana - আমি কলা খাইনি।</li>
          </ul>
          <p className="desc2 underline">
            <strong>Structure of the sentence:</strong> The past participle form
            of the verb is used after have/has.
          </p>
          <p className="desc2 underline">
            <strong>Positive Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>
              Subject + have/has + past participle form of verb + object
            </strong>
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>He has done the work.</li>
            <li>I have eaten rice.</li>
            <li>They have worked hard.</li>
            <li>They are going to attend a party tonight. (নিকট ভবিষ্যত)</li>
          </ul>
          <p className="desc2 p-3 bg-blue-100">
            <strong>Note:</strong> Subject যদি He/she/it এবং third person
            singular number হয় তাহলে has বসবে। Subject যদি I/we/they/you এবং
            plural subject এর সাথে have বসবে।
          </p>
          {/* negative  */}
          <p className="desc2 underline">
            <strong>Negative Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>
              Subject + have/has + not + past participle form of verb + object
            </strong>
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>He has not eaten rice.</li>
            <li>They have not come to our house.</li>
            <li>I have not gone to school.</li>
          </ul>
        </div>

        {/* perfect continuous  */}
        <div id="present-perfect-continuous">
          <h1 className="type-title">
            Present Perfect Continuous Tense কাকে বলে?
          </h1>
          <p className="desc">
            কোন কাজ পূর্বে শুরু হয়ে এখনও চলছে বোঝালে{" "}
            <strong>Present Continuous Tense</strong> ব্যবহৃত হয়।
          </p>
          <p className="desc2">
            The work started in the past and it is still running is called{" "}
            <strong>Present perfect continuous tense.</strong>
          </p>
          <p className="desc2">
            <strong>বাংলায় চেনার উপায়:</strong> বাংলায় ক্রিয়ার শেষে তেছ,
            তেছি,তেছে, তেছেন, চ্ছ, চ্ছি, চ্ছে, চ্ছেন, ছ্, ছি্, ছে্, ছে্ন,
            ইত্যাদি উল্লেখ থাকে এবং সাথে সময়ের উল্লেখ থাকে।
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>
              I have been walking for two hours - আমি দুই ঘন্টা যাবৎ হাটছি।
            </li>
            <li>
              He has been working in this office for five years - সে এই অফিসে
              পাঁচ বছর যাবৎ কাজ করছে।
            </li>
            <li>
              They have been suffering from fever since Tuesday - তারা মঙ্গলবার
              হইতে জ্বরে ভুগছে।
            </li>
            <li>I have not eaten banana - আমি কলা খাইনি।</li>
          </ul>
          <p className="desc2 p-3 bg-blue-100">
            <strong>Note:</strong> Subject third person singular number or
            he/she/ it হলে has been বসে। I/we/you/they এবং অন্যসব subject এর
            ক্ষেত্রে have been বসে।
          </p>
          <p className="desc2 underline">
            <strong>Positive Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>
              Subject + have been/has been + main verb + ing + since/from/for +
              object.
            </strong>
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>He has been reading this newspaper for two hours.</li>
            <li>I have eaten rice.</li>
            <li>They have worked hard.</li>
            <li>They are going to attend a party tonight. (নিকট ভবিষ্যত)</li>
          </ul>
          <p className="desc2 p-3 bg-blue-100">
            <strong>Note:</strong> Subject যদি He/she/it এবং third person
            singular number হয় তাহলে has বসবে। Subject যদি I/we/they/you এবং
            plural subject এর সাথে have বসবে।
          </p>
          {/* negative  */}
          <p className="desc2 underline">
            <strong>Negative Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>
              Subject + have/has + not + past participle form of verb + object
            </strong>
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>He has not eaten rice.</li>
            <li>They have not come to our house.</li>
            <li>I have not gone to school.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PresentTense;
