import { AiFillCheckCircle } from "react-icons/ai";

const Sentence = () => {
  return (
    <div className="grammar">
      {/* sentence  */}
      <div>
        <h2 className="title">Sentence বা বাক্য কাকে বলে?</h2>
        <p className="desc">
          দুই বা ততোধিক শব্দসমষ্টি একত্রে মিলিত হয়ে বক্তার মনের ভাব সম্পূর্ণ
          রূপে প্রকাশ করলেই কেবল তাকে sentence বা বাক্য বলা যাবে।
        </p>
        <p className="desc2">
          অন্যথায়, একাধিক শব্দ এক সাথে মিলিত হলেও যদি সম্পূর্ণ রূপে মনের ভাব বা
          কথা প্রকাশ না করে তাহলে তাকে বাক্য বলা যাবে না। একটি সম্পূর্ণ বাক্য
          গঠণের জন্য নির্বাচিত শব্দসমূহকে অবশ্যই একটি সঠিক ক্রম বজায় রেখে সাজাতে
          হবে।
        </p>
        <p className="desc2">Look at the examples very carefully:</p>
        <ul className="desc2">
          <li>Rahim loves to travel.</li>
        </ul>
        <p className="desc2">
          Here, Rahim is the subject, loves is the verb and travel is an object
          or complement.
        </p>
        <p className="desc2">
          এখন, যদি word গুলোকে অগোছালোভাবে বা order maintain না করে সাজাই তাহলে
          একটি পূর্ণাঙ্গ বাক্য হবেনা।
        </p>
        <p className="desc2">
          যেমনঃ Rahim loves to travel কে যদি আমরা Order maintain না করে লিখি
          তাহলে To travel loves Rahim. এখানে সম্পূর্ণ ভাবে মনের কোন অর্থ প্রকাশ
          পায় না। তাই এটা কোন বাক্য না।
        </p>
      </div>

      {/* sentence types  */}
      <div>
        <h2 className="title">Sentence এর প্রকারভেদ</h2>
        <p className="desc">
          There are five categories of sentences according to their meaning and
          functions. These are:
        </p>
        <div className="mt-4">
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Assertive Sentence (বর্ণনামূলক বাক্য)
          </p>
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Interrogative Sentence (প্রশ্নবোধক বাক্য)
          </p>
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Imperative Sentence (অনুজ্ঞাসূচক বাক্য)
          </p>
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Optative Sentence (প্রার্থনা সূচক বাক্য)
          </p>
          <p className="types">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Exclamatory Sentence (বিস্ময়সূচক বাক্য)
          </p>
        </div>

        {/* Assertive  */}
        <div>
          <h1 className="type-title">Assertive Sentence (বর্ণনামূলক বাক্য):</h1>
          <p className="desc">
            যে Sentence দ্বারা কোন কিছুর বর্ননা বা বিবৃতি প্রকাশ করে তাকে{" "}
            <strong>Assertive sentence</strong> বলে।"
          </p>
          <p className="desc2">
            An assertive sentence is a simple statement or assertion, and it may
            be affirmative or negative.
          </p>
          <p className="desc2">
            You may follow a pattern like “subject + verb +
            object/complement/adverb”.
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>He reads the book.</li>
          </ul>
          <p className="desc2">
            একটি সাধারণ বিবৃতিমূলক বাক্য এবং Affirmative বা হ্যাঁ সূচক বাক্য।
            এখানে, He হচ্ছে Subject, reads হলো Verb এবং the book হচ্ছে object.
            ... এখন উপরে দেয়া pattern এর সাথে খুব সহজেই মিলে যাচ্ছে।
          </p>
          <ul>
            <li>
              We do not run in the Sun. একটি সাধারণ বিবৃতি এবং Negative sentence
              এর উদাহরণ।
            </li>
            <li>
              Everyone should read this poem. এখানে should একটি Modal Auxiliary.
            </li>
          </ul>
        </div>
        {/* interrogative  */}
        <div>
          <h1 className="type-title">
            Interrogative Sentence (প্রশ্নবোধক বাক্য):
          </h1>
          <p className="desc">
            যে Sentence দ্বারা কোন প্রশ্ন করা হয় অথবা কোন কিছুর প্রত্যুত্তর
            পাওয়ার উদ্দেশ্যে জিজ্ঞেস করা হয় তখন তাকে{" "}
            <strong>Interrogative Sentence</strong> বলে।
          </p>
          <p className="desc2">
            An interrogative sentence asks any questions to get a reply to
            something or someone and ends with an interrogative sign (?).
          </p>
          <p className="desc2 underline">
            One of the two following ways may form an interrogative sentence.
          </p>
          <p className="desc2">
            <span className="font-bold">1.</span> It may begin with Helping or
            auxiliary verbs and Modals Auxiliaries.
          </p>
          <p className="desc2">
            <span className="font-semibold">Auxiliary Verbs:</span> am, is, are
            - was, were - have, has, had, etc.
          </p>
          <p className="desc2">
            <span className="font-semibold">Modals Auxiliaries:</span> shall,
            should, will, would, can, could, may, might, etc.
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>Do you need some money?</li>
            <li>Is he your Brother?</li>
            <li>Should I call you?</li>
          </ul>
          <p className="desc2">
            1. May begin with “WH” questions like who, where, when, whom, what,
            which, how, etc.
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>What is your address?</li>
            <li>Whom do you want?</li>
            <li>How much money do you want?</li>
          </ul>
        </div>

        {/* imperative  */}
        <div>
          <h1 className="type-title">
            Imperative Sentence (অনুজ্ঞাসূচক বাক্য):
          </h1>
          <p className="desk">
            যে Sentence দ্বারা কোন আদেশ, উপদেশ, নিষেধ, অনুরোধ ইত্যাদি বোঝায়
            তাকেই <strong>Imperative sentence</strong> বা অনুজ্ঞাসূচক বাক্য বলে।
            এই ধরনের বাক্যে Subject (you) গোপন থাকে।
          </p>
          <p className="desc2">
            It expresses request, order, advice, command, and suggestion.
          </p>
          <p className="desc2 underline">
            একটি সহজ pattern অনুসরণ করা যেতে পারেঃ
          </p>
          <p className="desc2 font-semibold">
            “(Subject (invisible) + verb + object)”
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>Do it quickly. (Order)</li>
            <li>Never tell a lie. (Advice)</li>
            <li>Please, give me a pen. (Request)</li>
          </ul>
        </div>

        {/* optative  */}
        <div>
          <h1 className="type-title">
            Optative Sentence (প্রার্থনা সূচক বাক্য):{" "}
          </h1>
          <p className="desc">
            যে Sentence দ্বারা মনে ইচ্ছা কিংবা প্রার্থনা প্রকাশ করে তাকে{" "}
            <strong>Optative Sentence</strong> বলে।
          </p>
          <p className="desc2">It expresses desire, prayer, wish, etc.</p>
          <p className="desc2">
            A simple pattern can help you more. That is (MAY + ASSERTIVE), but
            at the same time you should keep in mind that an Optative sentence
            can be formed without “MAY”.
          </p>
          <p className="desc2">
            বেশিরভাগ optative sentence এই may ব্যবহৃত হয়। তবে কিছু কিছু ক্ষেত্রে
            ব্যাতিক্রম আছে।
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>May Allah help you to overcome all the obstacles.</li>
            <li>May you be happy in your future life.</li>
            <li>Live long our president.</li>
          </ul>
          <p className="desc2">
            সর্বশেষ উদাহরণটির দিকে তাকালেই বুঝতে পারবেন যে May ছাড়াও Optative
            sentence হয়। তাই, এটা সবসময় বাধ্যতামূলক নয় যে Optative sentence এর
            শুরুতে May থাকতেই হবে।
          </p>
        </div>

        {/* exclamatory  */}
        <div>
          <h1 className="type-title">
            Exclamatory Sentence (বিস্ময়সূচক বাক্য):
          </h1>
          <p className="desc">
            <strong>Exclamatory sentence</strong> দ্বারা হঠাৎ আকস্মিকভাবে মনের
            কোন পরিবর্তন যেমন হর্ষ, বিষাদ, আনন্দ, আবেগ বা বিস্ময় প্রকাশ করা হয়।
          </p>
          <p className="desc2">
            It expresses sudden or strong feelings or emotions like surprise,
            anger, delight, pain, etc. It is a term of the sudden change of
            mind.
          </p>
          <p className="desc2">
            Sometimes, it can start with{" "}
            <span className="italic">Alas, Bravo, Ah, Hurrah, What, How,</span>{" "}
            etc.
          </p>
          <p className="desc2">
            An exclamatory sign is mandatory after the end of it. কখনো কখনো এই
            বিস্ময়সূচক চিহ্নটি (!) বাক্যের শুরুতেই বসে । কোন বাক্য যদি Alas,
            Bravo, ah, Oh, Hurrah ইত্যাদি দিয়ে শুরু হয় তাহলে এই শব্দগুলোর পরই
            বিস্ময়সূচক চিহ্ন বসাতে হয়।
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>Hurrah! We’ve won the game.</li>
            <li>What a beautiful scene!</li>
            <li>Alas! You’ve failed in English.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sentence;
