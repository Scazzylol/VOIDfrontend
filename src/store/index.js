import { configureStore } from '@reduxjs/toolkit'
import mainReducer from '../pages/mainSlice'

export const store = configureStore({
	reducer: {
		main: mainReducer
	}
})
