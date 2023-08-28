import { createSlice } from '@reduxjs/toolkit';
import { login } from '../api/auth';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    success: null,
    loading: false, 
    error: null,
  },
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.success = action.payload.success;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.success = action.payload.success;
      state.loading = false;
      state.error = action.payload.message;
    },
    logout: (state) => {
      state.user = null;
      state.success = null;
    },
  },
});

export const { loginRequest, loginSuccess, loginFailure, logout } = authSlice.actions;

export const loginUser = (credentials) => async (dispatch) => {
  try {
    dispatch(loginRequest());
    
    const {data} =  await login(credentials);
    
    if(data?.user) {
      dispatch(loginSuccess(data));
    } else {
      dispatch(loginFailure(data));
    }
   
  } catch (error) {
    console.warn(error);
  }
};

export default authSlice.reducer;
