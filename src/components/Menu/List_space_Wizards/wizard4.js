import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import './wizard.css'
import cancel_icon from './../../Images/images/cancel_icon.png'
import rightarrow_icon from './../../Images/images/rightarrow_icon.png'
import leftarrow_icon from './../../Images/images/leftarrow_icon.png'


export default class Wizard4 extends Component{
    render() {
        return (
          <div className = "reset">
            <div className="wizard">
              <h1>Street View</h1>
              <br />
              <div className='nav'>
                <Link to="/wizard3">
                  <img className='wizardnav'alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }}/>
                </Link>
    
                <Link to="/search">
                  <img className='wizardnav'alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
                </Link>
    
                <Link to="/wizard5">
                  <img className='wizardnav'alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }}/>
                </Link>
              </div> 
    
            </div>
          </div>
        );
      }
    }
    


