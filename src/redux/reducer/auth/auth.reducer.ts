import { createSlice } from '@reduxjs/toolkit';
import { AuthState } from './auth.type';

const initialState: AuthState = {
  member: 0,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});
export const {} = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
