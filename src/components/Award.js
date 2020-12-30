import React from 'react'

const Award = ({ title, description }) => {
    return (
        <div className='award'>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>{description}</p>
        </div>
    )
}

export default Award
