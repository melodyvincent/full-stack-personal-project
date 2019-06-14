import React, {Component}from 'react';
import router from './router';
import './App.css';
import Axios from 'axios';
import { connect } from 'react-redux';
import {getUser} from './redux/reducer'
import {Redirect, withRouter} from 'react-router-dom'

class App extends Component {

  // componentDidMount(){
  //   Axios.get('/api/me').then(response =>{
  //     this.props.getUser(response.data || null)
  //   })
  //   .catch(() =>{
  //     this.props.getUser(null)
  //   })
  // }


  
  render() {
    // console.log(this.props.user)
    // if (this.props.user == null && this.props.location.pathname !== '/') {
    //   return <Redirect to = '/'/>
    // } 
    // if (this.props.user && !this.props.user.id) {
    //   return 'loading'
    // }
    return (
      <div className="App">
        {router}
      </div>
    );
  }
}

  

export default withRouter(connect(state => state,{getUser})(App));
