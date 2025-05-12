import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  OtpLength: 0,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        OtpLengthIncrement: (state) => {
            state.OtpLength += 1;
        },

        OtpLengthDecremental: (state) => {
            state.OtpLength -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { OtpLengthIncrement, OtpLengthDecremental } = authSlice.actions;

export default authSlice.reducer;