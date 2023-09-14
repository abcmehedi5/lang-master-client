import { FcAcceptDatabase, FcManager } from "react-icons/fc";
import { MdStorage } from "react-icons/md";

const PrivacyPolicy = () => {
  return (
    <div className="w-10/12 mx-auto">
      {/* Header contaienr */}
      <div className="md:flex flex-row justify-around items-center">
        {/* right side ------------- */}
        <div className="md:w-3/5 w-full text-justify">
          <h1 className="text-3xl font-bold">Privacy Policy for Lang Master</h1>
          <p className="mt-10">
            At Lang Master, we value your privacy and are committed to
            protecting your personal information. This Privacy Policy explains
            how we collect, use, disclose, and safeguard your data when you
            visit our website or use our services.
          </p>
          <p className="mt-4">
            By accessing or using Lang Master, you consent to the practices
            described in this Privacy Policy. If you do not agree with this
            policy, please do not use our website or services.
          </p>
        </div>

        {/* left side ------------- */}

        <img
          className="md:w-96 w-full mx-auto "
          src="https://i.ibb.co/QDLF3cM/note.webp"
          alt=""
        />
      </div>
      {/* Information We Collect */}
      <h4 className="text-2xl font-bold mt-4">
        Information We Collect
      </h4>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8 mt-10 text-justify">
        <div className=" p-4 border rounded-md">
          <FcManager style={{ fontSize: "60px" }} />
          <strong>Personal Information:</strong> We may collect personal
          information such as your name, email address, and other identifying
          information when you register for an account, subscribe to our
          newsletter, or contact us.
        </div>

        <div className=" p-4 border rounded-md">
          <FcAcceptDatabase style={{ fontSize: "60px" }} />
          <strong> Usage Data:</strong> automatically collect information about
          your usage of our website, including your IP address, browser type,
          device information, and pages you visit.
        </div>

        <div className=" p-4 border rounded-md">
          <MdStorage style={{ fontSize: "60px" }} />
          <strong>Cookies:</strong> We use cookies and similar tracking
          technologies to enhance your user experience and collect information
          about your preferences and activities on our website.
        </div>
      </div>

      {/* How We Use Your Information */}

      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mt-10 ">
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" name="my-accordion-1" className="peer" />
          <div className="collapse-title  ">
            <h4 className="text-lg font-bold"> Information We Collect</h4>
            <p className="">
              We may use your personal information for the following purposes:
            </p>
          </div>
          <div className="collapse-content ">
            <li className ="mt-4 bg-slate-200 p-3 border">
              To provide and improve our services, including personalized
              language learning content.
            </li>
            <li className ="mt-4 bg-slate-200 p-3 border">
              To communicate with you, respond to your inquiries, and provide
              customer support.
            </li>
            <li className ="mt-4 bg-slate-200 p-3 border">
              To send you updates, newsletters, and promotional materials if you
              have subscribed to them. You can opt out of these communications
              at any time.
            </li>
            <li className ="mt-4 bg-slate-200 p-3 border">
              To analyze user behavior and trends to enhance our website and
              services.
            </li>
          </div>
        </div>
        <div className="collapse  collapse-arrow bg-base-200">
          <input type="checkbox" name="my-accordion-2" className="peer" />
          <div className="collapse-title  ">
            <h4 className="text-lg font-bold"> Data Sharing and Disclosure</h4>
            <p className="">
              We may share your personal information with third parties under
              the following circumstances:
            </p>
          </div>
          <div className="collapse-content ">
            <li className ="mt-4 bg-slate-200 p-3 border">With your consent.</li>
            <li className ="mt-4 bg-slate-200 p-3 border">To comply with legal obligations.</li>
            <li className ="mt-4 bg-slate-200 p-3 border">
              To protect our rights, privacy, safety, or property and that of
              our users or others.
            </li>
            <li className ="mt-4 bg-slate-200 p-3 border">
              In connection with a merger, acquisition, or sale of all or a
              portion of our assets.
            </li>
          </div>
        </div>
        <div className="collapse collapse-arrow  bg-base-200">
          <input type="checkbox" name="my-accordion-3" className="peer" />
          <div className="collapse-title  ">
            <h4 className="text-lg font-bold"> Data Security</h4>
            <p className="">
              We may use your Data Security for the following purposes:
            </p>
          </div>
          <div className="collapse-content ">
            <li className ="mt-4 bg-slate-200 p-3 border">
              We take reasonable measures to protect your personal information
              from unauthorized access, disclosure, alteration, or destruction.
              However, please be aware that no method of transmission over the
              internet or electronic storage is entirely secure.
            </li>
          </div>
        </div>
        <div className="collapse collapse-arrow bg-base-200">
          <input type="checkbox" name="my-accordion-4"  className="peer" />
          <div className="collapse-title  ">
            <h4 className="text-lg font-bold"> Your Choices</h4>
            <p className="">
              You have the following choices regarding your personal
              information:
            </p>
          </div>
          <div className="collapse-content ">
            <li className ="mt-4 bg-slate-200 p-3 border">
              You can access, update, or delete your personal information by
              logging into your account settings.
            </li>
            <li className ="mt-4 bg-slate-200 p-3 border">
              You can unsubscribe from our marketing communications at any time
              by following the instructions provided in the emails or by
              contacting us.
            </li>
          </div>
        </div>
      </div>




      {/* contact area  */}

      
    </div>
  );
};

export default PrivacyPolicy;
