import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

const initialTime = 180;

export interface TimerState {
  time: number;
  status: 'stopped' | 'running';
}

const initialState: TimerState = {
  time: initialTime,
  status: 'stopped'
}

export const timerSlice = createSlice({
  name: 'timer',
  initialState,
  reducers: {
    start: (state) => {
      state.status = 'running';
    },
    stop: (state) => {
      state.status = 'stopped';
    },
    reset: (state) => {
      state.time = initialTime;
    },
    decrement: (state) => {
      state.time -= 1;
    }
  }
});

export const { start, stop, reset, decrement } = timerSlice.actions

export const selectTime = (state: RootState) => state.timer.time;
export const selectStatus = (state: RootState) => state.timer.status;

export { initialTime };

export default timerSlice.reducer