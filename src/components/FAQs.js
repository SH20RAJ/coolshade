"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Cool Shade?",
    answer:
      "Cool Shade is a platform that showcases India's heritage and culture, helping tourists discover local food, drinks, places, and cultural events.",
  },
  {
    question: "How can I contribute to Cool Shade?",
    answer:
      "You can contribute by creating an account and posting about local foods, drinks, places, and cultural experiences. Your posts will be verified by other users.",
  },
  {
    question: "Is there a cost to use Cool Shade?",
    answer:
      "No, Cool Shade is free to use. However, there may be optional premium features or sponsored content in the future.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@shade.cool or through our contact form on the website.",
  },
  {
    question: "Are the reviews and recommendations reliable?",
    answer:
      "Yes, all posts are verified by locals and other users to ensure the accuracy and reliability of the information provided.",
  },
];

export default function FAQs() {
  return (
    <section id="faqs" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="mb-4 bg-white rounded-lg shadow-md"
            >
              <AccordionTrigger className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-200">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 text-gray-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
