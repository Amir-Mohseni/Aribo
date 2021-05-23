import React from "react";
import { scrollTo } from '../Functions/Scroll'
import { FeaturesData } from "../data/Features";

export default function Features() {
  return (
    <section id="core-feature-area" className="bg-1">
      <div className="container">
        <div className="row">
          {/* start section heading */}
          <div className="col-md-10 offset-md-1">
            <div className="section-heading text-center">
              <h5>About our App</h5>
              <h2>Wonderful features to satisfy you to use our mobile app</h2>
              <p>
                Here you are welcome to present number of the most
                characteristic features of your app you are proud of.It was
                designed to promote your mobile App, services or business
                projects
              </p>
            </div>
          </div>
          {/* -end section heading */}
        </div>
        <div className="row">

          {FeaturesData.map((feature) => 

            <div className="col-lg-3 col-md-6" key={feature.title} >
              <div className={`core-feature-single ${feature.number} text-center`}>
                <div className={`icon ${feature.number}`}>
                  <i className={feature.icon} ></i>
                </div>
                <h3>{ feature.title }</h3>
                <p>
                  { feature.text }
                </p>
              </div>
            </div>

          )}          

        </div>

        <div className="row">
          {/* start read more button */}
          <div className="col-lg-12">
            <div className="load-more-btn text-center">
              <button onClick={ () => scrollTo('awesome-feat-area') }>Learn More</button>
            </div>
          </div>
          {/* end read more button */}
        </div>
      </div>
    </section>
  );
}
