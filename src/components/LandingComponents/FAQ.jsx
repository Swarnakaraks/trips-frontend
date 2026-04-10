import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section className="px-20 py-10">
      <div>
        <h1 className="text-5xl font-bold text-center mb-10 mt-20">
          Frequently Asked <span className="text-blue-600">Questions</span>
        </h1>
      </div>

      <div>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full max-w-3xl mx-auto space-y-4"
        >
          {/* Item 1 */}
          <AccordionItem
            value="item-1"
            className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              What services do you provide?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed pt-0 h-fit">
              We offer high quality web development, UI/UX design, and
              full-stack solutions for modern businesses.
            </AccordionContent>
          </AccordionItem>

          {/* Item 2 */}
          <AccordionItem
            value="item-2"
            className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              How fast is your service?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed h-fit">
              Our platform is optimized for speed, ensuring fast loading times
              and smooth performance on all devices.
            </AccordionContent>
          </AccordionItem>

          {/* Item 3 */}
          <AccordionItem
            value="item-3"
            className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Is my data secure?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed h-fit">
              Yes, we use advanced security measures to keep your data safe and
              protected from unauthorized access.
            </AccordionContent>
          </AccordionItem>

          {/* Item 4 */}
          <AccordionItem
            value="item-4"
            className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Do you offer 24/7 support?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed h-fit">
              Absolutely! Our support team is available anytime to assist you
              with any questions or issues.
            </AccordionContent>
          </AccordionItem>

          {/* Item 5 */}
          <AccordionItem
            value="item-5"
            className="border border-gray-200 rounded-xl px-6 bg-white shadow-sm hover:shadow-md transition-all"
          >
            <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
              Can I customize the features?
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 text-base leading-relaxed h-fit">
              Yes, our solutions are flexible and customizable to match your
              specific needs and business requirements.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
