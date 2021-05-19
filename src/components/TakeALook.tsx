import React from 'react'
import IconCloud from '../assets/images/icon-cloud.png'
import IconUser from '../assets/images/icon-user.png'
import IconLike from '../assets/images/icon-like.png'
import IconTrophy from '../assets/images/icon-like.png'

export default function TakeALook() {
  return (
    <section id="take-a-look" className="bg-1">

        <div className="video-cont d-table text-center">
            <div className="d-table-cell align-middle">
                <div className="video-overlay"></div>
                {/* <a className="popup-video" href="https://www.youtube.com/watch?v=om4qTKMuPPs"><i className="icofont-ui-play"></i></a> */}
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="video title">
                        <h5>Explore Amazing features</h5>
                        <h2>That will boost your productivity</h2>
                        <p>With our wide range of features, you can create a custom app no matter what your niche: restaurant, Realtor, small business,rock band, and all the rest!</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 col-md-8">
                    <div className="counter title">
                        <h5>Take a Look at our</h5>
                        <h2 className="text-white">Some Facts</h2>
                        <p>Arribo enables all its users with constant support and wide set of tools to develop and grow their businesses and projects.some of our favorite facts that you might not have known.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">

                {/* start counter single */}
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src={IconLike} className="img-fluid" alt="" />
                        </div>
                        <h2>5,289</h2>
                        <p>5 star Rating</p>
                    </div>
                </div>
                {/* end counter single */}

                {/* start counter single */}
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src={IconUser} className="img-fluid" alt="" />
                        </div>
                        <h2>4,188</h2>
                        <p>Happy Users</p>
                    </div>
                </div>
                {/* end counter single */}

                {/* start counter single */}
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src={IconCloud} className="img-fluid" alt="" />
                        </div>
                        <h2>9,087</h2>
                        <p>app download</p>
                    </div>
                </div>
                {/* end counter single */}

                {/* start counter single */}
                <div className="col-md-3 col-6">
                    <div className="counter-single">
                        <div className="icon">
                            <img src={IconTrophy} className="img-fluid" alt="" />
                        </div>
                        <h2>26</h2>
                        <p>Best Awards</p>
                    </div>
                </div>
                {/* end counter single */}

            </div>
        </div>
    </section>
  )
}
