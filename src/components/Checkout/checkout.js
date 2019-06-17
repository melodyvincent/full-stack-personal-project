import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import {
  DateRangePicker,
  DateRange,
  SingleDatePicker,
  DayPickerRangeController
} from "react-dates";
import moment from "moment";
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import left_arrow_icon from "./../Images/images/leftarrow_icon.png";
import StripeCheckOut from "react-stripe-checkout";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      listing: {},
      vehicles: [],
      host: {},
      currentVehicle: "select",
      currentPayment: "select",
      paymentArray: [],
      date: null,
      startDate: "",
      endDate: "",
      // focused: null,
      total: null
    };
  }
  componentDidMount() {
    this.getListing();
  }
  getListing = () => {
    const { user } = this.props;
    axios.get(`/api/listings`).then(res => {
      this.setState({
        listing: res.data[0]
      });
      this.getVehicle(user.id);
      this.updateTotal();
    });
  };
  getVehicle = id => {
    axios.get(`/api/vehicle/${id}`).then(res => {
      this.setState({
        vehicles: res.data,
        isLoading: false
      });
    });
  };
  handleReserve = () => {
    const { user } = this.props;
    const { listing, total } = this.state;
    axios
      .post(`/api/reservation/${user.id}`, {
        user_id: user.id,
        vehicle_id: this.state.currentVehicle,
        start_time: this.state.startDate,
        end_time: this.state.endDate,
        payment_type: this.state.currentPayment,
        total: total,
        listing_id: listing.id
      })
      .then(response => {});
  };
  updateTotal = () => {
    const { price } = this.state.listing;
    this.setState({
      total: Math.round(price * 1.13 * 100) / 100
    });
  };

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  };
  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  };
  updateCurrentVehicle = e => {
    this.setState({
      currentVehicle: e.target.value
    });
  };
  updateCurrentPayment = e => {
    this.setState({
      currentPayment: e.target.value
    });
  };

  onToken = token => {
    token.card = void 0;
    axios
      .post("/api/payment", { token, amount: this.state.total })
      .then(response => {
        alert("we are in business");
      });
  };

  isAvailable = date => {
    const {
      monday,
      tuesday,
      wednesday,
      thursday,
      friday,
      saturday,
      sunday
    } = this.state.listing;
    const day = date.day();
    var filterMon = day;
    var filterTue = day;
    var filterWed = day;
    var filterThu = day;
    var filterFri = day;
    var filterSat = day;
    var filterSun = day;
    if (!monday) {
      filterMon = day !== 1;
    }
    if (!tuesday) {
      filterTue = day !== 2;
    }
    if (!wednesday) {
      filterWed = day !== 3;
    }
    if (!thursday) {
      filterThu = day !== 4;
    }
    if (!friday) {
      filterFri = day !== 5;
    }
    if (!saturday) {
      filterSat = day !== 6;
    }
    if (!sunday) {
      filterSun = day !== 0;
    }
    return (
      filterMon &&
      filterTue &&
      filterWed &&
      filterThu &&
      filterFri &&
      filterSat &&
      filterSun
    );
  };
  render() {
    console.log(this.state.listing);

    const {
      address,
      apple_pay,
      cash,
      credit,
      pay_pal,
      venmo,
      price
    } = this.state.listing;
    const { vehicles, total } = this.state;
    let mappedVehicles = vehicles.map(vehicle => {
      return (
        <option key={vehicle.id} value={`${vehicle.color} ${vehicle.make}`}>{`${
          vehicle.color
        } ${vehicle.make}`}</option>
      );
    });
    return (
      <div>
        {this.state.isLoading ? (
          <div>
            <p>LOADING . . .</p>
          </div>
        ) : (
          <div>
            <Link to="/listing">
              <img alt="" src={left_arrow_icon} />
            </Link>
            <div className="card">
              <h1>Checkout</h1>
              <hr />
              <p style={{ fontSize: "15px" }}>Address:{address}</p>
            </div>
            <div className="card">
              <h1>Vehicles</h1>
              <hr />
              <select
                value={this.state.currentVehicle}
                onChange={this.updateCurrentVehicle}
                className="dropdownselect"
              >
                <option value="select">Select a Vehicle</option>
                {mappedVehicles}
              </select>
            </div>
            <div className="card">
              <h1>Schedule</h1>
              <hr />

              <DatePicker
                placeholderText="Click to select a start date"
                selected={this.state.startDate}
                onChange={this.handleChangeStart}
                // dateFormat="MM-DD-YYYY"
                timeCaption="time"
                maxDate={moment().add(5, "months")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                todayButton={"TODAY"}
              />
              <DatePicker
                placeholderText="Click to select an end date"
                selected={this.state.endDate}
                onChange={this.handleChangeEnd}
                // dateFormat="LLL"
                timeCaption="time"
                maxDate={moment().add(5, "months")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                // todayButton={"TODAY"}
              />
            </div>
            <div className="card">
              <h1 style={{ textAlign: "center" }}>Payments</h1>
              <hr />
              <select
                onChange={this.updateCurrentPayment}
                className="dropdownselect"
              >
                <option value="select">Select a Payment</option>
                {!cash ? null : <option value="cash">Cash</option>}
                {!credit ? null : <option value="credit">Credit</option>}
                {!pay_pal ? null : <option value="paypal">PayPal</option>}
                {!apple_pay ? null : (
                  <option value="applepay">Apple Pay</option>
                )}
                {!venmo ? null : <option value="venmo">Venmo</option>}
              </select>
              <StripeCheckOut
                token={this.onToken}
                amount={999}
                billingAddress={true}
                description="Parking Reservation"
                // image='/src/Images/images/logo.png'
                locale="auto"
                name="ez-parking"
                stripeKey="pk_test_LhOnBt3bI7O2jnZpAKWxza9z00EvoiKyHN"
                zipCode
                panelLabel="Reservation payment for{{amount}}"
              />
            </div>
            <div className="card" style={{ height: "180px" }}>
              <h1>Cost breakdown</h1>
              <hr />
              <div style={{ width: "100%", height: "40px" }}>
                <p style={{ float: "left", padding: "10px" }}>Parking Fare:</p>
                <p style={{ float: "right", padding: "10px" }}>${price}.00</p>
              </div>
              <div style={{ width: "100%", height: "40px" }}>
                <p style={{ float: "left", padding: "10px" }}>Service Fee:</p>
                <p style={{ float: "right", padding: "10px" }}>
                  {" "}
                  ${price * 0.13}
                </p>
              </div>
              <div style={{ width: "100%", height: "40px" }}>
                <p style={{ float: "left", padding: "10px" }}>Total:</p>
                <p style={{ float: "right", padding: "10px" }}>${total}</p>
              </div>
            </div>
            <Link to="/reservations">
              <button className="bigbutton" onClick={this.handleReserve}>
                Reserve Now
              </button>
            </Link>
          </div>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user,
    currentListing: state.currentListing
  };
}

export default connect(mapStateToProps)(Checkout);
