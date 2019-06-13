    
import React, { Component } from "react";
import { connect } from 'react-redux';
import { getUser } from './../../redux/reducer'
import Nav from "../Nav/Nav";
import axios from 'axios'

import edit_icon from './../Images/images/edit_icon.png'
import cancel_icon from './../Images/images/cancel_icon.png'
import upload_icon from './../Images/images/upload_icon.png'


class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      profilepicture: "",
      googlename: "",
      username: "",
      email: "",
      phonenumber: "",
      edit: false,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleEdit() {
    this.setState({ edit: !this.state.edit })
  }
  componentDidMount() {
    axios.get('/auth/user').then(res => {
      this.props.getUser(res.data)
    })
  }

   handleUpdate(){
     axios.put(`/api/users/${this.props.user.id}`).then(res =>{

       console.log("updated")

     })
    
     this.handleEdit()
   }

  render() {
   
    return (

      <div>
        <Nav />
        <div className="myprofile">
          {this.state.edit ?
            <div className='card'>
              <div>
                <img alt='' src={this.props.user.user_pic} style={{ height: "130px", borderRadius: "50%", margin: '20px auto 50px auto', display: 'block' }} />
              </div>
              <p>Name: {this.props.user.username}</p>
              <hr />
              {/* Name: <input type="name" className="input" name="name" value={this.state.username} onChange={e => { this.handleChange(e) }} />
              <hr /> */}
              Username: <input type="username" className="input" name="username" value={this.state.username} onChange={e => { this.handleChange(e) }} />
              <hr />
              Email: <input type="email" className="input" name="email" value={this.state.email} onChange={e => { this.handleChange(e) }} />
              <hr />
              Phone Number: <input type="phonenumber" className="input" name="phonenumber" value={this.state.phonenumber} onChange={e => { this.handleChange(e); }} />
              <hr />
              <div>
                <img src={cancel_icon} alt='' onClick = {() => {this.handleEdit()}} style={{height:'27px'}}/>
                <img alt='' src={upload_icon} onClick={() =>{this.handleUpdate()} } style={{float: 'right', height: '25px'}}/>
              </div>
            </div>
            :
            <div className='card'>
              <div>
                <img alt='' src={this.props.user.user_pic} style={{ height: "150px", borderRadius: "50%", margin: '20px auto 50px auto', display: 'block' }} />
              </div>
                <div>Name: {this.props.user.username}</div>
                <hr/>
                <div>Username: </div>
                <hr/>
                <div>Email:</div>
                <hr/>
                <div>Phone Number:</div>
                <hr/>
                <img style={{height: '22px'}} onClick = {() => {this.handleEdit()}} src={edit_icon} alt=''/>
              </div> 
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user: user
  }
}

export default connect(mapStateToProps, { getUser })(MyProfile);

