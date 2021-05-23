import React, { useState } from 'react'

export default function PricingArea() {

	const [isMonthly,setIsMonthly] = useState<boolean>(true)

	const toggleMonthly = ( data: boolean ) => {

		if ( data && !isMonthly ) setIsMonthly(true)
		if ( !data && isMonthly ) setIsMonthly(false)

	}

  return (
    <section id="pricing-area">
        <div className="container">
            <div className="row">

                <div className="col-md-7">

                    <div className="section-heading">
                        <h5>pricing Plan</h5>
                        <h2>Choose The Right Plan</h2>
                        <p>Build trust with prospective clients, delight existing customers, and increase the efficiency and collaboration within your team. We have experience with plethora of technologies.</p>
                        <p>Arribo has plans, from free to paid, that scale with your needs. Subscribe to a plan that fits the size of your business.Arribo monthly pricing is based on how many functions you need to start your work. If you ready to use Arribo for a long time you can choose yearly plan and save some money.</p>
                    </div>

                    <div className="toggle-container">
                        <div className={`switch-toggles ${ !isMonthly ? `active` : ''}`}>
                            <div className={`monthly ${ isMonthly ? `active` : ''}`} onClick={ () => toggleMonthly( true ) }>Monthly</div>
                            <div className={`yearly ${ !isMonthly ? `active` : ''}`} onClick={ () => toggleMonthly( false ) }>Yearly</div>
                        </div>
                    </div>

                </div>
                
                <div className="col-md-5">
                    <div id="pricing-wrap">

                        {/* start monthly pricing table */}
                        <div className={`monthly ${ isMonthly ? `active` : ''}`}>
                            <div className="price-tbl-single highlighted">
                                <div className="table-inner text-center">
                                    <h4>start</h4>
                                    <div className="price">
                                        <div className="price-bg"></div>
                                        <h2><sup>$</sup>15/<span>MON</span></h2>
                                    </div>
                                    <ul>
                                        <li>5 GB Space</li>
                                        <li>5 Subdomain Unlimited</li>
                                        <li>Easy to Customize</li>
                                        <li>Unlimited Users</li>
                                        <li>Highest Speed</li>
                                        <li>Easy to Customize</li>
                                        <li>Support Unlimited User</li>
                                    </ul>
                                    <button >get started</button>
                                </div>
                            </div>
                        </div>
                        {/* end monthly pricing table */}

                        {/* start monthly pricing table */}
                        <div className={`yearly ${ !isMonthly ? `active` : ''}`}>
                            <div className="price-tbl-single highlighted">
                                <div className="table-inner text-center">
                                    <h4>Standard</h4>
                                    <div className="price">
                                        <div className="price-bg"></div>
                                        <h2><sup>$</sup>20/<span>MON</span></h2>
                                    </div>
                                    <ul>
                                        <li>5 GB Space</li>
                                        <li>5 Subdomain Unlimited</li>
                                        <li>Easy to Customize</li>
                                        <li>Unlimited Users</li>
                                        <li>Highest Speed</li>
                                        <li>Easy to Customize</li>
                                        <li>Support Unlimited User</li>
                                    </ul>
                                    <button >get started</button>
                                </div>
                            </div>
                        </div>
                        {/* end monthly pricing table */}

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
