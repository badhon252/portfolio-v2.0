import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What technologies do you specialize in?",
    answer:
      "I specialize in front-end development with expertise in React.js, Next.js, and Inertia.js. I have experience working with JavaScript and TypeScript and have developed projects using Laravel (for backend), MongoDB, and Express.js. Additionally, I focus on responsive UI/UX and multilingual support for web applications.",
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
      "Absolutely! I have successfully integrated Stripe for payment processing in a MERN (NEXT.JS) project. I am also experienced in working with REST APIs, GraphQL, and various third-party services to enhance web applications.",
    value: "item-3",
  },
  {
    question: "Do you work on full-stack development?",
    answer:
      "Yes, I have experience with full-stack development. While my primary focus is on front-end engineering, I have worked with Laravel (PHP) and the MERN stack (MongoDB, Express.js, React, Node.js) to build complete web applications. This allows me to integrate front-end and back-end seamlessly, ensuring a smooth user experience.",
    value: "item-4",
  },
  {
    question: "Do you have experience with eCommerce development?",
    answer:
      "Yes! I have worked on eCommerce web applications, incorporating features like Stripe payment integration, multilingual support, and a fully responsive UI. My experience includes optimizing checkout flows, managing product catalogs, and ensuring high-performance front-end implementations.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Common Questions
        </h2>
      </div>

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
