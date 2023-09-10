
import SubHeader from "../../Components/SubHeader/SubHeader";
import { useEffect } from "react";

const Faq: React.FC = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const items = [
    {
      question: "Who can use Lang-Master?",

      answer:
        " Lang-Master is intended for users of all ages. However, some features or sections of the website may have age restrictions, and parents or legal guardians are responsible for monitoring the use of the platform by minors.",
    },
    {
      question: " How do I register for an account?",

      answer:
        "To register for an account on Lang-Master, you must provide accurate and complete information during the registration process. You are responsible for maintaining the confidentiality of your account credentials.",
    },
    {
      question: "What is Lang-Master's privacy policy?",

      answer:
        "Our privacy policy outlines how we collect, use, and protect your personal information. You can find the privacy policy by following the provided link on our website.",
    },
    {
      question: "Can I share my account with others?",

      answer:
        "No, sharing your Lang-Master account with others is strictly prohibited. Each user must have their own individual account.",
    },
    {
      question: " Is there a fee for using Lang-Master?",

      answer:
        "Lang-Master offers both free and paid services. Details about the pricing for premium services and any subscription plans can be found on our Pricing page.",
    },
    {
      question: "What is the cancellation policy for premium subscriptions?",

      answer:
        "Users with premium subscriptions can cancel their subscriptions at any time. However, no refunds will be provided for partially used subscription periods.",
    },
    {
      question: "Can I use the content on Lang-Master for commercial purposes?",

      answer:
        "No, the content on Lang-Master is for personal, non-commercial use only. Any unauthorized use of our content for commercial purposes is strictly prohibited.",
    },
    {
      question: "How is intellectual property handled on Lang-Master?",

      answer:
        "All content, including lessons, exercises, and quizzes, is the property of Lang-Master or its licensors and is protected by copyright and other intellectual property laws. Users may not reproduce or distribute our content without permission.",
    },
    {
      question: "What happens if I violate the terms and conditions?",

      answer:
        "Lang-Master reserves the right to terminate or suspend the accounts of users who violate these terms and conditions. We may also take legal action if necessary.",
    },
    {
      question: "How can I contact Lang-Master for questions or concerns?",

      answer:
        "You can contact our customer support team through the provided contact information on our Contact Us page.",
    },
  ];
  return (
    <div>
      <SubHeader title="FAQ"></SubHeader>
      <h2 className="text-3xl font-bold my-10 text-center">We Are Always Ready To Help You</h2>
      <div className="flex items-center justify-center gap-2 w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                {item.question}
              </div>
              <div className="collapse-content">
                <p>{item?.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
