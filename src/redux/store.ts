import { combineReducers, configureStore } from '@reduxjs/toolkit';

import themeModeReducer from 'features/ThemeMode/themeModeSlice';

const rootReducer = combineReducers({
  themeMode: themeModeReducer,
});

export default configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
