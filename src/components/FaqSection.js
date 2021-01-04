import React, { useState } from 'react'
import Toggle from './Toggle'
import { FaqState } from '../states'
import { AnimateSharedLayout } from 'framer-motion'

const FaqSection = () => {

    const [faqs, setFaqs] = useState(FaqState)

    return (
        <div id='faq' className='layout'>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
                {
                    faqs.map((faq) => (

                        <Toggle title={faq.title}>
                            <div className="answer">
                                <p>{faq.p1}</p>
                                <p>{faq.p2}</p>
                            </div>
                        </Toggle>
                    ))
                }
            </AnimateSharedLayout>

        </div>
    )
}
export default FaqSection
