import React, { Component } from "react";
import store from "../../redux/store";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  GoogleApiWrapper

} from "react-google-maps";
import map_pin_icon from "./../Images/images/map_pin_icon.png";
import Axios from "axios";
import CurrentLocation from '../Search/Search'

const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");


 

class Map extends Component {
  constructor() {
    super();
    this.state = {
      currentListing: {},
      selectedMarker: null,
      map: null,
      searchBox: null,
      center: {
        lat: 40.362466,
        lng: -111.978684
      },
      listings: [],
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    
  }

  
  componentDidMount() {
    Axios.get("/all/listings").then(res => {
      this.setState({
        listings: res.data
      });
    });
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })

    onClose = props =>{
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        });
      }
    }


  mapMoved() {
    console.log("mapMoved: " + JSON.stringify(this.state.map.getCenter()));
  }

  mapLoaded(map) {
    if (this.state.map != null) {
      return;
    }
    this.setState({
      map: map
    });
  }

  zoomChanged() {
    console.log("zoomChanged:" + this.state.map.getZoom());
  }

  onSearchBoxMounted(searchBox) {
    if (this.state.searchBox !== null) {
      return;
    }
    this.setState({
      searchBox: searchBox
    });
  }

  onPlacesChanged() {
    const places = this.state.searchBox.getPlaces();

    this.setState({
      center: {
        // lat: places[0].geometry.location.lat(),
        // lng: places[0].geometry.location.lng()
      }
    });
  }

  markerOnClickHandler(marker) {
    this.setState({ selectedMarker: marker.id });
    this.setState({ currentListing: marker });
  }

  handleDetails() {
    store.dispatch({
      type: "UPDATE_CURRENT_LISTING",
      payload: this.state.currentListing
    });
  }

  render() {
    const markers = this.props.markers;

    const mappedListings = this.state.listings.map(listing => (
      <div className="searchcard">
        <h1 style={{ textAlign: "center", padding: "8px 0 0 0" }}>
          Listing Info
        </h1>
        <hr />
        <div style={{ width: "100%", height: "40px" }}>
          <p style={{ float: "left" }}>Address:{listing.address}</p>
          <p style={{ float: "right" }}>{this.state.currentListing.address}</p>
        </div>
        <div style={{ width: "100%", height: "40px" }}>
          <p style={{ float: "left" }}>Price: {listing.price}</p>
          <p style={{ float: "right" }}>
            $
            {this.state.currentListing.price &&
              this.state.currentListing.price.toFixed(2)}
          </p>
        </div>
        <Link to="/listings">
          <button
            className="smallbutton"
            style={{ margin: "0 0 10px 0" }}
            onClick={e => {
              this.handleDetails();
            }}
          >
            Details
          </button>
        </Link>
      </div>
    ));
    return (
      <div>
        <div>
          <StandaloneSearchBox
            ref={this.onSearchBoxMounted.bind(this)}
            bounds={this.props.bounds}
            onPlacesChanged={this.onPlacesChanged.bind(this)}
          >
            <input type="text" placeholder="Search" className="search" />
          </StandaloneSearchBox>
          <GoogleMap
            onZoomChanged={this.zoomChanged.bind(this)}
            ref={this.mapLoaded.bind(this)}
            onDragEnd={this.mapMoved.bind(this)}
            defaultZoom={this.props.zoom}
            center={this.state.center}
          >
            {markers.map((marker, i) => (
              <Marker
                key={i}
                {...marker}
                position={this.props.markers[i]}
                icon={map_pin_icon}
                onClick={e => this.markerOnClickHandler(marker)}
              >
                {this.state.selectedMarker === marker.id ? (
                  <InfoWindow>
                    <div>
                      <span>${marker.price.toFixed(2)}</span>
                    </div>
                  </InfoWindow>
                ) : (
                  ""
                )}
              </Marker>
            ))}
          </GoogleMap>
      
        </div>
        {mappedListings}
      </div>
    );
  }
}

export default withScriptjs(withGoogleMap(Map));

