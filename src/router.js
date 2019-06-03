import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Search from './components/Search/search'
import EditListing from './components/Menu/EditListing'
import Login from './components/Login/login'
import Messages from './components/Messages/messages'
import Reservations from './components/Reservations/reservations'
import MyVehicle from './components/Menu/MyVehicle'
import MyProfile from './components/Menu/MyProfile'
import MyListing from './components/Listing/listing'
import Listing from './components/Listing/listing'
import Checkout from './components/Checkout/checkout'
import Chat from './components/Chat/chat'

export default (
    <Switch>
        <Route exact path='/' component={Login} />
        <Route path='/myListing/edit/:id' component={EditListing} />
        <Route path='/search' component={Search} />
        <Route path='/messages' component ={Messages} />
        <Route path='reservations' component={Reservations} />
        <Route path='/my vehicle' component={MyVehicle} />
        <Route path='/myprofile' component={MyProfile} />
        <Route path='mylistings' component={MyListing} />
        <Route path='/listing' component={Listing} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/chat' component={Chat} />

    </Switch>
)



