import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

export interface WordState {
  phoneme: string,
  maxScore: number,
  currentScore: number,
}

const initialState: WordState = {
  phoneme: '',
  maxScore: 0,
  currentScore: 0,
}

export const wordSlice = createSlice({
  name: 'word',
  initialState,
  reducers: {
    setPhoneme: (state, action: PayloadAction<string>) => {
      state.phoneme = action.payload;
    },
    incrementScore: (state) => { 
      state.currentScore += 1
    },
    setMax: (state) => {
      console.log(state.currentScore);
      if (state.currentScore> state.maxScore) {
        state.maxScore = state.currentScore;
      }
    },
    resetScore: (state) => {state.currentScore = 0},
  }
})

export const { setPhoneme, incrementScore, setMax, resetScore } = wordSlice.actions;

export const selectPhoneme = (state: RootState) => state.word.phoneme;
export const selectMaxScore = (state: RootState) => state.word.maxScore;
export const selectScore = (state: RootState) => state.word.currentScore;

export default wordSlice.reducer