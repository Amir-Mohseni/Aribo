import React from 'react'
import Team1 from '../assets/images/team-1.jpg'
import Team2 from '../assets/images/team-2.jpg'
import Team3 from '../assets/images/team-3.jpg'
import Team4 from '../assets/images/team-4.jpg'

export default function Team() {
  return (
    <section id="team-area">

        <div className="container">
            <div className="row">
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Our creative team</h5>
                        <h2>Meet The Team</h2>
                        <p>Meet the people behind Arribo We are the team of professional analysts, publishing dozens of application. Join us!</p>
                    </div>
                </div>
            </div>
            <div className="row">

                {/* start team single */}
                <div className="col-lg-3 col-md-6">
                    <div className="team-single text-center">
                        <div className="team-img">

                            <img src={Team1} className="img-fluid" alt="" />
                            <div className="team-social">
                                <ul>
                                    <li><a href="/#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="/#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="/#"><i className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>

                        </div>

                        <div className="team-info">
                            <h3>Penny Tool</h3>
                            <p>Visual Designer</p>
                        </div>

                    </div>
                </div>
                {/* end team single */}

                {/* start team single */}
                <div className="col-lg-3 col-md-6">
                    <div className="team-single text-center">

                        <div className="team-img">
                            <img src={Team2} className="img-fluid" alt="" />
                            <div className="team-social">
                                <ul>
                                    <li><a href="/#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="/#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="/#"><i className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="team-info">
                            <h3>Pat Hines</h3>
                            <p>Android Developer</p>
                        </div>

                    </div>
                </div>
                {/* end team single */}

                {/* start team single */}
                <div className="col-lg-3 col-md-6">
                    <div className="team-single text-center">

                        <div className="team-img">
                            <img src={Team3} className="img-fluid" alt="" />
                            <div className="team-social">
                                <ul>
                                    <li><a href="/#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="/#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="/#"><i className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="team-info">
                            <h3>Donald Huff</h3>
                            <p>iOS Developer</p>
                        </div>

                    </div>
                </div>
                {/* end team single */}

                {/* start team single */}
                <div className="col-lg-3 col-md-6">
                    <div className="team-single text-center">

                        <div className="team-img">
                            <img src={Team4} className="img-fluid" alt="" />
                            <div className="team-social">
                                <ul>
                                    <li><a href="/#"><i className="icofont-facebook"></i></a></li>
                                    <li><a href="/#"><i className="icofont-twitter"></i></a></li>
                                    <li><a href="/#"><i className="icofont-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="team-info">
                            <h3>Angela Moore</h3>
                            <p>Product Strategist</p>
                        </div>

                    </div>
                </div>
                {/* end team single */}

            </div>
        </div>
    </section>
  )
}
