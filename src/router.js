import React from "react";
import { Route, Switch } from "react-router-dom";
import Search from "./components/Search/search";
import EditListing from "./components/Menu/EditListing";
import Login from "./components/Login/Login";
import Messages from "./components/Messages/Messages";
import Reservations from "./components/Reservations/Reservation";
import MyVehicle from "./components/Menu/MyVehicle";
import MyProfile from "./components/Menu/MyProfile";
import MyListing from "./components/Menu/MyListings";
import Listing from "./components/Listing/listing";
import Checkout from "./components/Checkout/checkout";
import Chat from "./components/Chat/Chat";
// import Register from "./components/Register/Register";
// import firebase from './../src/components/Firebase/index'

//import wizard
import Wizard0 from "./components/Menu/List_space_Wizards/Wizard0";
import Wizard1 from "./components/Menu/List_space_Wizards/Wizard1";
import Wizard2 from "./components/Menu/List_space_Wizards/Wizard2";
import Wizard3 from "./components/Menu/List_space_Wizards/Wizard3";
import Wizard4 from "./components/Menu/List_space_Wizards/Wizard4";
import Wizard5 from "./components/Menu/List_space_Wizards/Wizard5";
import Wizard6 from "./components/Menu/List_space_Wizards/Wizard6";
import Wizard7 from "./components/Menu/List_space_Wizards/Wizard7";
import Wizard8 from "./components/Menu/List_space_Wizards/Wizard8";

export default (
  <Switch>
    <Route exact path="/" component={Login} />
    {/* <Route path="/register" component={Register} /> */}
    <Route path="/mylisting/edit/:id" component={EditListing} />
    <Route path="/search" component={Search} />
    <Route path="/messages" component={Messages} />
    <Route path="/reservations" component={Reservations} />
    <Route path="/myvehicle" component={MyVehicle} />
    <Route path="/myprofile" component={MyProfile} />
    <Route path="/MyListings" component={MyListing} />
    <Route path="/listings" component={Listing} />
    <Route path="/checkout" component={Checkout} />
    <Route path="/chat" component={Chat} />
    {/* <Route path="/myListing/edit/:id" component={EditListing} /> */}

    <Route path="/wizard0" component={Wizard0} />
    <Route path="/wizard1" component={Wizard1} />
    <Route path="/wizard2" component={Wizard2} />
    <Route path="/wizard3" component={Wizard3} />
    <Route path="/wizard4" component={Wizard4} />
    <Route path="/wizard5" component={Wizard5} />
    <Route path="/wizard6" component={Wizard6} />
    <Route path="/wizard7" component={Wizard7} />
    <Route path="/wizard8" component={Wizard8} />
  </Switch>
);
