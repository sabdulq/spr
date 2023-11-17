// FAQ.js

import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is the first question?",
      answer: "This is the answer to the first question.",
    },
    {
      question: "Where is the second question?",
      answer: "Here is the answer to the second question.",
    },
    // ... add more FAQs as needed
  ];

  return (
    <div className="faq-section">
      <h1>FAQ</h1> {/* Corrected placement of the heading */}
      {faqs.map((faq, index) => (
        <div key={index}>
          <h3 className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </h3>
          <div className={`faq-answer ${activeIndex === index ? "show" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
