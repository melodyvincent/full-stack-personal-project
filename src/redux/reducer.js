import axios from "axios";

const initialState = {
  user: {},
  lat: 0,
  lng: 0,
  address: "",
  buildingType: "",
  spaceType: "",
  numSpace: 0,
  spaceQuantity: 0,
  spaceSize: "",
  description: "",
  instructions: "",
  streetView: "",
  covered: false,
  lit: false,
  charging: false,
  camera: false,
  fenced: false,
  guarded: false,
  cash: false,
  credit: false,
  venmo: false,
  paypal: false,
  applePay: false,
  monday: false,
  tuesday: false,
  wednesday: false,
  thursday: false,
  friday: false,
  saturday: false,
  sunday: false,
  picOne: null,
  picTwo: null,
  picThree: null,
  picFour: null,
  rate: 0,
  currentListing: {},
  myprofile: ""
};

// const initialState = {
//     username: '',
//     firstname: '',
// }

// const UPDATE_USER = 'UPDATE_USER'
// const CLEAR_USER = 'CLEAR_USER'

const GET_USER_DATA = "GET_USER_DATA";
const UPDATE_WIZ_LAT = "UPDATE_WIZ_LAT";
const UPDATE_WIZ_LNG = "UPDATE_WIZ_LNG";
const UPDATE_WIZ_ADDRESS = "UPDATE_WIZ_ADDRESS";
const UPDATE_WIZ_BUILDING_TYPE = "UPDATE_WIZ_BUILDING_TYPE";
const UPDATE_WIZ_SPACE_TYPE = "UPDATE_WIZ_SPACE_TYPE";
const UPDATE_WIZ_SPACE_QUANTITY = "UPDATE_WIZ_SPACE_QUANTITY";
const UPDATE_WIZ_SPACE_SIZE = "UPDATE_WIZ_SPACE_SIZE";
const UPDATE_WIZ_DESCRIPTION = "UPDATE_WIZ_DESCRIPTION";
const UPDATE_WIZ_INSTRUCTIONS = "UPDATE_WIZ_INSTRUCTIONS";
const UPDATE_WIZ_STREET_VIEW = "UPDATE_WIZ_STREET_VIEW";
const UPDATE_WIZ_COVERED = "UPDATE_WIZ_COVERED";
const UPDATE_WIZ_LIT = "UPDATE_WIZ_LIT";
const UPDATE_WIZ_CHARGING = "UPDATE_WIZ_CHARGING";
const UPDATE_WIZ_CAMERA = "UPDATE_WIZ_CAMERA";
const UPDATE_WIZ_FENCED = "UPDATE_WIZ_FENCED";
const UPDATE_WIZ_GUARDED = "UPDATE_WIZ_GUARDED";
const UPDATE_WIZ_CASH = "UPDATE_WIZ_CASH";
const UPDATE_WIZ_CREDIT = "UPDATE_WIZ_CREDIT";
const UPDATE_WIZ_VENMO = "UPDATE_WIZ_VENMO";
const UPDATE_WIZ_PAYPAL = "UPDATE_WIZ_PAYPAL";
const UPDATE_WIZ_APPLE_PAY = "UPDATE_WIZ_APPLE_PAY";
const UPDATE_WIZ_MONDAY = "UPDATE_WIZ_MONDAY";
const UPDATE_WIZ_TUESDAY = "UPDATE_WIZ_TUESDAY";
const UPDATE_WIZ_WEDNESDAY = "UPDATE_WIZ_WEDNESDAY";
const UPDATE_WIZ_THURSDAY = "UPDATE_WIZ_THURSDAY";
const UPDATE_WIZ_FRIDAY = "UPDATE_WIZ_FRIDAY";
const UPDATE_WIZ_SATURDAY = "UPDATE_WIZ_SATURDAY";
const UPDATE_WIZ_SUNDAY = "UPDATE_WIZ_SUNDAY";
const UPDATE_WIZ_PIC_ONE = "UPDATE_WIZ_PIC_ONE";
const UPDATE_WIZ_RATE = "UPDATE_WIZ_RATE";
const UPDATE_CURRENT_LISTING = "UPDATE_CURRENT_LISTING";
const UPDATE_WIZ_PIC_TWO = "UPDATE_WIZ_PIC_TWO";
const UPDATE_WIZ_PIC_THREE = "UPDATE_WIZ_PIC_THREE";
const UPDATE_WIZ_PIC_FOUR = "UPDATE_WIZ_PIC_FOUR";
const UPDATE_MYPROFILE = "UPDATE_MYPROFILE"

