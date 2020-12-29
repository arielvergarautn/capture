import React from 'react'

//Router
import {
    Link
} from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <h1>
                <Link id='logo' to="/">Capture</Link>
            </h1>
            <ul>
                <li>
                    <Link to="/">1. About us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav
