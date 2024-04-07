import { createSlice } from '@reduxjs/toolkit';
import { SettingsType } from './settings.type';

const initialState: SettingsType = {
  mode: false,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setMode: (state, action) => {
      state.mode = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const settingsActions = settingsSlice.actions;
const setingsReducer = settingsSlice.reducer;
export default setingsReducer;
