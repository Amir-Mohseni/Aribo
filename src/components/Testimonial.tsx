import React, { useState } from "react";
import { readyTestimonials, TestimonialsInterface } from "../data/Testimonials";

export default function Testimonial() {
  const [testimonials, setTestimonials] =
    useState<TestimonialsInterface[]>(readyTestimonials);

  const changeActiveTestimonial = (position: number) => {
    const newTestimonials = testimonials.map((test) => {
      if (test.active) {
        test.active = false;
        test.position = position;
      } else if (test.position === position) {
        test.active = true;
        test.position = 1;
      }

      return test;
    });

    setTestimonials(newTestimonials);
  };

  return (
    <section id="testimonial-area">
      <div className="container">
        <div className="row">
          {/* start section heading */}
          <div className="col-md-8 offset-md-2">
            <div className="section-heading text-center">
              <h5>Trusted by 50,000+ User</h5>
              <h2>A Word From Our Customers</h2>
              <p>
                Our passion drives us to work hard and deliver outstanding
                results so we can be the best app development company. Hear what
                our clients have to say about Arribo.
              </p>
            </div>
          </div>
          {/* end section heading */}
        </div>
        <div className="testi-wrap">
          {testimonials.map((test) => (
            <div
              key={test.position}
              className={`client-single ${
                test.active ? "active" : "inactive"
              } position-${test.position}`}
              data-position={`position-${test.position}`}
            >
              <div className="client-img">
                <img
                  src={test.img}
                  alt={test.name}
                  onClick={() => {
                    if (!test.active) changeActiveTestimonial(test.position);
                  }}
                />
              </div>
              <div className="client-comment">
                <h3>{test.text}</h3>
                <span>
                  <i className="icofont-quote-left"></i>
                </span>
              </div>
              <div className="client-info">
                <h3>{test.name}</h3>
                <p>{test.from}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
