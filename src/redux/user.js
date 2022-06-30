import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logUserIn: (state, action) => {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = true;
      // eslint-disable-next-line no-param-reassign
      state.user = action.payload;
    },
    // manual log out
    logUserOut(state) {
      // eslint-disable-next-line no-param-reassign
      state.isLoggedIn = false;
      // eslint-disable-next-line no-param-reassign
      state.user = null;
    },
  },
});

export const { logUserIn, logUserOut } = userSlice.actions;
export default userSlice.reducer;
