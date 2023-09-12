import { AiFillCheckCircle } from "react-icons/ai";

const PastTense = () => {
  return (
    <div id="past">
      <div className="grammar">
        <h1 className="type-title">Past Tense (অতীত কাল)</h1>
        <h1 className="title">Past Tense এর প্রকারভেদ</h1>
        <div className="mt-4">
          <a className="types" href="#past-indefinite">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Past Indefinite Tense
          </a>
          <a className="types" href="#past-continuous">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Past Continuous Tense
          </a>
          <a className="types" href="#past-perfect">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Past Perfect Tense
          </a>
          <a className="types" href="#past-perfect-continuous">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Past Perfect Continuous Tense
          </a>
        </div>
      </div>

      {/* Indefinite */}
      <div id="past-indefinite">
        <div>
          <h1 className="type-title">Future Indefinite Tense কাকে বলে?</h1>
          <p className="desc">
            ভবিষ্যতে ঘটবে এমন কোন কাজকে
            <strong>Future Indefinite Tense</strong> বলে
          </p>
          <p className="desc2">
            The Future indefinite Tense denotes to an action which will happen
            in the future.
          </p>
          <p className="ex">Example</p>
          <ul>
            <li>I will go to the varsity - আমি বিশ্ববিদ্যালয়ে যাবো।</li>
            <li>I will sing the song - আমি গানটি গাইবো।</li>
            <li>He will help you - সে তোমাকে সাহায্য করবে।</li>
          </ul>
          <p className="desc2 underline">
            <strong>Structure of the sentence:</strong>
          </p>
          <p className="desc2 underline">
            <strong>Positive Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>Subject+ shall/will+ simple form of verb+ object.</strong>
          </p>
          <p className="ex">Example:</p>
          <ul>
            <li>They will go shopping - তারা কেনাকাটা করতে যাবে।</li>
            <li>You will do the work - তুমি কাজটি করবে।</li>
            <li>I will/ shall write the poem - আমি কবিতাটি লিখবো।</li>
          </ul>
          <p className="note">
            <strong>Note:</strong> They will go shopping - তারা কেনাকাটা করতে
            যাবে।
          </p>
          {/* negative  */}
          <p className="desc2 underline">
            <strong>Negative Sentence:</strong>
          </p>
          <p className="desc2">
            <strong>
              Subject+ will not/ won’t + simple form of verb+ object.
            </strong>
          </p>

          <p className="ex">Example:</p>
          <ul>
            <li>
              They will not/ won’t go shopping - তারা কেনাকাটা করতে যাবে না।
            </li>
            <li>You will not/ won’t do the work - তুমি কাজটি করবে না।</li>
            <li>I will not/ won’t write the poem - আমি কবিতাটি লিখবো না।</li>
          </ul>
        </div>
        {/* interrogative  */}
        <p className="desc2 underline">
          <strong>Interrogative sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Will+ Subject+ simple form of verb+ object +note of interrogation
            (?)
          </strong>
        </p>

        <p className="ex">Example:</p>
        <ul>
          <li>Will I write the poem? - আমি কি কবিতাটি লিখবো?</li>
          <li>Will you do the work? - তুমি কি কাজটি করবে?</li>
          <li>Will they go shopping? - তারা কি কেনাকাটা করতে যাবে?</li>
        </ul>
      </div>

      {/* continuous  */}
      <div id="past-continuous">
        <h1 className="type-title">Past Continuous Tense কাকে বলে?</h1>
        <p className="desc">
          অতীত কালে কিছু সময়ের জন্য কোন কাজ চলছিল বোঝালে{" "}
          <strong>Past Continuous Tense</strong> ব্যবহার করা হয়।
        </p>
        <p className="desc2">
          The <strong>Past continuous tense</strong> is used to express the
          action which was continued for some time in the past. It describes an
          on-going past action.
        </p>
        <p className="desc2">
          <strong>বাংলায় চেনার উপায়:</strong> বাংলায় ক্রিয়ার শেষে তেছিল,
          তেছিলাম, তেছিলে, তেছিলেন, চ্ছিল, চ্ছিলে, চ্ছিলেন, ছিল, ছিলাম, ছিলে,
          অথবা ছিলেন থাকলে সাধারণত past tense হয়ে থাকে।
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>He was reading the book - সে বইটি পড়ছিলো/পড়তেছিল।</li>
          <li>They were playing football - তারা ফুটবল খেলছিল।</li>
          <li>The birds were flying in the sky - পাখিরা আকাশে উড়ছিল।</li>
        </ul>
        <p className="desc2 underline">
          <strong>Structure of the sentence:</strong>
        </p>
        <p className="desc2 underline">
          <strong>Positive Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject + was/were + present form of the verb + ing + object.
          </strong>
        </p>
        <p className="desc2 p-3 bg-blue-100">
          <strong>Note:</strong> Subject first and third person singular হলে was
          বসবে। You/we/they এবং অন্যান্য plural subject এর শেষে were বসবে।
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>He was singing a song.</li>
          <li>They were walking together.</li>
          <li>You were talking like a teacher.</li>
        </ul>

        {/* negative  */}
        <p className="desc2 underline">
          <strong>Negative Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject + was not/were not + present form of the verb + ing +
            object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>I was not taking tea.</li>
          <li>He was not teaching English.</li>
          <li>They were reading in the classroom.</li>
        </ul>
      </div>

      {/* perfect  */}
      <div id="past-perfect">
        <h1 className="type-title">Past Perfect Tense কাকে বলে?</h1>
        <p className="desc">
          অতীত কালে দুটি কাজ সম্পূর্ণ হলে যে কাজটি আগে হয় সেটি past perfect
          tense হয় এবং যে কাজটি পরে হয় সেটি past indefinite tense হয়।
        </p>
        <p className="desc2">
          The past perfect tense indicates two works that were completed in the
          past; past indefinite tense is used in the second or later action.
        </p>
        <p className="desc2">
          <strong>বাংলায় চেনার উপায়:</strong> বাংলায় ক্রিয়ার শেষে ছিল, ছিলাম,
          ছিলে, ছিলেন, ল, লাম, লে, লেন, তাম, তে, অথবা, তেন, ইত্যাদি থাকলে
          সাধারণত past tense হয়ে থাকে।
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>
            The train had left before I ate - আমি খাওয়ার আগেই ট্রেন ছেড়ে
            দিয়েছিল।
          </li>
          <li>
            He had come home before I went to school - আমি স্কুলে যাওয়ার পূর্বেই
            সে বাড়ি এসেছিল।
          </li>
          <li>
            The students had left the class before the bell rang - ঘন্টা পরার
            পূর্বেই ছাত্রছাত্রীরা ক্লাস ত্যাগ করেছিল।
          </li>
        </ul>
        <p className="desc2 underline">
          <strong>Structure of the sentence:</strong> auxiliary verb ‘had,’ and
          past participle form of the verb is used as the main verb.
        </p>
        <p className="desc2 underline">
          <strong>Positive Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject + had + past participle form of the verb + object.
          </strong>
        </p>
        <p className="desc2">
          <strong>
            1st Subject + had + past participle form of the verb + object (if
            any) + before + 2nd subject + past form of the verb + 2nd object
          </strong>
        </p>
        <p className="desc2">
          <strong>
            2nd subject + past form of the verb + 2nd object (if any)+ after+1st
            Subject + had + past participle form of the verb
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>He had done this assignment last week. (1st structure)</li>
          <li>The students had stood up before the teacher came.</li>
          <li>The patient died after the doctor had come.</li>
        </ul>
        {/* negative  */}
        <p className="desc2 underline">
          <strong>Negative Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject + had not + past participle form of verb + object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>I had not watched the movie.</li>
          <li>He had not reached the station.</li>
          <li>They had not told me anything before the viva started.</li>
        </ul>
      </div>

      {/* perfect continuous  */}
      <div id="past-perfect-continuous">
        <h1 className="type-title">Past Perfect Continuous Tense কাকে বলে?</h1>
        <p className="desc">
          অতীত কালে কোন কাজ কোন বিশেষ সময়ের পূর্বে আরম্ভ হয়ে সেই সময় পর্যন্ত
          চলছিল বোঝালে <strong>past perfect continuous tense</strong> হয়।
        </p>
        <p className="desc2">
          যদি দুটি কাজের কথা উল্লেখ থাকে তাহলে যে কাজটি আগে ঘটেছিলো সেই কাজটির
          past perfect continuous tense হবে।
        </p>
        <p className="desc2">
          <strong>বাংলায় চেনার উপায়:</strong> বাংলায় ক্রিয়ার শেষে তেছিল,
          তেছিলে, তেছিলাম, তেছিলেন, চ্ছিল, চ্ছিলাম, চ্ছিলে, চ্ছিলেন, এদের যে কোন
          একটি উল্লেখ থাকলে সাধারনত past perfect continuous tense বোঝায়।
        </p>
        <p className="desc underlined">
          এক্ষেত্রে, কিছু বিষয়ের প্রতি খেয়াল রাখতে হবে:
        </p>
        <ul>
          <li>অতীত কালে দুটি কাজ হয়েছিল।</li>
          <li>একটি কাজ আগে এবং অপর কাজটি পরে সংগঠিত হয়েছিল।</li>
          <li>যে কাজটি পূর্বে শুরু হয়েছিল সেটি দীর্ঘ সময় ধরে চলেছিল।</li>
        </ul>
        <p className="ex">Example</p>
        <ul>
          <li>
            They had been playing before the train came - ট্রেন আসার পূর্বে তারা
            খেলতেছিলো।
          </li>
          <li>
            I had been reading the book before you called - তুমি কল করার পূর্বে
            আমি বই পড়তেছিলাম।
          </li>
          <li>
            She had been watching the Television when I came to meet with her -
            আমি যখন তার সাথে দেখা করতে আসলাম তখন সে টেলিভিশন দেখতেছিলো।
          </li>
          <li>
            He had been playing football since morning - সে সকাল থেকে ফুটবল
            খেলতেছিলো।
          </li>
        </ul>
        <p className="desc2 underline">
          <strong>Positive Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject + had been + present form of verb + ing + object + time
            reference
          </strong>
        </p>
        <p className="desc2">
          <strong>
            1st subject + had been + present form of verb + ing + 1st object +
            2nd subject + verb এর past form + 2nd object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>
            He had been working in a non-government organization since 1997.
          </li>
          <li>They had been gossiping for two hours.</li>
          <li>He had been playing cricket before the bell rang.</li>
          <li>I had been watching the movie before you came.</li>
        </ul>

        {/* negative  */}
        <p className="desc2 underline">
          <strong>Negative Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject + had not been + present form of the verb + ing + object +
            time reference.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>
            He had not been working in a non-government organization since 1997.
          </li>
          <li>He had not been doing his assignment since 10 o’clock.</li>
          <li>They had not been eating lunch for two months.</li>
        </ul>
      </div>
    </div>
  );
};

export default PastTense;
