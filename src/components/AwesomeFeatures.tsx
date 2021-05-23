import React, { useState } from "react";
import AppMockUp3 from "../assets/images/app-mocup-3.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AwesomeFeaturesData } from "../data/AwesomeFeatures";
import { CarouselArrows, carouselSettings } from './CarouselImports'

export default function AwesomeFeatures() {

  const [carousel, setCarousel] = useState<Carousel | null>(null);

  return (
    <section id="awesome-feat-area" className="bg-1">

      <div className="container">
        <div className="row">
          {/* start section heading */}
          <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
            <div className="section-heading text-center">
              <h5>an exhaustive thriving list of</h5>
              <h2>Awesome Features</h2>
              <p>
                We've gone over everything you could possibly want to know about
                Arribo, from how exactly the app works.Three Simple Steps to
                journey.
              </p>
            </div>
          </div>
          {/* end section heading */}
        </div>
      </div>

      <div className="row">
        {/* start feature images */}
        <div className="col-md-5">
          <div className="awesome-feat-img text-center">
            <button className="feature-link active">
              <div className="feat-screen-single">
                <img src={AppMockUp3} className="img-fluid" alt="app mockup" />
              </div>
            </button>
          </div>
        </div>
        {/* end feature images */}

        <div className="col-md-7 carousel-wrap">
          <Carousel
            ref={(el) => setCarousel(el)}
						{...carouselSettings}
          >
            {AwesomeFeaturesData.map((feature) => (
              <div className="awesome-feat-single text-center" key={ feature.title }>
                <div className={`icon ${feature.number}`}>
                  <img
                    src={feature.img}
                    className="img-fluid"
                    alt={feature.title}
                  />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            ))}
          </Carousel>

					<CarouselArrows carousel={ carousel } />

        </div>
      </div>
    </section>
  );
}
