import React, { Component } from "react";
import Map from "../Map/Map";
import Nav from "../Nav/Nav";
import axios from "axios";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import ReactDOM from 'react-dom'

const mapStyles = {
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
}





class Search extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      markers: []

      
    };


//   componentDidMount() {
//     this.props.getUser();
//     this.getListings();
// } 
  componentDidMount = async() => {
    await axios.get("/auth/user").then(res => {
   
      this.props.getUser(res.data);
    });

    this.getListings();
  }

  getListings() {
    
    axios.get("/api/listings").then(res => {
     
      this.setState({
        markers: res.data,
        isLoading: false
      });
    });
  }

  render() {
    const style = Object.assign({}, mapStyles.map);
  
    return (
      <div>
        {this.state.isLoading ? (
          <div>
            <Nav />
            <p>Loading</p>
          </div>
        ) : (
          <div className="">
            <Nav />
            <div className="">
              <Map
                zoom={14}
                markers={this.state.markers}
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyAQQH-EvgcFwG9b-bonTu98AQm7Hji1oCA&v=3.exp&libraries=geometry,drawing,places`}
                containerElement={<div style={{ height: `400px` }} />}
                loadingElement={<div style={{ height: `90%` }} />}
                mapElement={<div style={{ height: `95%` }} />}
              />

            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}



export default connect(
  mapStateToProps,
  { getUser }
)(Search);

