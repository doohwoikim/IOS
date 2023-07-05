import React from 'react'
import { Link } from 'react-router-dom'

function HomeButton() {
    return (
        <div>
            <div className='home_button' >
                <Link to="/main">
                    <img src="./img/home.png" alt="home" width="65px" />
                </Link>
            </div>
        </div>
    )
}

export default HomeButton