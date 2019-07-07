export const INIT_GLOBAL_STATE = 'INIT_GLOBAL_STATE';

export const ADD_TO_CART = 'ADD_TO_CART';

export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

export const SET_TAB_STATUS = 'SET_TAB_STATUS';

export const SET_SECTION_STATUS = 'SET_SECTION_STATUS';

export const initGlobalState = payload => {
	return {
		type: INIT_GLOBAL_STATE,
		products: payload,
	};
};

export const addToCart = payload => {
	return {
		type: ADD_TO_CART,
		payload: payload,
	};
};

export const removeProduct = payload => {
	return {
		type: REMOVE_PRODUCT,
		payload: payload,
	};
};

export const setTabStatus = payload => {
	return {
		type: SET_TAB_STATUS,
		payload: payload
	};
};
export const setSectionStatus = () => {
	return {
		type: SET_SECTION_STATUS,

	};
};

