import React, { useState } from 'react'
import Toggle from './Toggle'
import { FaqState } from '../states'
import { AnimateSharedLayout } from 'framer-motion'
//Animations
import { scrollReveal } from '../animation'
import { useScroll } from './UseScroll'
import { motion } from 'framer-motion'


const FaqSection = () => {

    const [faqs, setFaqs] = useState(FaqState)
    const [element, controls] = useScroll();

    return (
        <motion.div id='faq' variants={scrollReveal} ref={element} animate={controls} initial='hidden' className='layout'>
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

        </motion.div>
    )
}
export default FaqSection
