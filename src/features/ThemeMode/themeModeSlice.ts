import { createSelector, createSlice } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

interface ThemeModeState {
  isDarkMode: boolean;
}

export const initialState: ThemeModeState = {
  isDarkMode: true,
};

const themeModeSlice = createSlice({
  name: 'themeMode',
  initialState,
  reducers: {
    switchMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { switchMode } = themeModeSlice.actions;

export const selectIsDarkMode = createSelector(
  (state: RootState) => state.themeMode,
  (themeMode) => themeMode.isDarkMode,
);

export default themeModeSlice.reducer;
