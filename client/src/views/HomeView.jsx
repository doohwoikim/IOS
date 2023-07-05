import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Moment from 'react-moment'
import { useInterval } from 'use-interval'
import Top from '../components/Top'

function HomeView() {
    const [nowTime, setNowTime] = useState(Date.now())

    useInterval(() => {
        setNowTime(Date.now())
    }, 1000)
    return (
        <div className='main_div'>
            <Top/>
            <div className='home_time'>
                <Moment id="date_name" format={"dddd, MMMM DD"} className={'moment-box'}>{nowTime}</Moment>
                
                <Moment format={"HH:mm"} className={'moment-box'}>{nowTime}</Moment>
            </div>
            <div className='slide-to-unlock'>
            <Link to='/main'>
                <img src="./img/slide.png" alt="slide" width="330px" />
            </Link>
            </div>
        </div>
    )
}

export default HomeView