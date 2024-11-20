import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white text-center">
      <div className="max-w-screen-md mx-auto">
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#101128] md:text-4xl mb-8">
          Frequently Asked Questions
        </h2>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-2">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              // className={`border-b ${
              //   index === 1 ? "bg-purple-50" : "bg-white"
              // } `}
            >
              <AccordionTrigger className="text-[rgba(21,19,24,1)] p-4 text-lg font-medium flex justify-between items-center hover:bg-gray-50 transition">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 text-left text-gray-600  rounded-b-lg">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const faqs = [
  {
    question: "When will Unfold be available?",
    answer:
      "Unfold is expected to launch in the upcoming months. Stay tuned for updates!",
  },
  {
    question: "Is my journaling data secure?",
    answer:
      "Absolutely. We prioritize security and use state-of-the-art encryption to protect your data.",
  },
  {
    question: "How much will it cost?",
    answer:
      "Unfold will have free and premium plans. Join the waitlist for exclusive launch offers!",
  },
];
