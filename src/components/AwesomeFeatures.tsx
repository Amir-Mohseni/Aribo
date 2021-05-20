import React from 'react'
import AppMockUp3 from '../assets/images/app-mocup-3.png'
import IconSetting from '../assets/images/icon-setting.png'
import IconResponsive from '../assets/images/icon-responsive.png'

export default function AwesomeFeatures() {
  return (
    <section id="awesome-feat-area" className="bg-1">
        <div className="container">
            <div className="row">

                {/* start section heading */}
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>an exhaustive thriving list of</h5>
                        <h2>Awesome Features</h2>
                        <p>We've gone over everything you could possibly want to know about Arribo, from how exactly the app works.Three Simple Steps to journey.</p>
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

                    <a href="/" data-owl-item="2" className="feature-link">

                        <div className="feat-screen-single">
                            <img src={AppMockUp3} className="img-fluid" alt="" />
                        </div>

                    </a>

                    <a href="/" data-owl-item="3" className="feature-link">

                        <div className="feat-screen-single">
                            <img src={AppMockUp3} className="img-fluid" alt="" />
                        </div>

                    </a>

                    <a href="/" data-owl-item="4" className="feature-link">

                        <div className="feat-screen-single">
                            <img src={AppMockUp3} className="img-fluid" alt="" />
                        </div>

                    </a>
                    
                </div>
            </div>
            {/* end feature images */}

            <div className="col-md-7">
                <div className="feat-carousel-wrap">
                    <div className="awesome-feat-carousel d-flex justify-center align-items-center">

                        <div className="awesome-feat-single text-center">

                            <div className="icon">
                                <img src={IconSetting} className="img-fluid" alt="" />
                            </div>
                            <h3>Easy to Manage Your All Data</h3>
                            <p>Arribo is Best app to help you take control of your device data.Apps that have the power to transform workflows, improve client relationships,boost your productivity and organize your life. </p>
                        
                        </div>

                        <div className="awesome-feat-single text-center">
                            
                            <div className="icon two">
                                <img src={IconResponsive} className="img-fluid" alt="" />
                            </div>
                            <h3>Responsive Design For All Devices</h3>
                            <p>Arribo is Best app to help you take control of your device data.Apps that have the power to transform workflows, improve client relationships,boost your productivity and organize your life. </p>
                        
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
