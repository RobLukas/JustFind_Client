import { createSlice } from '@reduxjs/toolkit';

interface ThemeModeState {
  isDarkMode: boolean;
}

const initialState: ThemeModeState = {
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

export default themeModeSlice.reducer;
