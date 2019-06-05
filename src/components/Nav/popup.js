import React from 'react'
import { Link } from 'react-router-dom'
import exit_icon from './../Images/images/exit_icon.png'

import './../../animate.css'

import myvehicle_icon from './../Images/images/myvehicle.png'
import myprofile_icon from './../Images/images/myprofile.png'

export default function Popup(props) {
    return (
        <div>
            <div>
                    <Link to='/myvehicle'>
                        <div className={props.handlePopup ? 'iconholder icon1 animated bounceIn' : 'hidden'}>
                            <img alt='' src={myvehicle_icon} className='popupicon'/>
                        </div> 
                    </Link>
                    <Link to='/myprofile'>
                        <div className={props.handlePopup ? 'iconholder icon2 animated bounceIn' : 'hidden'}>
                            <img alt='' src={myprofile_icon} className='popupicon'/>
                        </div> 
                    </Link>
                    <Link to=''>
                        <div href={process.env.REACT_APP_LOGOUT}>
                            <div className={props.handlePopup ? 'iconholder icon3 animated bounceIn' : 'hidden'}>
                                <img alt='' src={exit_icon} className='popupicon' style={{margin: '3px 0 0 8px'}}/>
                            </div> 
                        </div>
                    </Link>
            </div>
        </div>
    )
}


