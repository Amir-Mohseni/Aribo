import React, { useState } from 'react'

export default function Contact() {

	// Name
	const [name,setName] = useState<string>('')
	const [nameErr,setNameErr] = useState<string>('')

	// Email
	const [email,setEmail] = useState<string>('')
	const [emailErr,setEmailErr] = useState<string>('')

	// Message
	const [message,setMessage] = useState<string>('')
	const [messageErr,setMessageErr] = useState<string>('')

	const [Loading,setLoading] = useState<boolean>(false)
	const [sent,setSent] = useState<boolean>(false)

	const sendMessage = () => {

		if( sent ) return

		setNameErr('')
		setEmailErr('')
		setMessageErr('')

		if( name.length < 3 ) {
			setNameErr('Name must be at least 3 characters')
			return
		}

		if( !email.length || !validateEmail(email) ) {
			setEmailErr('Email is not valid')
			return
		}

		if( message.length < 5 ) {
			setMessageErr('Message must be at least 5 characters')
			return
		}

			setLoading(true)
	
			setTimeout( () => {
				setSent(true)
				setName('')
				setEmail('')
				setMessage('')
				setLoading(false)
			},2000)

	}

	const validateEmail = (email: string) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
	}

	// const validateFormInputs = (): boolean => {

	// 	console.log(name.length)
	// 	console.log(email.length)
	// 	console.log(message.length)

		

	// 	console.log(nameErr.length)
	// 	console.log(emailErr)
	// 	console.log(messageErr)

	// 	if( !nameErr && !emailErr && !messageErr ) return true

	// 	return false
	// }

	const changeInput = ( e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, setter: React.Dispatch<React.SetStateAction<string>> ) => {
		setter(e.target.value)
	}

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
                        <form onSubmit={ (e) => e.preventDefault() }>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name*" onChange={ (e) => changeInput(e,setName) } />
                                <div className="help-block with-errors text-left text-danger">{nameErr}</div>
                            </div>

                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="Email*" onChange={ (e) => changeInput(e,setEmail) } />
                                    <div className="help-block with-errors text-left text-danger">{emailErr}</div>
                            </div>

                            <div className="form-group">
                                <textarea className="form-control" rows={10} placeholder="Message*" onChange={ (e) => changeInput(e,setMessage) } >
																</textarea>
                                <div className="help-block with-errors text-left text-danger">{messageErr}</div>
                            </div>

                            <button type="button" onClick={sendMessage} disabled={Loading}>
															{ 
																!sent ?
																	!Loading ?
																		<span>SUBMIT NOW</span>
																		:
																		<svg className="feather feather-loader" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line></svg>
																	:
																	<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>
															}
															
														</button>

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
