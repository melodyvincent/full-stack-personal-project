import React from 'react'
import { Link } from 'react-router-dom'
import exit_icon from './../Images/images/exit_icon.png'

import './../../animate.css'

import myvehicle_icon from './../Images/images/myvehicle.png'
import myprofile_icon from './../Images/images/myprofile.png'
import chat_icon from './../Images/images/chat_icon.png'
import email_icon from './../Images/images/email_icon.png'

export default function Popup(props) {
    return (
        <div>
            <div>
                    <Link to='/myprofile'>
                        <div className={props.handlePopup ? 'iconholder icon2 animated bounceIn' : 'hidden'}>
                            <img alt='' src={myprofile_icon} className='popupicon'/>
                        </div> 
                    </Link>         
                    <Link to='/myvehicle'>
                        <div className={props.handlePopup ? 'iconholder icon1 animated bounceIn' : 'hidden'}>
                            <img alt='' src={myvehicle_icon} className='popupicon'/>
                        </div> 
                    </Link>
                    
                    {/* <Link to='/chat'>
                        <div className={props.handlePopup ? 'iconholder icon2 animated bounceIn' : 'hidden'}>
                            <img alt='' src={chat_icon} className='popupicon'/>
                        </div> 
                    </Link>
                    <Link to='/email'>
                        <div className={props.handlePopup ? 'iconholder icon2 animated bounceIn' : 'hidden'}>
                            <img alt='' src={email_icon} className='popupicon'/>
                        </div> 
                    </Link> */}
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


