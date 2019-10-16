import {
  ADD_TO_CART,
  INIT_GLOBAL_STATE,
  REMOVE_PRODUCT,
  SET_TAB_STATUS,
  SET_SECTION_STATUS,
  SET_SUM,
  SET_ALERT_STATUS,
  SET_TMP_EMAIL,
  SET_ERR_EMAIL,
  SET_USER_NAME,
  SET_USER_ID
} from "./actionTypes";

const initialState = {
  products: [],
  tabStatus: "monthly",
  sectionStatus: "products",
  sum: 0,
  deleteId: 0,
  tmpEmail: "",
  errEmail: "",
  userName: "Goran Mitkovski",
  userI: 0

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GLOBAL_STATE:
      return {
        ...state,
        products: action.payload
      };
    case ADD_TO_CART:
      const newCartProducts = [...state.myCart];
      let isAlreadyPushed = false;
      for (let i = 0; i < newCartProducts.length; i++) {
        if (newCartProducts[i].id === action.payload.id) {
          isAlreadyPushed = true;
          break;
        }
      }
      if (!isAlreadyPushed) {
        newCartProducts.push(action.payload);
      }
      return {
        ...state,
        myCart: newCartProducts
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
      case SET_USER_ID:
      return {
        ...state,
        userId: action.payload
      };

      

    default:
      return state;
  }
};

export default reducer;
