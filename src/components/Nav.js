import React from 'react'

//Router
import {
    Link,
    useLocation
} from 'react-router-dom'
//Animations
import { motion } from 'framer-motion'
import { lineNavAnim } from '../animation'
const Nav = () => {

    const { pathname } = useLocation();
    return (
        <nav>
            <h1>
                <Link id='logo' to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About us</Link>
                    {
                        pathname === '/' && (
                            <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                        )
                    }

                </li>
                <li>
                    <Link to="/work">2. Our work</Link>
                    {
                        pathname === '/work' && (
                            <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                        )
                    }
                </li>
                <li>
                    <Link to="/contact">3. Contact</Link>
                    {
                        pathname === '/contact' && (
                            <motion.div variants={lineNavAnim} initial='hidden' animate='show' className="line"></motion.div>
                        )
                    }
                </li>
            </ul>
        </nav>
    )
}

export default Nav
