import React from 'react'
import { scrollTo, gotoDownload } from '../Functions/Scroll'

export default function Footer() {
  return (
    <footer id="footer" className="bg-1">
        <div className="container">

            <div className="get-started">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <h2>Ready To Get Started?</h2>
                        <p className="text-light">Don't waste another minute.Create an account now and start saving more time.Do even more with the Arribo.</p>
                    </div>
                    <div className="col-lg-6 col-md-4">
                        <button >Create an Account</button>
                    </div>
                </div>
            </div>

            <div className="footer-cont">
                <div className="row">

                    {/* start footer widget single */}
                    <div className="col-lg-3 col-md-6">
										</div>

                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3>Arribo</h3>
                            <ul>
                                <li><a onClick={ () => scrollTo('core-feature-area') } href="/#"><i className="icofont-long-arrow-right"></i>Features</a></li>
                                <li><a onClick={gotoDownload} href="/#"><i className="icofont-long-arrow-right"></i>Download</a></li>
                                <li><a onClick={ () => scrollTo('pricing-area') } href="/#"><i className="icofont-long-arrow-right"></i>Pricing Plan</a></li>
                                <li><a onClick={ () => scrollTo('testimonial-area') } href="/#"><i className="icofont-long-arrow-right"></i>What our users say</a></li>
                                <li><a onClick={ () => scrollTo('contact-area') } href="/#"><i className="icofont-long-arrow-right"></i>Request a feature</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* end footer widget single */}

                    {/* start footer widget single */}
                    <div className="col-lg-3 col-md-6">
                        <div className="footer-widget">
                            <h3>Company</h3>
                            <ul>
                                <li><a onClick={ () => scrollTo('about-area') } href="/#"><i className="icofont-long-arrow-right"></i>About us</a></li>
                                <li><a onClick={ () => scrollTo('team-area') } href="/#"><i className="icofont-long-arrow-right"></i>Meet the team</a></li>
                                <li><a onClick={ () => scrollTo('contact-area') } href="/#"><i className="icofont-long-arrow-right"></i>Contact us</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* end footer widget single */}

										<div className="col-lg-3 col-md-6">
										</div>
                    
                </div>
            </div>
            <div className="footer-copyright">
                <div className="row">
                    <div className="col-lg-6 col-md-7">
                        <p>&copy; 2019 Arribo | Developed by <a href="https://amirmohseni.dev" className="developer-referer">Amir Mohseni</a></p>
                    </div>
                    <div className="col-lg-6 col-md-5">
                        <div className="footer-social text-right">
                            <ul>
                                <li><a href="/#"><i className="icofont-facebook"></i></a></li>
                                <li><a href="/#"><i className="icofont-linkedin"></i></a></li>
                                <li><a href="/#"><i className="icofont-twitter"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}
