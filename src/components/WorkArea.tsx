import React from 'react'

export default function WorkArea() {
  return (
    <section id="how-work-area">
        <div className="container">

            <div className="row">

                {/* start section heading */}
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Describe your App</h5>
                        <h2>Let’s See How It Work</h2>
                        <p>We've gone over everything you could possibly want to know about Arribo, from how exactly the app works.Three Simple Steps to journey.</p>
                    </div>
                </div>
                {/* end section heading */}

            </div>

            <div className="row how-work-wrap">

                <div className="how-work-bg"></div>

                {/* start how work single */}
                <div className="col-lg-offset-1 col-lg-3 col-md-4">
                    <div className="how-work-single">
                        <div className="icon">
                            <i className="icofont-cloud-download"></i>
                            <div className="number">01</div>
                        </div>
                        <h3>Download</h3>
                        <p>The first step to getting on your Arribo is to download the Arribo. Open the <a href="/">Google Play</a>, or <a href="/">iTunes App Store</a> App on your smartphone.</p>
                    </div>
                </div>
                {/* end how work single */}

                {/* start how work single */}
                <div className="col-lg-3 col-md-4">
                    <div className="how-work-single two">
                        <div className="icon">
                            <i className="icofont-settings"></i>
                            <div className="number">02</div>
                        </div>
                        <h3>Configure It</h3>
                        <p>Select your mobile app's Settings tab that appear on your mobile screen, each of these customizations are unique to your Activity.</p>
                    </div>
                </div>
                {/* end how work single */}
                
                {/* start how work single */}
                <div className="col-lg-3 col-md-4">
                    <div className="how-work-single three">
                        <div className="icon">
                            <i className="icofont-trophy"></i>
                            <div className="number">03</div>
                        </div>
                        <h3>Yay! Done</h3>
                        <p>Explore and share Arribo.Check out our FAQ for more information on the system, memberships, 24-Hour Passes, safety tips, and more.</p>
                    </div>
                </div>
                {/* end how work single */}
                
            </div>
        </div>
    </section>
  )
}
