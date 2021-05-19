import React from 'react'

export default function NewsletterArea() {
  return (
    <section id="newsletter-area" className="bg-1">
        <div className="container">
            <div className="row">

                {/* start section heading */}
                <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2">
                    <div className="section-heading text-center">
                        <h5>Be the first to know</h5>
                        <h2 className="text-white">About New Features</h2>
                        <p className="text-light">If you want to receive monthly updates from us just pop your email in the box. We think that spam is for jerks. And jerks we are not.</p>
                    </div>
                </div>
                {/* end section heading */}

            </div>
            <div className="row">

                {/* start newsletter form */}
                <div className="col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                    <div className="newsletter-form">
                        <form >
                            <div className="newsletter-input-bx">
                                <input type="email" className="form-control" id="mc-email" name="mc-email" placeholder="Enter Your Email" required />
                                <button type="submit">SUBSCRIBE</button>
                            </div>
                        </form>

                        <div id="response"></div>
                    </div>
                </div>
                {/* end newsletter form */}

            </div>
        </div>
    </section>
  )
}
