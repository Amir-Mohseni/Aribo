import React from 'react'

export default function Contact() {
  return (
    <section id="contact-area" className="bg-1">

        <div className="container">
            <div className="row">

                {/* start section heading */}
                <div className="col-lg-5 col-md-8">
                    <div className="section-heading">
                        <h5>Contact us</h5>
                        <h2>Get In Touch</h2>
                        <p>If you have any questions, just fill in the contact form, and we will answer you shortly.</p>
                    </div>
                </div>
                {/* end section heading */}

            </div>
            <div className="row">

                {/* start contact form */}
                <div className="col-lg-5 col-md-7">
                    <div className="contact-form">
                        <form>

                            <div className="form-group">
                                <input type="text" className="form-control" id="name" name="name" placeholder="Name*" required={true} data-error="name is required." />
                                <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" name="email" placeholder="Email*" required={true} data-error="valid email is required." />
                                    <div className="help-block with-errors"></div>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="message" name="message" rows={10} placeholder="Message*" required={true} data-error="Please, leave us a message."></textarea>
                                <div className="help-block with-errors"></div>
                            </div>
                            <button type="submit">SUBMIT NOW</button>
                            <div className="messages"></div>

                        </form>
                    </div>
                </div>
                {/* end contact form */}

            </div>
        </div>
    </section>
  )
}
