import {
  ADD_TO_CART,
  INIT_GLOBAL_STATE,
  REMOVE_PRODUCT,
  SET_TAB_STATUS,
  SET_SECTION_STATUS,
  SET_SUM,
  SET_ALERT_STATUS,
  SET_TMP_EMAIL,
  SET_ERR_EMAIL
} from "./actionTypes";

const initialState = {
  products: [],
  tabStatus: "monthly",
  sectionStatus: "products",
  sum: 0,
  deleteId: 0,
  tmpEmail: "",
  errEmail: ""

};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_GLOBAL_STATE:
      return {
        ...state,
        products: action.products
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
      const filtered = state.products.filter(
        prod => prod.id !== action.payload
      );
      return {
        ...state,
        products: filtered,
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
    default:
      return state;
  }
};

export default reducer;
