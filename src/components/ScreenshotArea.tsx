import React, { useState } from 'react'
import Screen1 from '../assets/images/screen-1.jpg'
import Screen2 from '../assets/images/screen-2.jpg'
import Screen3 from '../assets/images/screen-3.jpg'
import Screen4 from '../assets/images/screen-4.jpg'
// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";

export default function ScreenshotArea() {

  // const [carousel,setCarousel] = useState< Carousel | null >(null)

	const responsive = {
    desktop: {
      breakpoint: { max: 200000, min: 1200 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 1200, min: 0 },
      items: 1,
    },
  };

  return (
    <section id="screenshot-area" className="bg-1" >
        <div className="container">
            <div className="row">

                {/* start section heading */}
                <div className="col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Showcase your app</h5>
                        <h2>The Screenshot Gallery</h2>
                        <p>This is easy way showcase your app screen . If you want to show your app just pop in the screenshots and the magic happens.</p>
                    </div>
                </div>
                {/* end section heading */}
                
            </div>
            <div className="screen-wrap">
                <div className="screenshot-frame"></div>
                <div className="screen-carousel owl-carousel">
									{/* <Carousel
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
									> */}
                    <img src={Screen1} className="img-fluid" alt="" />
                    <img src={Screen2} className="img-fluid" alt="" />
                    <img src={Screen3} className="img-fluid" alt="" />
                    <img src={Screen4} className="img-fluid" alt="" />
									{/* </Carousel> */}
                </div>
            </div>
        </div>
    </section>
  )
}
