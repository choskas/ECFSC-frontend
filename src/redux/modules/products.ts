import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';

const PRODUCTS = 'main/products/PRODUCTS';

const INITIAL_STATE = {
	products: [],
};

export default function deck(state = INITIAL_STATE, action: AnyAction) {
	switch (action.type) {
		case PRODUCTS:
			return { ...state, products: action.payload };
		default:
			return state;
	}
}

export const addProduct = (data: any) => async (dispatch: Dispatch<any>) => {
	try {
		dispatch({
            type: PRODUCTS,
			payload: data.myDeck,
		});
	} catch (error) {
		console.log(error)
	}
};
