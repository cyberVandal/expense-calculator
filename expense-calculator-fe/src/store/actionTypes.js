export const INIT_GLOBAL_STATE = "INIT_GLOBAL_STATE";

export const ADD_TO_CART = "ADD_TO_CART";

export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

export const SET_TAB_STATUS = "SET_TAB_STATUS";

export const SET_SECTION_STATUS = "SET_SECTION_STATUS";

export const SET_SUM = "SET_SUM";

export const SET_ALERT_STATUS = "SET_ALERT_STATUS";

export const SET_TMP_EMAIL = "SET_TMP_EMAIL";

export const SET_ERR_EMAIL = "SET_ERR_EMAIL";

export const SET_USER_NAME = "SET_USER_NAME";

export const SET_USER_ID = "SET_USER_ID";



export const initGlobalState = payload => {
  return {
    type: INIT_GLOBAL_STATE,
    payload: payload
  };
};

export const addToCart = payload => {
  return {
    type: ADD_TO_CART,
    payload: payload
  };
};

export const removeProduct = payload => {
  return {
    type: REMOVE_PRODUCT,
    payload: payload
  };
};

export const setTabStatus = payload => {
  return {
    type: SET_TAB_STATUS,
    payload: payload
  };
};
export const setSectionStatus = payload => {
  return {
    type: SET_SECTION_STATUS,
    payload: payload
  };
};
export const setSum = payload => {
  return {
    type: SET_SUM,
    payload: payload
  };
};
export const setAlertStatus = payload => {
  return {
    type: SET_ALERT_STATUS,
    payload: payload
  };
};
export const setTmpEmail = payload => {
  return {
    type: SET_TMP_EMAIL,
    payload: payload
  };
};

export const setErrEmail = payload => {
  return {
    type: SET_ERR_EMAIL,
    payload: payload
  };
};

export const setUserName = payload => {
  return {
    type: SET_USER_NAME,
    payload: payload
  };
};
export const setUserId = payload => {
  return {
    type: SET_USER_ID,
    payload: payload
  };
};

