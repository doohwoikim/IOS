import React from 'react'
import { Link } from 'react-router-dom'

function Top() {
    return (
        <div>
            <div className="index_header">
                <p>Verizon 3G</p>
                <Link to="/">
                <img id='bettery' src="./img/bettery.png" alt="bettery" />
                </Link>
            </div>
        </div>
    )
}

export default Top