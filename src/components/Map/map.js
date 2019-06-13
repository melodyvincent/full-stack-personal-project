import React, { Component } from "react";
import store from "../../redux/store";
import { Link } from "react-router-dom";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import map_pin_icon from "./../Images/images/map_pin_icon.png";
import Axios from "axios";

const {
  StandaloneSearchBox
} = require("react-google-maps/lib/components/places/StandaloneSearchBox");

// var INITAL_LOCATION = {
//   address: 'Lehi, UT',
//   position: {
//     lat: 40.362466,
//     lng: -111.978684
//   }
// };

// var INITIAL_MAP_LEVEL = 8;
  
// var ATLANTIC_OCEAN = {
//   latitude: 29.532804,
//   longitude: -55.491477
// };

// var Application = React.createClass({
//   getInitialState: function() {
//     return{
//       isGeocodingError: false,
//       foundAddress: INITIAL_LOCATION.address
//     }
//   }
// })

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
      listings: []
    };
  }

  componentDidMount() {
    Axios.get("/all/listings").then(res => {
      this.setState({
        listings: res.data
      });
    });
  }

  // geocodeAddress (address) {
  //   this.geocoder.geocode({ 'address': address }, function handleResults(results, status) {

  //     if (status === google.maps.GeocoderStatus.OK) {

  //       this.setState({
  //         foundAddress: results[0].formatted_address,
  //         isGeocodingError: false
  //       });

  //       this.map.setCenter(results[0].geometry.location);
  //       this.marker.setPosition(results[0].geometry.location);

  //       return;
  //     }

  //     this.setState({
  //       foundAddress: null,
  //       isGeocodingError: true
  //     });

  //     this.map.setCenter({
  //       lat: ATLANTIC_OCEAN.latitude,
  //       lng: ATLANTIC_OCEAN.longitude
  //     });

  //     this.marker.setPosition({
  //       lat: ATLANTIC_OCEAN.latitude,
  //       lng: ATLANTIC_OCEAN.longitude
  //     });

  //   }.bind(this));
  // }

  // handleFormSubmit: function (submitEvent) {
  //   submitEvent.preventDefault();

  //   var address = this.searchInputElement.value;

  //   this.geocodeAddress(address);
  // }

  // componentDidMount: function () {
  //   var mapElement = this.mapElement;
    
  //   this.map = new google.maps.Map(mapElement, {
  //     zoom: INITIAL_MAP_ZOOM_LEVEL,
  //     center: {
  //       lat: INITIAL_LOCATION.position.latitude,
  //       lng: INITIAL_LOCATION.position.longitude
  //     }
  //   });

  //   this.marker = new google.maps.Marker({
  //     map: this.map,
  //     position: {
  //       lat: INITIAL_LOCATION.position.latitude,
  //       lng: INITIAL_LOCATION.position.longitude
  //     }
  //   });

  //   this.geocoder = new google.maps.Geocoder();
  // }

  //   setSearchInputElementReference: function (inputReference) {
  //   this.searchInputElement = inputReference;
  // }

  //   setMapElementReference: function (mapElementReference) {
  //   this.mapElement = mapElementReference;
  // }




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
