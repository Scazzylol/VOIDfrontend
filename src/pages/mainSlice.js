import { createSlice } from '@reduxjs/toolkit'

const mainSlice = createSlice({
	name: 'main',
	initialState: {
		myAddress: null,		
		myBalance: 0,
	},
	reducers: {
		setMyAddress: (state, action) => {
			state.myAddress = action.payload
		},
		setMyBalance: (state, action) => {
			state.myBalance = action.payload
		},
	}
})

export const { 
	setMyAddress,
	setMyBalance,
} = mainSlice.actions

export default mainSlice.reducer