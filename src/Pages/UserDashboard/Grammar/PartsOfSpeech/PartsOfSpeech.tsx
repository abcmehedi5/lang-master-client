import { AiFillCheckCircle } from "react-icons/ai";

const PartsOfSpeech = () => {
  return (
    <div className="grammar">
      <div>
        <h2 className="font-semibold text-2xl">
          Parts of Speech বা পদ প্রকরণ কাকে বলে? এটি কত প্রকার ও কি কি?
        </h2>
        <h1 className="desc mb-1">Parts of Speech কাকে বলে?</h1>
        <p className="text-2xl">Definition (1):</p>
        <p className="desc">
          বাক্যে ব্যবহৃত প্রত্যেকটি শব্দকে এক একটি{" "}
          <strong>Part of Speech</strong> বলে।
        </p>
        <p className="desc2">
          Every single word we use in a sentence is called a{" "}
          <strong>Part of Speech</strong>.
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>Karim is a good boy.</li>
          <li>He goes to school.</li>
          <li>Ashik eats Rice</li>
        </ul>
        <p className="desc">
          ১ নং বাক্যে, Karim, is, a, good, এবং boy প্রত্যেকটি একেকটি part of
          speech.
        </p>
        <p className="desc">
          ঠিক একই ভাবে ২ নং বাক্যে, he, goes, to , school ইত্যাদি আলাদা আলাদা
          ভাবে প্রত্যেকটিই একেকটি Part of Speech. কারণ, তারা প্রত্যেকটিই বাক্যের
          অংশ। ৩ নং বাক্যটিতে মোট তিনটি শব্দ বা word আছে। সুতরাং এই বাক্যের
          তিনটি part of speech আছে।
        </p>
        <p className="note">
          Note: একটা কথা মনে রাখতে হবে যে, শব্দগুলো অবশ্যই কোন না কোন বাক্যের
          অংশ হতে হবে। আলাদা ভাবে কোন একটা শব্দকে part of speech বলা যাবে
          না।অর্থাৎ সকল Parts of Speech ই Word কিন্তু সকল Word ই Parts of Speech
          না।
        </p>
        <p className="desc">
          Part of Speech মানে বাক্যের অংশ। Word যতক্ষণ বাক্যে ব্যবহার না হবে
          ততক্ষণ এটাকে Parts of Speech বলা যাবেনা। আমি যদি বলি Water তাহলে সেটা
          কোন Part of Speech হবেনা । কারণ, এটা কোন বাক্যের অংশ নয়। সম্পূর্ন
          আলাদা একটা শব্দ মাত্র। কিন্তু আমি যদি বলি Water is life তাহলে Water
          একটি Parts of Speech হবে। কারণ, এখানে water বাক্যেরই একটি অংশ।
        </p>
      </div>

      {/* types  */}
      <div>
        <h1 className="title">Parts of Speech এর প্রকারভেদঃ</h1>
        <p className="desc">
          There are <strong>eight types</strong> of parts of speech according to
          their functions in a sentence.
        </p>
        <div className="mt-4">
          <a className="types" href="#noun">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Noun (বিশেষ্য)
          </a>
          <a className="types" href="#pronoun">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Pronoun (সর্বনাম)
          </a>
          <a className="types" href="#adjective">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Adjective (নাম বিশেষণ)
          </a>
          <a className="types" href="#verb">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Verb (ক্রীয়া বা কাজ)
          </a>
          <a className="types" href="#adverb">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Adverb (ক্রীয়া বিশেষণ)
          </a>
          <a className="types" href="#preposition">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Preposition (পদান্বয়ী অব্যয়)
          </a>
          <a className="types" href="#conjunction">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Conjunction (সংযোজক অব্যয়)
          </a>
          <a className="types" href="#interjection">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Interjection (আবেগ সূচক অব্যয়)
          </a>
        </div>
      </div>

      {/* noun  */}
      <div id="noun">
        <h1 className="type-title">Noun (বিশেষ্য)</h1>
        <p className="desc">
          যে word দ্বারা কোন কিছুর নাম প্রকাশ করা হয় তাকে noun বলে । আমাদের
          চোখের সামনে যা দেখি সেগুলোর নামকেই noun বলে। Noun দ্বারা কোন ব্যক্তি,
          বস্তু, প্রাণী ,স্থান ,ঘটনা ইত্যাদির নাম বোঝায়।
        </p>
        <p className="desc">
          Noun refers to any kind of name. This means, whatever we are seeing
          and watching around us is a noun.
        </p>
        <p className="desc">
          Nouns are used to name persons, things, animals, events, places, ideas
          etc.
        </p>
        <ul>
          <li>
            <strong>Karim</strong> does not like to go to school. (এই বাক্যে
            Karim একজন ব্যক্তির নাম।)
          </li>
          <li>
            <strong>Kuwait</strong> is a Muslim country. (এখানে কুয়েত একটি দেশের
            নাম।)
          </li>
          <li>
            <strong>Diamond</strong> is very valuable. (ডায়মন্ড একটি বস্তুর
            নাম।)
          </li>
        </ul>
        <p className="title">
          Nouns are classified into five types. These are:
        </p>
        <ul>
          <li className="font-bold">Proper Noun (নাম বাচক বিশেষ্য)</li>
          <li className="font-bold">Common Noun (জাতিবাচক বিশেষ্য)</li>
          <li className="font-bold">Collective Noun (সমষ্টিবাচক বিশেষ্য)</li>
          <li className="font-bold">Material Noun (বস্তুবাচক বিশেষ্য)</li>
          <li className="font-bold">Abstract Noun (গুণবাচক বিশেষ্য)</li>
        </ul>
      </div>

      {/* pronoun  */}
      <div id="pronoun">
        <h1 className="type-title">Pronoun (সর্বনাম):</h1>
        <p className="desc">
          সহজভাবে, যে সকল শব্দ আমরা নামের পরিবর্তে বসাই তাকেই{" "}
          <strong>Pronoun</strong> বা সর্বনাম বলে। যেমন, He, She, We etc.
        </p>
        <p className="desc">
          The word which we use instead of Noun is called{" "}
          <strong>Pronoun</strong>.
        </p>
        <ul>
          <li>Karim is a good boy. (এখানে Karim একটি Noun).</li>
          <li>
            <strong>He</strong> goes to school every day.
          </li>
          <li>
            <strong>We</strong> should take care of our children.
          </li>
        </ul>
        <p className="desc">
          উপরের উদাহরণ গুলোতে Karim নামক একটি ছেলের সম্পর্কে বলা হয়েছে। প্রথম
          বার তার নাম Karim হিসেবে ব্যবহার করা হয়েছে,পরবর্তীতে যতবার তার নাম
          আসবে ততবার তার নামের পরিবর্তে Pronoun হিসেবে He ব্যবহার করা যাবে।
          তেমনি বিভিন্ন ধরনের Noun এর gender এবং number অনুযায়ী Pronoun বসাতে
          হয়।
        </p>
      </div>

      {/* adjective  */}
      <div id="adjective">
        <h1 className="type-title">Adjective (নাম বিশেষণ):</h1>
        <p className="desc">
          যে সকল শব্দ দ্বারা কোন Noun বা Pronoun এর দোষ, গুণ, সংখ্যা, পরিমাণ,
          অবস্থা ইত্যাদি প্রকাশ করা হয় তাকে <strong>Adjective </strong> বলে।
        </p>
        <p className="desc">
          Adjectives qualify only Noun and Pronoun. It specifies the quality,
          number, and size of nouns or pronouns. It describes nouns or pronouns.
        </p>
        <ul>
          <li>
            Naima is a <strong>beautiful</strong> (এখানে Noun এর গুণ বুঝাচ্ছে)
          </li>
          <li>
            He has <strong>three</strong> red pens. (Noun এর সংখ্যা বুঝাচ্ছে)
          </li>
          <li>Safi is cool.(Noun এর অবস্থা বুঝাচ্ছে)</li>
        </ul>
      </div>

      {/* verb  */}
      <div id="verb">
        <h1 className="type-title">Verb (ক্রিয়া বা কাজ):</h1>
        <p className="desc">
          The <strong>verb</strong> is an important part of speech. Without a
          verb, no sentence can be formed. It shows a physical or mental action.
          The verb always believes in doings and actions.
        </p>
        <p className="desc">
          যে শব্দ দ্বারা কোন কাজ করা/হওয়া বুঝায় তাকেই <strong>Verb</strong> বলে।
          যেমন, go, eat, sleep, buy, sell, walk, run, see, play, write, give
          etc.
        </p>
        <ul>
          <li>
            We <strong>play</strong> cricket.
          </li>
          <li>
            He <strong>writes</strong> a letter.
          </li>
          <li>
            He <strong>gave</strong> me a glass of water.
          </li>
        </ul>
      </div>

      {/* adverb  */}
      <div id="adverb">
        <h1 className="type-title">Adverb (ক্রিয়া বিশেষণ):</h1>
        <p className="desc">
          যে সকল শব্দ Verb, Adjective বা অন্য adverb কে Modify করে বা কোনকিছু
          add করে সেই সকল শব্দগুলোকে <strong>Adverb</strong> বলে। যেমন, very,
          slowly, well, carefully etc.
        </p>
        <p className="desc">
          The word that usually modifies the verb, adjective, or other adverb is
          known as an adverb.
        </p>
        <ul>
          <li>
            He asked my name <strong>gently</strong>.
          </li>
          <li>
            She walks <strong>slowly</strong>.
          </li>
          <li>
            She bought a <strong>very</strong> long dress.
          </li>
        </ul>
      </div>

      {/* preposition  */}
      <div id="preposition">
        <h1 className="type-title">Preposition (পদান্বয়ী অব্যয়):</h1>
        <p className="desc">
          <strong>A preposition</strong> defines the relationship between nouns
          or pronouns with another word in a sentence. It works as a connector
          and specifies the location or a location in time.
        </p>
        <p className="desc">
          বাংলায় Pre শব্দের অর্থ পূর্বে আর Position শব্দের অর্থ অবস্থান। তাই খুব
          সহজেই বুঝা যায় যে, যেসব শব্দ Noun বা Pronoun এর পূর্বে অবস্থান করে
          বাক্যের অন্যান্য অংশের সাথে ঐ Noun বা Pronoun এর সম্পর্ক স্থাপন করে
          তাকে <strong>Preposition</strong> বলে। যেমন,{" "}
          <span className="italic">
            in, on, under, with, at, over, of, below, throughout, by, about,
            until
          </span>{" "}
          etc.
        </p>
        <ul>
          <li>
            The book is <strong>on</strong> the table.
          </li>
          <li>
            Rahim is hiding <strong>behind</strong> the tree.
          </li>
          <li>
            The girl brought a letter for me <strong>from</strong> the teacher
            who taught us English.
          </li>
        </ul>
        <p className="desc">
          ১ম বাক্যের দিকে তাকালে আমরা দেখতে পাই যে যদি আমরা Noun এর পূর্বে কোন
          preposition না বসাই তাহলে “The table” Noun টি বাক্য থেকে বিচ্ছিন্ন হয়ে
          যাচ্ছে। On বসানোর সাথে সাথেই সেটি বাক্যের সাথে সংযুক্ত হয়ে যায়। ঠিক
          একই ভাবে বাকি Sentence গুলোতেও behind এবং from একই কাজ করছে।
        </p>
      </div>

      {/* conjunction  */}
      <div id="conjunction">
        <h1 className="type-title">Conjunction (সংযোজক অব্যয়):</h1>
        <p className="desc">
          যেসব Word একাধিক শব্দ, বাক্য কিংবা Clause কে সংযুক্ত করে তাদেরকে{" "}
          <strong>Conjunction</strong> বলে। যেমন,{" "}
          <span className="italic">
            and, or, but, yet, for, nor, so, because
          </span>{" "}
          etc.
        </p>
        <p className="desc">
          Usually, conjunction joins a word with another word or joins a
          sentence with another sentence. It is a connector. It links words,
          sentences, phrases or clauses.
        </p>
        <ul>
          <li>
            Saif and Sourav are good friends. (এখানে দুটি শব্দকে সংযুক্ত করেছে)
          </li>
          <li>
            Akash is a boy, but Mou is a girl. (দুটি clause কে সংযুক্ত করেছে)
          </li>
          <li>
            She gave me the letter and then she quickly (দুটি clause কে সংযুক্ত
            করেছে)
          </li>
        </ul>
      </div>

      {/* interjection  */}
      <div id="interjection">
        <h1 className="type-title">Interjection (আবেগসূচক অব্যয়):</h1>
        <p className="desc">
          t expresses strong feelings, emotions, and sudden changes of mind. It
          may be sudden happiness or sadness.
        </p>
        <p className="desc">
          <strong>Interjection</strong> হঠাৎ করে মনের আবেগ কিংবা অনুভূতির কোন
          পরিবর্তন/প্রকাশ কে বুঝায়। যেমন,{" "}
          <span className="italic">Hurrah, Alas, Oh, Bravo, Ouch, Ah</span> etc.
        </p>
        <ul>
          <li>
            <strong>Alas!</strong> Her father is dead.
          </li>
          <li>
            <strong>Hurrah!</strong> We’ve won the game.
          </li>
          <li>
            <strong>Oh!</strong> What a beautiful girl she is!
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PartsOfSpeech;
