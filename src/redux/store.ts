import { configureStore } from '@reduxjs/toolkit';
import products from './modules/products';

const store = configureStore({
	reducer: {
		products,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;