import React, { useState } from "react";
import FAQImage from "../assets/images/faq-img-1.png";
import { FAQCardsInterface, ReadtFaqCards } from "../data/FAQCards";

export default function FAQ() {
  const [FAQCards, setFAQCards] = useState<FAQCardsInterface[]>(ReadtFaqCards);

  const changeActiveFaqCard = (faqCard: FAQCardsInterface) => {
    let newFaqs;

    if (faqCard.active) {
      newFaqs = FAQCards.map((card) => {
        if (card.number === faqCard.number) {
          card.active = false;
        }

        return card;
      });
    } else {
      newFaqs = FAQCards.map((card) => {
        if (card.number === faqCard.number) {
          card.active = true;
        } else card.active = false;

        return card;
      });
    }

    setFAQCards(newFaqs);
  };

  return (
    <section id="faq-area" className="bg-1">
      <div className="container">
        <div className="row">
          {/* start section heading */}
          <div className="col-md-8 offset-md-2">
            <div className="section-heading text-center">
              <h5>Take A look</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Our Mobile App can be downloaded and installed on your
                compatible mobile device easily. If you have any questions -
                please look through the most frequently asked questions or
                contact us for more details.
              </p>
            </div>
          </div>
          {/* end section heading */}
        </div>
        <div className="row">
          <div className="col-md-7">
            <div id="accordion" role="tablist">
              {FAQCards.map((card) => (
                <div className="card" key={card.number}>
                  <div className={`card-header ${card.active ? "active" : ""}`}>
                    <h5 className="mb-0">
                      <button
                        className="card-question"
                        onClick={() => changeActiveFaqCard(card)}
                      >
                        {card.question}
                      </button>
                    </h5>
                  </div>
                  <div className={`${card.active ? "show" : "d-none"}`}>
                    <div className="card-body">
                      <p>{card.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-md-5">
            <div className="faq-img">
              <img src={FAQImage} className="img-fluid" alt="faq" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
