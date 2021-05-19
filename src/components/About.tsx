import React from 'react'
import AppMockUP1 from '../assets/images/app-mocup-1.png'

export default function About() {
  return (
    <section id="about-area" className="bg-1">
        <div className="container">
            <div className="row">

                {/* start about content */}
                <div className="col-md-6">
                    <div className="about-cont">
                        <h5>About Arribo</h5>
                        <h2>Delivering exceptional user experiences.</h2>
                        <p>Arribo is designed for those who love to user interface. You will love the seamless way we display the user inter face on your devices.As businesses rely on software or app to engage customers, innovation and velocity becomes core to delivering value.</p>
                        <p>But you’re held back by antiquated technology and legacy development processes. Our customers use our app, to adopt next-generation development practices, deliver new applications, and modernize existing applications.</p>
                    </div>
                    <div className="about-info row">
                        <div className="col-md-6 col-6">
                            <div className="about-info-single">
                                <div className="icon">
                                    <i className="icon-employee"></i>
                                </div>
                                <div className="content">
                                    <h3>17,501</h3>
                                    <p>Premium User</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-6">
                            <div className="about-info-single two">
                                <div className="icon">
                                    <i className="icon-eye-tracking"></i>
                                </div>
                                <div className="content">
                                    <h3>1,987</h3>
                                    <p>Daily Visitors</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end about content */}

            </div>
        </div>

        {/* start app mocup */}
        <div className="about-app-mocup">
            <img src={AppMockUP1} className="img-fluid" alt="" />
        </div>
        {/* end app mocup */}

    </section>
  )
}
