import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "../section-header";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What sets you apart from other frontend developers?",
    answer:
      "I combine strong system-level thinking, advanced debugging skills, performance optimization, and modern AI integration to build fast, scalable, and reliable user experiences. I don’t just write components — I solve real problems end-to-end.",
    value: "item-0",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "I’m focused on modern front-end development using React.js, Next.js, and Inertia.js. I work confidently with JavaScript and TypeScript, and I’ve built full-stack features using Laravel APIs, Express.js, and MongoDB. My core strengths also include crafting responsive, high-performance interfaces and building multilingual web applications.",
    value: "item-1",
  },
  {
    question: "Do you have experience with state management?",
    answer:
      "While I have experience with various state management techniques, I generally  avoid using Redux  for medium-sized projects, as it can introduce unnecessary complexity. However, for Enterprise-grade applications  requiring  scalability and robust state management , I consider it when necessary. Instead, I prefer  React Context API, Zustand, or local state management , as they offer  better performance, simpler implementation, and improved maintainability  based on project requirements.",
    value: "item-2",
  },
  {
    question: "Can you integrate third-party APIs and payment gateways?",
    answer:
      "Yes! I can integrate payment gateways like Stripe through secure backend APIs and connect them seamlessly to the frontend. I also have strong experience working with REST APIs and various third-party services to extend and enhance web applications.",
    value: "item-3",
  },
  // {
  //   question: "Do you work on full-stack development?",
  //   answer:
  //     "Yes, I have experience with full-stack development. While my primary focus is on front-end engineering, I have worked with Laravel (PHP) and the MERN stack (MongoDB, Express.js, React, Node.js) to build complete web applications. This allows me to integrate front-end and back-end seamlessly, ensuring a smooth user experience.",
  //   value: "item-4",
  // },
  {
    question: "Do you have experience with eCommerce development?",
    answer:
      "Yes! I have worked on eCommerce web applications, incorporating features like Stripe payment integration, multilingual support, and a fully responsive UI. My experience includes optimizing checkout flows, managing product catalogs, inclusive dashboard and ensuring high-performance front-end implementations.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <SectionHeader
        title="Common Questions"
        description="FAQS"
        alignment="center"
        className="mb-8"
      />

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
