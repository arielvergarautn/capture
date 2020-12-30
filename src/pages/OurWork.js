import React from 'react'
//Images
import athlete from '../img/athlete-small.png'
import theracer from '../img/theracer-small.png'
import goodtimes from '../img/goodtimes-small.png'
//Router
import {
    Link
} from 'react-router-dom';

const OurWork = () => {
    return (
        <div id='work'>
            <div className="movie">
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link>
                    <img src={athlete} alt="The athlete" />
                </Link>
            </div>
            <div className="movie">
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link>
                    <img src={theracer} alt="The girl and the car" />
                </Link>
            </div>
            <div className="movie">
                <h2>Good Times</h2>
                <div className="line"></div>
                <Link>
                    <img src={goodtimes} alt="The couple" />
                </Link>
            </div>
        </div>
    )
}

export default OurWork
