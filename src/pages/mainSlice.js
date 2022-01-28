import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
	name: 'main',
	initialState: {
		myAddress: null,		
		dividenAddress: null,
		myBalance: 0,
	},
	reducers: {
		setMyAddress: (state, action) => {
			state.myAddress = action.payload
		},
		setDividenAddress: (state, action) => {
			state.dividenAddress = action.payload
		},
		setMyBalance: (state, action) => {
			state.myBalance = action.payload
		},
	}
})

export const { 
	setMyAddress,
	setDividenAddress,
	setMyBalance,
} = mainSlice.actions

export default mainSlice.reducer