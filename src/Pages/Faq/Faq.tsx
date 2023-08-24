import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import grammarLottie from "../../../public/terns.json";
import Lottie from "lottie-react-web";

const Faq: React.FC = () => {
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
    <div className="grid lg:grid-cols-2 lg:mx-6 mx-4">
      <div className=" shadow-2xl my-10 text-white bg-gradient-to-r from-teal-600 from-10%  to-slate-500 to-90% ...">
        <Accordion allowMultipleExpanded>
          {items.map((item, index: number) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>{item.question}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{item.answer}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <div className="">
        <Lottie
          options={{
            animationData: grammarLottie,
            loop: true,
            autoplay: true,
          }}
        />
      </div>
    </div>
  );
};

export default Faq;
