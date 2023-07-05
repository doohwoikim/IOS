import React from 'react'
import { Link } from 'react-router-dom'

function Dock() {
    return (
        <div className="dock_view">
            <img src="./img/message.png" alt="message" width="75px" />
            <img src="./img/memo.png" alt="memo" width="75px" />
            <img src="./img/setting.png" alt="setting" width="75px" />
            <Link to="http://google.com">
            <img src="./img/safari.png" alt="safari" width="75px" />
            </Link>
        </div>
    )
}

export default Dock