export default function reducer(state = initialState, action) {

  switch (action.type) {
    case GET_USER_DATA:
      return { ...state, user: action.payload };

    case UPDATE_WIZ_LAT:
      return Object.assign({}, state, { lat: action.payload });

    case UPDATE_WIZ_LNG:
      return Object.assign({}, state, { lng: action.payload });

    case UPDATE_WIZ_ADDRESS:
      return Object.assign({}, state, { address: action.payload });

    case UPDATE_WIZ_BUILDING_TYPE:
      return Object.assign({}, state, { buildingType: action.payload });

    case UPDATE_WIZ_SPACE_TYPE:
      return Object.assign({}, state, { spaceType: action.payload });

    case UPDATE_WIZ_SPACE_QUANTITY:
      return Object.assign({}, state, { spaceQuantity: action.payload });

    case UPDATE_WIZ_SPACE_SIZE:
      return Object.assign({}, state, { spaceSize: action.payload });

    case UPDATE_WIZ_DESCRIPTION:
      return Object.assign({}, state, { description: action.payload });

    case UPDATE_WIZ_INSTRUCTIONS:
      return Object.assign({}, state, { instructions: action.payload });

    case UPDATE_WIZ_STREET_VIEW:
      return Object.assign({}, state, { streetView: action.payload });

    case UPDATE_WIZ_COVERED:
      return Object.assign({}, state, { covered: action.payload });

    case UPDATE_WIZ_LIT:
      return Object.assign({}, state, { lit: action.payload });

    case UPDATE_WIZ_CHARGING:
      return Object.assign({}, state, { charging: action.payload });

    case UPDATE_WIZ_CAMERA:
      return Object.assign({}, state, { camera: action.payload });

    case UPDATE_WIZ_FENCED:
      return Object.assign({}, state, { fenced: action.payload });

    case UPDATE_WIZ_GUARDED:
      return Object.assign({}, state, { guarded: action.payload });

    case UPDATE_WIZ_CASH:
      return Object.assign({}, state, { cash: action.payload });

    case UPDATE_WIZ_CREDIT:
      return Object.assign({}, state, { credit: action.payload });

    case UPDATE_WIZ_VENMO:
      return Object.assign({}, state, { venmo: action.payload });

    case UPDATE_WIZ_PAYPAL:
      return Object.assign({}, state, { paypal: action.payload });

    case UPDATE_WIZ_APPLE_PAY:
      return Object.assign({}, state, { applePay: action.payload });

    case UPDATE_WIZ_MONDAY:
      return Object.assign({}, state, { monday: !state.monday });

    case UPDATE_WIZ_TUESDAY:
      return Object.assign({}, state, { tuesday: !state.tuesday });

    case UPDATE_WIZ_WEDNESDAY:
      return Object.assign({}, state, { wednesday: !state.wednesday });

    case UPDATE_WIZ_THURSDAY:
      return Object.assign({}, state, { thursday: !state.thursday });

    case UPDATE_WIZ_FRIDAY:
      return Object.assign({}, state, { friday: !state.friday });

    case UPDATE_WIZ_SATURDAY:
      return Object.assign({}, state, { saturday: !state.saturday });

    case UPDATE_WIZ_SUNDAY:
      return Object.assign({}, state, { sunday: !state.sunday });

    case UPDATE_WIZ_PIC_ONE:
      return Object.assign({}, state, { picOne: action.payload });

    case UPDATE_WIZ_RATE:
      return Object.assign({}, state, { rate: action.payload });

    case UPDATE_CURRENT_LISTING:
      return Object.assign({}, state, { currentListing: action.payload });

    case UPDATE_WIZ_PIC_TWO:
      return Object.assign({}, state, { picTwo: action.payload });

    case UPDATE_WIZ_PIC_THREE:
      return Object.assign({}, state, { picThree: action.payload });

    case UPDATE_WIZ_PIC_FOUR:
      return Object.assign({}, state, { picFour: action.payload });

    case UPDATE_MYPROFILE:
      return Object.assign({}, state, { myprofile: action.payload});
    default:
      return state;
  }
}

export function getUser(user) {
  return {
    type: GET_USER_DATA,
    payload: user
  };
}

export function updateWizLat(lat) {
  return {
    type: UPDATE_WIZ_LAT,
    payload: lat
  };
}

export function updateWizLng(lng) {
  return {
    type: UPDATE_WIZ_LNG,
    payload: lng
  };
}

