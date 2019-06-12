import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import './wizard.css'
import cancel_icon from './../../Images/images/cancel_icon.png'
import rightarrow_icon from './../../Images/images/rightarrow_icon.png'
import leftarrow_icon from './../../Images/images/leftarrow_icon.png'
import { updateWizMonday, updateWizTuesday, updateWizWednesday, updateWizThursday, updateWizFriday, updateWizSaturday, updateWizSunday} from './../../../redux/reducer'
import {connect} from 'react-redux'



class Wizard6 extends Component {

    render() {
     
  
      const { updateWizMonday, updateWizTuesday, updateWizWednesday, updateWizThursday, updateWizFriday, updateWizSaturday, updateWizSunday } = this.props;
  
      return (
        <div className="reset">
          <div className="wizard">
            <br />
            <h1>Please indicate all available days for your parking space(s).</h1>
            <div className='card'>
              <input type="checkbox" id="Monday" name="Monday" className="" value="Monday"
                onChange={(e) => { updateWizMonday() }} />
              <label htmlFor="Monday">Monday</label>
              <hr />
  
              <input type="checkbox" id="Tuesday" name="Tuesday" className="" value="Tuesday"
                onChange={(e) => { updateWizTuesday() }} />
              <label htmlFor="Tuesday">Tuesday</label>
              <hr />
  
              <input type="checkbox" id="Wednesday" name="Wednesday" className="" value="Wednesday"
                onChange={(e) => { updateWizWednesday() }} />
              <label htmlFor="Wednesday">Wednesday</label>
              <hr />
  
              <input type="checkbox" id="Thursday" name="Thursday" className="" value="Thursday"
                onChange={(e) => { updateWizThursday() }} />
              <label htmlFor="Thursday">Thursday</label>
              <hr />
  
              <input type="checkbox" name="Friday" id="Friday" className="" value="Friday"
                onChange={(e) => { updateWizFriday() }} />
              <label htmlFor="Friday">Friday</label>
              <hr />
  
              <input type="checkbox" id="Saturday" name="Saturday" className="" value="Saturday"
                onChange={(e) => { updateWizSaturday() }} />
              <label htmlFor="Saturday" >Saturday</label>
              <hr />
  
              <input type="checkbox" id="Sunday" name="Sunday" className="" value="Sunday"
                onChange={(e) => { updateWizSunday() }} />
              <label htmlFor="Sunday" >Sunday</label>
            </div>
            <div className='nav'>
              <Link to="/wizard5">
                <img className='wizardnav' alt="" src={leftarrow_icon} style={{ height: "30px", width: "30px" }} />
              </Link>
  
              <Link to="/search">
                <img className='wizardnav' alt="" src={cancel_icon} style={{ height: "30px", width: "30px" }} />
              </Link>
  
              <Link to="/wizard7">
                <img className='wizardnav' alt="" src={rightarrow_icon} style={{ height: "30px", width: "30px" }} />
              </Link>
            </div>
  
          </div>
        </div>
      );
    }
  };
  
  function mapStateToProps(state) {
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday } = state;
    return {
      monday: monday,
      tuesday: tuesday,
      wednesday: wednesday,
      thursday: thursday,
      friday: friday,
      saturday: saturday,
      sunday: sunday
    }
  }
  
  export default connect(mapStateToProps, { updateWizMonday, updateWizTuesday, updateWizWednesday, updateWizThursday, updateWizFriday, updateWizSaturday, updateWizSunday })(Wizard6);
  