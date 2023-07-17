import React, { useEffect } from "react";
import "../styles/help.css";

const Help = () => {
  const faqs = [
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
    {
      ques: "",
      ans: "",
    },
  ];

  const faqsList = () => {
    let list = [];
    list = faqs.map((el) => {
      return (
        <div className="faq">
          <h3 className="faq-title">{el.ques}</h3>
          <p className="faq-text">{el.ans}</p>
          <button className="faq-toggle">
            <i className="fas fa-angle-down"></i>
          </button>
        </div>
      );
    });
    return list;
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".faq-toggle");

    buttons.forEach((button) => {
      button.addEventListener("click", () =>
        button.parentElement.classList.toggle("active")
      );
    });
  }, []);

  return (
    <div
      style={{
        // height: "calc(100vh - 140px)"
        backgroundColor: "rgb(227, 227, 227)",
      }}
    >
      <h1 className="faq-head">Frequently Asked Questions</h1>
      <div className="faq-container">{faqsList()}</div>
      <div className="further-ques">
        <div>More Questions?</div>
        <div className="support">
          Reach out to us at <a href="/contact-us">Support</a>
        </div>
      </div>
    </div>
  );
};
export default Help;