export function updateWizAddress(address) {
  return {
    type: UPDATE_WIZ_ADDRESS,
    payload: address
  };
}

export function updateWizBuildingType(building_type) {
  return {
    type: UPDATE_WIZ_BUILDING_TYPE,
    payload: building_type
  };
}

export function updateWizSpaceType(spaceType) {
  return {
    type: UPDATE_WIZ_SPACE_TYPE,
    payload: spaceType
  };
}

export function updateWizSpaceQuantity(spaceQuantity) {
  return {
    type: UPDATE_WIZ_SPACE_QUANTITY,
    payload: spaceQuantity
  };
}

export function updateWizSpaceSize(spaceSize) {
  return {
    type: UPDATE_WIZ_SPACE_SIZE,
    payload: spaceSize
  };
}

export function updateWizDescription(description) {
  return {
    type: UPDATE_WIZ_DESCRIPTION,
    payload: description
  };
}

export function updateWizInstructions(instructions) {
  return {
    type: UPDATE_WIZ_INSTRUCTIONS,
    payload: instructions
  };
}

export function updateWizStreetView(streetView) {
  return {
    type: UPDATE_WIZ_STREET_VIEW,
    payload: streetView
  };
}

export function updateWizCovered(covered) {
  return {
    type: UPDATE_WIZ_COVERED,
    payload: covered
  };
}

export function updateWizLit(lit) {
  return {
    type: UPDATE_WIZ_LIT,
    payload: lit
  };
}

export function updateWizCharging(charging) {
  return {
    type: UPDATE_WIZ_CHARGING,
    payload: charging
  };
}

export function updateWizCamera(camera) {
  return {
    type: UPDATE_WIZ_CAMERA,
    payload: camera
  };
}

export function updateWizFenced(fenced) {
  return {
    type: UPDATE_WIZ_FENCED,
    payload: fenced
  };
}

export function updateWizGuarded(guarded) {
  return {
    type: UPDATE_WIZ_GUARDED,
    payload: guarded
  };
}

export function updateWizCash(cash) {
  return {
    type: UPDATE_WIZ_CASH,
    payload: cash
  };
}

export function updateWizCredit(credit) {
  return {
    type: UPDATE_WIZ_CREDIT,
    payload: credit
  };
}

export function updateWizVenmo(venmo) {
  return {
    type: UPDATE_WIZ_VENMO,
    payload: venmo
  };
}

export function updateWizPaypal(paypal) {
  return {
    type: UPDATE_WIZ_PAYPAL,
    payload: paypal
  };
}

export function updateWizApplePay(applePay) {
  return {
    type: UPDATE_WIZ_APPLE_PAY,
    payload: applePay
  };
}

export function updateWizMonday() {
  return {
    type: UPDATE_WIZ_MONDAY
    
  };
}

export function updateWizTuesday() {
  return {
    type: UPDATE_WIZ_TUESDAY
   
  };
}

export function updateWizWednesday() {
  return {
    type: UPDATE_WIZ_WEDNESDAY
  
  };
}

export function updateWizThursday() {
  return {
    type: UPDATE_WIZ_THURSDAY
    
  };
}

export function updateWizFriday() {
  return {
    type: UPDATE_WIZ_FRIDAY
  
  };
}

export function updateWizSaturday() {
  return {
    type: UPDATE_WIZ_SATURDAY
   
  };
}

export function updateWizSunday() {
  return {
    type: UPDATE_WIZ_SUNDAY
    
  };
}

export function updateWizPicOne(picOne) {
  return {
    type: UPDATE_WIZ_PIC_ONE,
    payload: picOne
  };
}

export function updateWizRate(rate) {
  return {
    type: UPDATE_WIZ_RATE,
    payload: rate
  };
}

export function updateCurrentListing(currentListing) {
  return {
    type: UPDATE_CURRENT_LISTING,
    payload: currentListing
  };
}

export function updateWizPicTwo(picTwo) {
  return {
    type: UPDATE_WIZ_PIC_TWO,
    payload: picTwo
  };
}

export function updateWizPicThree(picThree) {
  return {
    type: UPDATE_WIZ_PIC_THREE,
    payload: picThree
  };
}

export function updateWizPicFour(picFour) {
  return {
    type: UPDATE_WIZ_PIC_FOUR,
    payload: picFour
  };
}
export function updateMyProfile(myProfile) {
  return {
    type: UPDATE_MYPROFILE,
    payload: myProfile
  };
}
