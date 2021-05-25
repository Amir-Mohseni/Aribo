import React, { useState } from 'react'

export default function NewsletterArea() {

	const [email,setEmail] = useState<string>('')
	const [subLoading,setSubLoading] = useState<boolean>(false)
	const [subbed,setSubbed] = useState<boolean>(false)

	const subscribe = () => {

		if( subbed ) return

		if( !email.length || !validateEmail(email) ) return

		setSubLoading(true)

		setTimeout( () => {
			setSubbed(true)
			setSubLoading(false)
			setEmail('')
		},2000)
	}

	const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

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
                                
																<input type="email" 
																	className="form-control" 
																	placeholder="Enter Your Email" 
																	value={email} 
																	onChange={ (e) => setEmail(e.target.value) } 
																	required
																/>
                                
																<button type="submit" onClick={subscribe} disabled={subLoading}>
																	{ 
																	!subbed ?
																		!subLoading ?
																			<span>SUBSCRIBE</span>
																			:
																			<svg className="feather feather-loader" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
																		:
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
																	}
																</button>

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
