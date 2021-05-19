import React from 'react'
import Client1 from '../assets/images/client-1.jpg'
import Client2 from '../assets/images/client-2.jpg'
import Client3 from '../assets/images/client-3.jpg'
import Client4 from '../assets/images/client-4.jpg'
import Client5 from '../assets/images/client-5.jpg'
import Client6 from '../assets/images/client-6.jpg'
import Client7 from '../assets/images/client-7.jpg'

export default function Testimonial() {
  return (
    <section id="testimonial-area">
        <div className="container">
            <div className="row">

                {/* start section heading */}
                <div className="col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Trusted by 50,000+ User</h5>
                        <h2>A Word From Our Customers</h2>
                        <p>Our passion drives us to work hard and deliver outstanding results so we can be the best app development company. Hear what our clients have to say about Arribo.</p>
                    </div>
                </div>
                {/* end section heading */}

            </div>
            <div className="testi-wrap">

                {/* start testimonial single */}
                <div className="client-single active position-1" data-position="position-1">
                    <div className="client-img">
                        <img src={Client1} alt=""/>
                    </div>
                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>
                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>
                </div>
                {/* end testimonial single */}

                {/* start testimonial single */}
                <div className="client-single inactive position-2" data-position="position-2">
                    <div className="client-img">
                        <img src={Client7} alt="" />
                    </div>
                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>
                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>
                </div>
                {/* end testimonial single */}

                {/* start testimonial single */}
                <div className="client-single inactive position-3" data-position="position-3">
                    <div className="client-img">
                        <img src={Client3} alt="" />
                    </div>
                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>
                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>
                </div>
                {/* end testimonial single */}

                {/* start testimonial single */}
                <div className="client-single inactive position-4" data-position="position-4">
                    <div className="client-img">
                        <img src={Client6} alt="" />
                    </div>
                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>
                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>
                </div>
                {/* end testimonial single */}

                {/* start testimonial single */}
                <div className="client-single inactive position-5" data-position="position-5">
                    <div className="client-img">
                        <img src={Client4} alt="" />
                    </div>
                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>
                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>
                </div>
                {/* end testimonial single */}

                {/* start testimonial single */}
                <div className="client-single inactive position-6" data-position="position-6">
                    <div className="client-img">
                        <img src={Client5} alt="" />
                    </div>
                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>
                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>
                </div>
                {/* end testimonial single */}

                {/* start testimonial single */}
                <div className="client-single inactive position-7" data-position="position-7">

                    <div className="client-img">
                        <img src={Client2} alt="" />
                    </div>

                    <div className="client-comment">
                        <h3>Installation was pretty easy.We have been Arribo customers for years, and we have had nothing but amazing experiences with the Arribo and well-designed mobile app. Arribo provided that for us with easy-to-use software and personalized support. I like this app. Thank you</h3>
                        <span><i className="icofont-quote-left"></i></span>
                    </div>

                    <div className="client-info">
                        <h3>Fatih Senel</h3>
                        <p>Digilite Web Solutions</p>
                    </div>

                </div>
                {/* end testimonial single */}

            </div>
        </div>
    </section>
  )
}
