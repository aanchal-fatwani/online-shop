import React, { useEffect } from "react";
import "../styles/help.css";

const Help = () => {
  const faqs = [
    {
      ques: "Returns Policy",
      ans: "Most items purchased from sellers listed are returnable within the return window, except those that are explicitly identified as not returnable. ",
    },
    {
      ques: "Cancel Items and Orders",
      ans: "If your order is combined with other active orders from your account and is shipped as a single shipment (common tracking number), then cancelling one order/item would result in cancellation of all the other orders/items combined in the shipment.",
    },
    {
      ques: "About Pay on Delivery",
      ans: "Pay on Delivery (POD) includes Cash on Delivery (COD) as well as additional digital payment facilities via UPI / QR Code –Scan & Pay.",
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
