import {

  INIT_GLOBAL_STATE,
  REMOVE_PRODUCT,
  SET_TAB_STATUS,
  SET_SECTION_STATUS,
  SET_SUM,
  SET_ALERT_STATUS,
  SET_TMP_EMAIL,
  SET_ERR_EMAIL,
  SET_USER_NAME,
  SET_USER_TOKEN,
  SET_YEAR,
  SET_EDIT_ID,
  SET_FILTER_PRODUCTS,
  SET_LOGOUT
} from "./actionTypes";

const initialState = {
  products: [],
  userProducts: [],
  filterProducts: [],
  tabStatus: "yearly",
  sectionStatus: "products",
  sum: 0,
  deleteId: 0,
  tmpEmail: "",
  errEmail: "",
  userName: "",
  userToken: "",
  year: "",
  editId: 0,
  logout: false

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GLOBAL_STATE:
      return {
        ...state,
        products: action.payload
      };

    case REMOVE_PRODUCT:
      return {
        ...state,
        deleteId: 0
      };
    case SET_TAB_STATUS:
      return {
        ...state,
        tabStatus: action.payload
      };
    case SET_SECTION_STATUS:
      return {
        ...state,
        sectionStatus: action.payload
      };
    case SET_SUM:
      return {
        ...state,
        sum: action.payload
      };
    case SET_ALERT_STATUS:
      return {
        ...state,
        deleteId: action.payload
      };
    case SET_EDIT_ID:
      return {
        ...state,
        editId: action.payload
      };

    case SET_TMP_EMAIL:
      return {
        ...state,
        tmpEmail: action.payload
      };
    case SET_ERR_EMAIL:
      return {
        ...state,
        errEmail: action.payload
      };
    case SET_USER_NAME:
      return {
        ...state,
        userName: action.payload
      };
    case SET_USER_TOKEN:
      return {
        ...state,
        userToken: action.payload
      };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload
      };
    case SET_FILTER_PRODUCTS:
      return {
        ...state,
        filterProducts: action.payload
      };
    case SET_LOGOUT:
      return {
        ...state,
        logout: action.payload
      };




    default:
      return state;
  }
};

export default reducer;
