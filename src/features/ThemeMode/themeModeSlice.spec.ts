import { AnyAction } from 'redux';
import reducer, {
  initialState,
  switchMode,
  selectIsDarkMode,
} from './themeModeSlice';

describe('themeModeSlice', () => {
  describe('reducer, actions and selectors', () => {
    it('should return the initial state on first run', () => {
      const nextState = initialState;

      const result = reducer(undefined, {} as AnyAction);

      expect(result).toEqual(nextState);
    });
    it('should properly set the state when switch theme mode', () => {
      const nextState = reducer(initialState, switchMode());

      const rootState = { themeMode: nextState };

      expect(selectIsDarkMode(rootState)).toEqual(false);
    });
  });
});
