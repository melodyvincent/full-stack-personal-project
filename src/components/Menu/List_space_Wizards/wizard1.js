import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './wizard.css'
import cancel_icon from './../../Images/images/cancel_icon.png'
import rightarrow_icon from './../../Images/images/rightarrow_icon.png'
import leftarrow_icon from './../../Images/images/leftarrow_icon.png'
import {updateWizBuildingType} from './../../../redux/reducer'
import {connect} from 'react-redux'
import checkmark_icon from './../../Images/images/checkmark_icon.png'



class Wizard1 extends Component {

  render() {

    const { updateWizBuildingType } = this.props;


    return (
      <div className = "reset">
          <div className='nav'>
            <Link to="/wizard0">
              <img className='wizardnav'alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/search">
              <img className='wizardnav'alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
            </Link>

            <Link to="/wizard2">
              <img className='wizardnav'alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }} />
            </Link>
          </div> 
        <div className="wizard">
        <div className='card' style={{display: 'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
          <h1>Please select your building type.</h1>
          <button className='smallbutton buttoncheckmark' onClick={() => updateWizBuildingType('Residential')}>
            Residential
            {this.props.buildingType === 'Residential'? <img className='animated bounceIn checkmark' alt='' src={checkmark_icon}/> : <div></div> }
          </button>
          <button className='smallbutton buttoncheckmark' onClick={() => updateWizBuildingType('Business')}>
            Business
            {this.props.buildingType === 'Business'? <img className='animated bounceIn checkmark' alt='' src={checkmark_icon}/> : <div></div> }
          </button>
          <button className='smallbutton buttoncheckmark' onClick={() => updateWizBuildingType('Other')}>
            Other
            {this.props.buildingType === 'Other'? <img className='animated bounceIn checkmark' alt='' src={checkmark_icon}/> : <div></div> }
          </button>
        </div> 

        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {

  const { buildingType } = state;
  return {
    buildingType: buildingType
  }
};

export default connect(mapStateToProps, { updateWizBuildingType })(Wizard1);
