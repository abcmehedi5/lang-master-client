import { AiFillCheckCircle } from "react-icons/ai";

const FutureTense = () => {
  return (
    <div id="future">
      <div className="grammar">
        <h1 className="type-title">Future Tense (ভবিষ্যৎ কাল)</h1>
        <h1 className="title">Future Tense কাকে বলে? </h1>
        <p className="desc">
          যে tense ভবিষ্যতের কোন ঘটনাকে বোঝায় তাকে future tense বলে।
        </p>
        <p className="desc">
          The tense that expresses any future event is called future tense.
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>I shall/ will do this work - আমি এই কাজটি করবো।</li>
          <li>She will go to the office - সে অফিসে যাবে।</li>
        </ul>
        <h1 className="title">Future Tense এর প্রকারভেদ</h1>
        <p className="desc">Future tense can be classified into four types:</p>
        <div className="mt-4">
          <a className="types" href="#future-indefinite">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Future Indefinite Tense
          </a>
          <a className="types" href="#future-continuous">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Future Continuous Tense
          </a>
          <a className="types" href="#future-perfect">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Future Perfect Tense
          </a>
          <a className="types" href="#future-perfect-continuous">
            {" "}
            <AiFillCheckCircle className="types-icon"></AiFillCheckCircle>
            Future Perfect Continuous Tense
          </a>
        </div>
      </div>

      {/* Indefinite */}
      <div id="future-indefinite">
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
      <div id="future-continuous">
        <h1 className="type-title">Future Continuous Tense কাকে বলে?</h1>
        <p className="desc">
          <strong>Future Continuous Tense</strong> ভবিষ্যতে ঘটতে থাকবে এমন কোন
          চলমান কাজকে বোঝায়।
        </p>
        <p className="desc2">
          The <strong>Future continuous tense</strong> denotes an on-going
          action that will happen in the future.
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>I will be writing the poem - আমি কবিতাটি লিখতে থাকবো।</li>
          <li>You will be doing the work - তুমি কাজটি করতে থাকবে।</li>
          <li>They will be going shopping - তারা কেনাকাটা করতে যেতে থাকবে।</li>
        </ul>
        <p className="desc2 underline">
          <strong>Structure of the sentence:</strong>
        </p>
        <p className="desc2 underline">
          <strong>Positive Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>Subject+ will+ be+ simple form of verb+ ing + object.</strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>We will be going to the fair - আমরা মেলায় যেতে থাকবো।</li>
          <li>You will be going to the office - তুমি অফিসে যেতে থাকবে।</li>
          <li>He will be helping you - সে তোমাকে সাহায্য করতে থাকবে।</li>
        </ul>

        {/* negative  */}
        <p className="desc2 underline">
          <strong>Negative Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject+ will not/ won’t + be+ simple form of verb+ ing + object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>
            We will not/ won’t be going to the fair - আমরা মেলায় যেতে থাকবো না।
          </li>
          <li>
            You will not/ won’t be going to the office - তুমি অফিসে যেতে থাকবে
            না।
          </li>
          <li>
            He will not/ won’t be helping you - সে তোমাকে সাহায্য করতে থাকবে না।
          </li>
        </ul>
      </div>

      {/* perfect  */}
      <div id="future-perfect">
        <h1 className="type-title">Future Perfect Tense কাকে বলে?</h1>
        <p className="desc">
          <strong>Future Perfect Tense</strong>
          এমন কোন কাজকে বোঝায় যা ভবিষ্যতে কোন সময়ে ঘটে থাকবে।
        </p>
        <p className="desc">
          ভবিষ্যতে দুটি কাজ হলে যে কাজটি আগে হয় সেটা Future Perfect Tense হয় এবং
          যেটা পরে হয় সেটা ‍Simple Present tense হয়।
        </p>
        <p className="desc2">
          <strong>Future Perfect Tense</strong>
          denotes an action that will have occurred at some time in the future.
          If two actions take place in the future, the first one is Future
          Perfect Tense and the second one is Simple Present Tense. action.
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>I will have written the poem - আমি কবিতাটি লিখে থাকবো।</li>
          <li>
            By the time you reach, we will have started our journey - তুমি এসে
            পৌঁছোতে পৌঁছোতে আমরা আমাদের যাত্রা শুরু করে ফেলবো।
          </li>
          <li>He will have helped you - সে তোমাকে সাহায্য করে থাকবে।</li>
        </ul>
        <p className="desc2 underline">
          <strong>Structure of the sentence:</strong>
        </p>
        <p className="desc2 underline">
          <strong>Positive Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject+ will have+ past participle form of verb+ object. or
          </strong>
        </p>
        <p className="desc2">
          <strong>
            1st Subject+ will have+ past participle form of verb+ 1st object+
            before+ 2nd Subject+ main verb + 2nd object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>
            I will have given the speech before you come - তুমি আসার আগে আমি
            বক্তব্যটা দিয়ে থাকবো।
          </li>
          <li>
            You will have gone to the office before I reach - আমি পৌঁছানোর আগে
            তুমি অফিসে গিয়ে থাকবে।
          </li>
          <li>They will have done the work - তারা কাজটি করে থাকবে।</li>
        </ul>
        {/* negative  */}
        <p className="desc2 underline">
          <strong>Negative Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject+ will not/ won’t have+ past participle form of verb+ object.
          </strong>
        </p>
        <p className="desc2">
          <strong>
            1st Subject+ will not/ won’t have+ past participle form of verb+ 1st
            object+ before+ 2nd Subject+ main verb + 2nd object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>
            I will not/ won’t have given the speech before you come - তুমি আসার
            আগে আমি বক্তব্যটা দিয়ে থাকবো না।
          </li>
          <li>
            You will not/ won’t have gone to the office before I reach - আমি
            পৌঁছানোর আগে তুমি অফিসে গিয়ে থাকবে না।
          </li>
          <li>
            They will not / won’t have done the work. - তারা কাজটি করে থাকবে না।
          </li>
        </ul>
      </div>

      {/* perfect continuous  */}
      <div id="future-perfect-continuous">
        <h1 className="type-title">
          Future Perfect Continuous Tense কাকে বলে?
        </h1>
        <p className="desc">
          <strong>Future Perfect Continuous Tense</strong>
          চলমান কোন কাজকে বোঝায় যা ভবিষ্যতের কোন নির্দিষ্ট সময় ধরে ঘটতে থাকবে।
        </p>
        <p className="desc">
          ভবিষ্যতে দুটি কাজ হলে যে কাজটি আগে চলতে থাকবে সেটা Future Perfect
          Continuous Tense হয় এবং যেটা পরে হয় সেটা ‍Simple Present tense হয়।
        </p>
        <p className="desc2">
          Future Perfect Continuous Tense denotes an on-going action that will
          be done at a certain time in the future. If two actions take place in
          the future, the first one which will be continued is Future Perfect
          Continuous Tense and the second one is Simple Present Tense.
        </p>
        <p className="ex">Example</p>
        <ul>
          <li>
            I will have been doing the work until you return. - তুমি ফিরে না আসা
            পর্যন্ত আমি কাজটি করতে থাকবো।
          </li>
          <li>
            The students will have been doing the class until the bell rings. -
            ঘন্টা না বাজা পর্যন্ত ছাত্ররা ক্লাস করতে থাকবে।
          </li>
        </ul>
        <p className="desc2 underline">
          <strong>Positive Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject+ will have been+ simple form of verb+ ing + object. or
          </strong>
        </p>
        <p className="desc2">
          <strong>
            1st Subject+ will have been+ simple form of verb+ ing + 1st object+
            before/ until + 2nd Subject+ main verb + 2nd object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>We will have been doing the work. - আমরা কাজটি করতে থাকবো।</li>
          <li>
            The student will have been doing the math before the teacher comes.
            - শিক্ষক আসার পূর্ব পর্যন্ত ছাত্রটি অংকটি করতে থাকবে।
          </li>
          <li>
            They will have been watching the movie before you come. - তুমি আসার
            পূর্ব পর্যন্ত তারা ছায়াছবিটি দেখতে থাকবে।
          </li>
        </ul>

        {/* negative  */}
        <p className="desc2 underline">
          <strong>Negative Sentence:</strong>
        </p>
        <p className="desc2">
          <strong>
            Subject+ will not/ won’t have+ been+ simple form of verb+ ing +
            object. or
          </strong>
        </p>
        <p className="desc2">
          <strong>
            1st Subject+ will not/ won’t have+ been+ simple form of verb+ ing +
            1st object+ before/until+ 2nd Subject+ main verb + 2nd object.
          </strong>
        </p>
        <p className="ex">Example:</p>
        <ul>
          <li>
            We will not have been doing the work. - আমরা কাজটি করতে থাকবো না।
          </li>
          <li>
            The student will not/ won’t have been doing the math before the
            teacher comes. - শিক্ষক আসার পূর্ব পর্যন্ত ছাত্রটি অংকটি করতে থাকবে
            না।
          </li>
          <li>
            They will not / won’t have been watching the movie before you come.
            - তুমি আসার পূর্ব পর্যন্ত তারা ছায়াছবিটি দেখতে থাকবে না।
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FutureTense;
