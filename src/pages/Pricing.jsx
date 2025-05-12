import React from 'react'
import { Helmet } from 'react-helmet'
import PricingOptions from '../components/PricingOptions'
import PricingCompare from '../components/PricingCompare'

const Pricing = () => {
    return (
        <>
            <Helmet>

                <title>Pricing - Page</title>

            </Helmet>
            <section>
                <div className="text-center pt-5">
                    {/* Highlight label */}
                    <span className="d-inline-block px-3 py-1 mb-3 rounded" style={{ backgroundColor: '#FFEFC7', color: '#F6A623', fontSize: '14px', fontWeight: '600' }}>
                        Transparent Pricing
                    </span>

                    {/* Title */}
                    <h2 className="fw-bold" style={{ fontSize: '2.5rem' }}>
                        Flexible Pricing for <br /> Every School Size
                    </h2>

                    {/* Subtext */}
                    <p className="text-muted mt-3" style={{ maxWidth: '500px', margin: '0 auto' }}>
                        Empower your institution with scalable <br /> solutions that fit your budget
                    </p>
                </div>
            </section>
            <PricingOptions />
            <PricingCompare />
        </>
    )
}

export default Pricing
