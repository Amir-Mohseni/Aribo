import React, { useState, MutableRefObject } from "react";
import AppMockUp3 from "../assets/images/app-mocup-3.png";
import IconSetting from "../assets/images/icon-setting.png";
import IconResponsive from "../assets/images/icon-responsive.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function AwesomeFeatures() {

  const [carousel,setCarousel] = useState< Carousel | null >(null)

  const responsive = {
    // superLargeDesktop: {
    //   breakpoint: { max: 5000, min: 1920 },
    //   items: 2,
    // },
    // LargeDesktop: {
    //   breakpoint: { max: 5000, min: 1600 },
    //   items: 2,
    // },
    desktop: {
      breakpoint: { max: 200000, min: 1200 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 1200, min: 0 },
      items: 1,
    },
  };

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
            <a href="/" data-owl-item="1" className="feature-link active">
              <div className="feat-screen-single">
                <img src={AppMockUp3} className="img-fluid" alt="" />
              </div>
            </a>
          </div>
        </div>
        {/* end feature images */}

        <div className="col-md-7 carousel-wrap">
          {/* <div className="feat-carousel-wrap"> */}
            {/* <div className="awesome-feat-carousel owl-carousel"> */}

              <Carousel
                ref={ (el) => setCarousel(el) }
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className="family-carousel"
                containerClass="container-with-dots"
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite={true}
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                responsive={responsive}
                showDots={false}
                sliderClass=""
                slidesToSlide={1}
                swipeable
              >

                <div className="awesome-feat-single text-center">
                  <div className="icon">
                    <img src={IconSetting} className="img-fluid" alt="" />
                  </div>
                  <h3>Easy to Manage Your All Data</h3>
                  <p>
                    Arribo is Best app to help you take control of your device
                    data.Apps that have the power to transform workflows,
                    improve client relationships,boost your productivity and
                    organize your life.{" "}
                  </p>
                </div>

                <div className="awesome-feat-single text-center">
                  <div className="icon two">
                    <img src={IconResponsive} className="img-fluid" alt="" />
                  </div>
                  <h3>Responsive Design For All Devices</h3>
                  <p>
                    Arribo is Best app to help you take control of your device
                    data.Apps that have the power to transform workflows,
                    improve client relationships,boost your productivity and
                    organize your life.{" "}
                  </p>
                </div>

                <div className="awesome-feat-single text-center">
                  <div className="icon two">
                    <img src={IconResponsive} className="img-fluid" alt="" />
                  </div>
                  <h3>Responsive Design For All Devices</h3>
                  <p>
                    Arribo is Best app to help you take control of your device
                    data.Apps that have the power to transform workflows,
                    improve client relationships,boost your productivity and
                    organize your life.{" "}
                  </p>
                </div>

              </Carousel>

              <div className="carousel-arrows">

                <div className="carousel-prev" onClick={ () => carousel?.previous(1) }>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                </div>

                <div className="carousel-next" onClick={ () => carousel?.next(1) } >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>

              </div>
            {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
