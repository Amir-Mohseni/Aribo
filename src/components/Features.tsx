import React from 'react'

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
                        <p>Here you are welcome to present number of the most characteristic features of your app you are proud of.It was designed to promote your mobile App, services or business projects </p>
                    </div>
                </div>
                {/* -end section heading */}

            </div>
            <div className="row">
                
                {/* start core feature single */}
                <div className="col-lg-3 col-md-6">
                    <div className="core-feature-single text-center">
                        <div className="icon">
                            <i className="icon-gear"></i>
                        </div>
                        <h3>Quick Setup</h3>
                        <p>The app is really easy to install, the complete setup process will take less than 1 minute of your time.</p>
                    </div>
                </div>
                {/* end core feature single */}

                {/* start core feature single */}
                <div className="col-lg-3 col-md-6">
                    <div className="core-feature-single two text-center">
                        <div className="icon">
                            <i className="icon-web-design"></i>
                        </div>
                        <h3>Lovely Design</h3>
                        <p>With carefully thought-out design, Arribo looks great on any device and Easy to Use, Easy way to customize.</p>
                    </div>
                </div>
                {/* end core feature single */}

                {/* start core feature single */}
                <div className="col-lg-3 col-md-6">
                    <div className="core-feature-single three text-center">
                        <div className="icon three">
                            <i className="icon-report"></i>
                        </div>
                        <h3>Optimized Data</h3>
                        <p>Speed is very important when you work with loading data, especially if you have a large number of users.</p>
                    </div>
                </div>
                {/* end core feature single */}

                {/* start core feature single */}
                <div className="col-lg-3 col-md-6">
                    <div className="core-feature-single four text-center">
                        <div className="icon four">
                            <i className="icon-list"></i>
                        </div>
                        <h3>Secure Data</h3>
                        <p>Transfer all information with the help of SSL - a solution allowing you to save any data from the public eye.</p>
                    </div>
                </div>
                {/* end core feature single */}

            </div>

            <div className="row">

                {/* start read more button */}
                <div className="col-lg-12">
                    <div className="load-more-btn text-center">
                        <a href="/#">Learn More</a>
                    </div>
                </div>
                {/* end read more button */}

            </div>
        </div>
    </section>
  )
}
