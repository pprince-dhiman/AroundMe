
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function FAQSection({ faqs=[] }) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!faqs.length) return null;

  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm">
      <h2 className="mb-4 text-xl font-semibold">
        FAQs
      </h2>

      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border"
          >
            <button
              onClick={() =>
                setOpenIndex(
                  openIndex === index ? null : index
                )
              }
              className="flex w-full items-center justify-between p-4 text-left"
            >
              <span>{faq.question}</span>

              <FaChevronDown
                className={`transition ${
                  openIndex === index
                    ? "rotate-180"
                    : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="border-t p-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}