import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { View } from '../types';

interface UIState {
  currentView: View;
}

const initialState: UIState = {
  currentView: 'home',
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setView: (state, action: PayloadAction<View>) => {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = uiSlice.actions;
export default uiSlice.reducer;